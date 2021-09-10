import {User} from "../model"

//로그인
async function findOne(): Promise<void> {
  try {
    User.findOne()
  } catch (e) {
    throw e
  }
}

//회원가입

//토큰 리프레시

export {findOne}
