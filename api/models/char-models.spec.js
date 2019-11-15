const db = require('../../data/config/dbConfig.js');
const { insert } = require('./char-models.js');

describe('Characters model', function() {
  describe('insert()', function() {
    beforeEach(async () => {
      await db('characters').truncate();
    });

    it('Should insert a character', async function() {
      await insert({
        name: 'Vladimir Harkonnen',
        affiliation: 'House Harkonnen'
      });

      const chars = await db('characters');
      expect(chars).toHaveLength(1);
    });

    it('Should insert the provided character', async function() {
      await insert({
        name: 'Muad\'Dib',
        affiliation: 'The Fremen'
      });
      await insert({
        name: 'Feyd-Rautha',
        affiliation: 'House Harkonnen'
      });

      const chars = await db('characters');

      expect(chars).toHaveLength(2);
      expect(chars[0].name).toBe('Muad\'Dib');
      expect(chars[1].name).toBe('Feyd-Rautha');
    });

    it('Should return the inserted', async function() {
      let char = await insert({
        name: 'Shaddam Corino IV',
        affiliation: 'House Corino'
      });
      
      expect(char.name).toBe('Shaddam Corino IV');
      expect(char.affiliation).toBe('House Corino');
      expect(char.id).toBeDefined();

      char = await insert({
        name: 'Reverend Mother Mohiam',
        affiliation: 'Bene Gesserit'
      });

      expect(char.name).toBe('Reverend Mother Mohiam');
      expect(char.affiliation).toBe('Bene Gesserit');
      expect(char.id).toBeDefined();
    })
  });
});