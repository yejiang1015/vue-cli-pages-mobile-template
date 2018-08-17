export default (val, i) => {
  let t = 0
  if (String(val).length > i) {
    t = `${val.substring(0, i)}...`
  } else {
    t = val
  }
  return t
}
