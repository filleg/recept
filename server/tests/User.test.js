import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { response } from 'express'
import { describe, it as test } from 'mocha'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistentRoute = () => {
    describe('testingNonExistingRoute', () => {
        test('HTTP Call against non-existing route in API', done => {
            Chai.request(application)
                .get('/sdflkjvsnljk')
                .end((request, response) => {
                     response.should.have.a.status(404)
                     done()
                })
        })
    })
}

const getAllUsers = () => {
    test('Test return of all users in database', done => {
        Chai.request(application)
        .get('/user')
        .end((request, response) => {
            response.should.have.a.status(200)
            response.body.should.be.a('array')
            done()
        })
    })
}

const updateUser = () => {
    const userID = '603e45cdf060a33e70056b1e'
    test('Should change userdata in the database', done => {
        Chai.request(application)
        .put(`/user/${userID}`)
        .send({ username: 'lolll', password: 'skrattttt' })
        .end((request, response) => {
            response.should.have.a.status(200)
            response.should.be.a('object')
            done()
        })
    })
}

describe('TESTING THE USER API', () => {
    testingNonExistentRoute()
    getAllUsers()
    updateUser()
})