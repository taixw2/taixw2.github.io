import { quickSort } from '../quickSort'

const testArray = [1, 5, 69, 1, 5, 6]
const result = [1, 1, 5, 5, 6, 69]

test(`sort [${testArray}] output [${result}]`, () => {
  console.log(quickSort)
  expect(quickSort(testArray)).toEqual(result)
})
