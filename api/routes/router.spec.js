const request = require('supertest');
const router = require('./router.js');

describe('Router:', function() {
  describe('DELETE /characters/1', function() {
    it('should remove a chosen character and return a status(200) code.', async function() {
      const char = await request(router)
        .post('/characters')
        .send({
          name: 'Chani Liet-Kynes',
          affiliation: 'Sietch Tabr'
        });

      const removedChar = await request(router).delete(`/characters/${id}`);

      expect(removedChar.body).toEqual({ remove: deleteChar });
      expect(removedChar.statusCode).toBe(200);

      const response = await request(router).get('/characters');
      expect(response.body).toHaveLength(3);
    });
  });
})