export default (microcopies, key) => {
  const copy = microcopies.find(mc => mc.key === key)
  return copy && copy.value || key
}
