import jwt from 'jsonwebtoken'

// 토큰을 복호화하여 유저 증명
async function certificateUser(userToken, userInfo) {
  try {
    jwt.verify(userToken, 'myToken', function (err, decoded) {
      if (decoded === userInfo.user_id.toString()) {
        console.log('* Token Verified')
        return true
      }
      throw new Error(err)
    })
  } catch (e) {
    throw e
  }
}

export {certificateUser}
