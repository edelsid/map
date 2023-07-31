import ErrorRepository from '../map';

test('unknown error', () => {
  const testErr = new ErrorRepository();
  expect(() => { testErr.translate(10); }).toThrow('Unknown error');
});

const dataList = [
  [303, 'wrong combination of skills'],
  [40, 'username is too long'],
  [777, 'character file not found'],
];

const handler = test.each(dataList);

handler('testing error descriptions', (code, expected) => {
  const testErr = new ErrorRepository();
  const result = testErr.translate(code);
  expect(result).toBe(expected);
});
