const { generateText } = require('./util');

test('output should be name & age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});
