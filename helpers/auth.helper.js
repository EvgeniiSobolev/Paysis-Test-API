import supertest from 'supertest';

export default class AuthHelper {
    response

    async logIn(login, password) {
        this.response = await supertest(process.env.BASE_URL)
            .post('/auth')
            .send({login, password})
        return this.response
    }
}
