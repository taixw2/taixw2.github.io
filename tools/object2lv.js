
/**
 * 转换对象成[{label: xxx, value: xxx}]
 * @param {any} object 
 * @param {array} lv 
 * @param {array} kv 
 */
export default (object, lv, kv) => {
  const label = kv[0] || 'label'
  const value = kv[1] || 'value'
  const len = lv.length
  let i = 0;

  const newArray = []

  for (; i< len; i++) {
    const cur = lv[i]
    newArray.push({
      [label]: cur[0],
      [value]: cur[1],
    })
  }

  return newArray

}