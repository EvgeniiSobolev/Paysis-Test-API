import 'dotenv/config'
import supertest from "supertest"

before(async function () {
   let response = await supertest(process.env.BASE_URL)
        .post('/auth')
        .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    process.env['TOKEN'] = response.body.token
})