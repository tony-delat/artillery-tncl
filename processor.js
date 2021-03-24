'use strict';

module.exports = {
    getWords
  };

const faker = require('faker');

function getWords(userContext, events, done) {
    
    const title = faker.random.words(2);

    userContext.vars.title = title;

    return done();

}