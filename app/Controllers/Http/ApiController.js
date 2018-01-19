'use strict'
let Chance = require('chance')

class ApiController {

    getUser({request}) {
        let chance = new Chance()

        let response = {
            name: chance.name(),
            age: chance.age(),
            birthday: chance.birthday(),
            email: chance.email({domain: 'example.com'}),
            avatar: chance.avatar(),
            profession: chance.profession(),
            address: {
                street: chance.address(),
                postal: chance.postal(),
                city: chance.city(),
                state: chance.state({full: 'true'}),
                country: chance.country({full: 'true'}),
                phone: chance.phone(),
            }
        }

        return response
    }
}

module.exports = ApiController
