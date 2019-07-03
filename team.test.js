const teamObj = require('./team.js');

test('takes name, level and optional points and returns object', () => {
const result = teamObj('yael', 4);

expect(result).toEqual({ teamName: 'yael', level: 4, points: 0 })
});
