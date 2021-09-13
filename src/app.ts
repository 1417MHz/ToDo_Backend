import express from 'express'
import morgan from 'morgan'
import router from './ctrl'
import {init} from './module'

const app = express()

app.use(morgan('combined'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(4000, async () => {
  await init()
  console.log(`nodejs running at 4000`)
})
