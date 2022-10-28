import 'dotenv/config'
import supertest from "supertest"
import ConfigHelper from "../helpers/config.helper";

before(async function () {
   let response = await supertest(process.env.BASE_URL)
        .post('/auth')
        .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    process.env['TOKEN'] = response.body.token
})

after(async function(){
    const configHelper = new ConfigHelper()
    await configHelper.delete()
})