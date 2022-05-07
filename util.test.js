const { generateText, validateAndGenerate } = require('./util');

test('output should be name & age', () => {
  const text = generateText('Paul', 26);
  expect(text).toBe('Paul (26 years old)');
});

test('should generate a valid text output', () => {
  const text = generateText('Paul', 26);
  expect(text).toBe('Paul (26 years old)');
});
