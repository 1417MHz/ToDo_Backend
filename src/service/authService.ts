import bcrypt from 'bcrypt'
import {error} from 'winston'
import {IUser, IUserCreate} from '../interface/user'
import {User} from '../model'

const saltRounds = 10

//로그인
async function login(user: IUser): Promise<any> {
  try {
    const userInfo: IUser = await User.loginUser(user)
    if (!userInfo) {
      throw new Error('User not Found')
    } else {
      bcrypt.compare(user.password, userInfo.password, function (err, isMatch) {
        if (err) {
          throw new Error(err)
        }
        return isMatch
      })
    }
  } catch (e) {
    throw e
  }
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
