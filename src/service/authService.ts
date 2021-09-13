import bcrypt from 'bcrypt'
import {error} from 'winston'
import jwt from 'jsonwebtoken'
import {IUser, IUserCreate} from '../interface/user'
import {certificateUser} from '../module/jwt'
import {User} from '../model'

const saltRounds = 10

//로그인
async function login(user: IUser): Promise<any> {
  try {
    // 1. 입력받은 이메일 정보가 DB에 있는지 확인
    const userInfo: IUser = await User.loginUser(user)
    if (!userInfo) {
      throw new Error('User not Found')
    } else {
      // 2. 이메일 정보가 DB에 있다면, 입력받은 비밀번호가 일치한지 확인
      const verifyStatus = await verifyUser(user.password, userInfo.password)
      if (verifyStatus) {
        // 3. 비밀번호가 일치할 경우 토큰 생성
        //    user_id + 'myToken' 을 통해 토큰 생성
        const userToken = jwt.sign(userInfo.user_id.toString(), 'myToken')
        return userToken
      }
    }
  } catch (e) {
    throw e
  }
}

// 입력받은 유저 비밀번호와 DB 속 비밀번호가 일치한지 확인
async function verifyUser(inputPassword, encryptedPassword) {
  return new Promise((resolve, reject) => {
    // DB 속 비밀번호를 복호화 하여 입력받은 비밀번호와 대조
    bcrypt.compare(inputPassword, encryptedPassword, (err, isMatch) => {
      if (err) reject(err)
      else {
        console.log('* Password Verified')
        resolve(isMatch)
      }
    })
  })
}

//회원가입
async function register(user: IUserCreate): Promise<any> {
  try {
    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        throw new Error(err)
      }
      console.log(salt)
      bcrypt.hash(user.password, salt, (err, hash) => {
        console.log(user.password)
        if (err) {
          throw new Error(err)
        }
        user.hash = salt
        user.password = hash // 암호화된 비밀번호로 교체

        // DB에 유저 정보 입력
        User.createUser(user)
      })
    })
  } catch (e) {
    throw e
  }
}

//토큰 리프레시

export {login, register}
