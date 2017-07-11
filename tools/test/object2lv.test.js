import object2lv from '../object2lv'


test('object2lv', () => {
  expect(object2lv({a: 1, b: 2},
    [['开始', 'a'], ['结束', 'b']]))
    .toEqual([{
      'label': '开始',
      'value': 1,
    }, {
      'label': '结束',
      'value': 2,
    }])
})
