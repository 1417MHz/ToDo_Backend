import express from 'express'
import router from './ctrl'
import {init} from './module'

const app = express()

app.use(router)

app.listen(4000, async () => {
  await init()
  console.log(`nodejs running at 4000`)
})