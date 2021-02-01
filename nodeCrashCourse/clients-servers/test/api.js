process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should;

const mongoose = require('mongoose');
const Blog = require('../models/blog');

chai.use(chaiHttp);


describe('/GET blogs', () => {
    it('should GET all the blogs', (done) => {
        chai.request(server)
        .get('/blogs')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
        })
    });
})
