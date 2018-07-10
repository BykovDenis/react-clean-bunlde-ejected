import functionForTest1 from '../helpers/function-for-test1';

test('adds 4 + 3 to equal 7', () => {
  expect(functionForTest1(4, 3)).toBe(7);
});