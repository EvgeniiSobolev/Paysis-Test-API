import supertest from 'supertest';
import {expect} from 'chai'
import 'dotenv/config'

describe('Authentication', function () {
    it('Log in with valid credentials', function () {
        supertest(process.env.BASE_URL)
            .post('/auth')
            .send({login: process.env.LOGIN, password: process.env.PASSWORD})
            .end((err, res) => {
                expect(res.statusCode).to.eq(200)
                expect(res.body.token).not.to.be.undefined
            })
    })

    it('Log in with invalid credentials', function () {
        supertest(process.env.BASE_URL)
            .post('/auth')
            .send({login: 'invalid', password: 'invalid'})
            .end((err, res) => {
                expect(res.statusCode).to.eq(404)
                expect(res.body.message).to.eq('Wrong login or password.')
            })
    })
})
// .end((err, res) => {
// })

// const response = await supertest('https://paysis.herokuapp.com')
//     .post('/auth')
//     .send({login: 'adminius', password: 'supers3cret'})
// expect(response.statusCode).to.eq(200)