import express from 'express'
import router from './ctrl'
import {init} from './module'
import morgan from 'morgan'

const app = express()

app.use(morgan('combined'))

app.use(express.json({limit: '1mb'}))
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(4000, async () => {
  await init()
  console.log(`nodejs running at 4000`)
})