import 'dotenv/config'
import supertest from "supertest"
import ConfigHelper from "../helpers/config.helper";
import {start} from './server'

const baseUrl = process.env.BASE_URL
const port = process.env.PORT
const isMock = baseUrl.includes('localhost') && baseUrl.includes(port)

if(isMock)
    start(port)

before(async function () {
   let response = await supertest(process.env.BASE_URL)
        .post('/auth')
        .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    process.env['TOKEN'] = response.body.token
})

after(async function(){
    if(!isMock) {
        const configHelper = new ConfigHelper()
        await configHelper.delete()
    }
})