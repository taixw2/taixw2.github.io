import quickSort from '../quickSort'

test(`sort array<number>`, () => {
  expect(quickSort([5, 2, 1])).toEqual([1, 2, 5])
})
