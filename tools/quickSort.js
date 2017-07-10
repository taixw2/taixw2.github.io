
const quickSort =  (array = []) => {

  const length = array.length

  if (length < 2) return array

  const base = array.splice(~~(length/2), 1)[0]
  const left = []
  const right = []

  for (let i = 0, len = array.length; i < len; i++) {
    const cur = array[i]

    if (cur < base) {
      left.push(cur)
    } else {
      right.push(cur)
    }
    
  }
  return [...quickSort(left), base, ...quickSort(right)]
}


export default quickSort
