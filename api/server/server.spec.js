const request = require('supertest');
const server = require('./server.js');

describe('server', function() {
  describe('GET /', function() {
    it('Should return 200 OK', function() {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('Should return JSON formatted response', function() {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it('Should return an \'api\' property with the value \'Walk Without Rhythm\' inside the body', function() {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body.api).toBe('Walk Without Rhythm');
        });
    });
  });
});