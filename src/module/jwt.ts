import jwt from 'jsonwebtoken'

// 토큰을 복호화하여 유저 증명
async function certificateUser(userToken, userInfo) {
  return new Promise((resolve, reject) => {
    jwt.verify(userToken, 'myToken', (err, decoded) => {
      if (decoded === userInfo.user_id.toString()) {
        console.log('* Token Verified')
        resolve(true)
      } else {
        reject(err)
      }
    })
  })
}

export {certificateUser}
