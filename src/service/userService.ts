import {User} from "../model"

//로그인
async function findOne(): Promise<number> {
  try {
    const result = await User.findOne()
    return result + 7
  } catch (e) {
    throw e
  }
}

//회원가입

//토큰 리프레시

export {findOne}
