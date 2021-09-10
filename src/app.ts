import express from 'express'
import router from './ctrl'

const app = express()

app.use(router)

app.listen(4000, () => {
  console.log(`nodejs running at 4000`)
})