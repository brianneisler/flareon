export default function is(value, type) {
  const ast = {
    '@type': 'FIREBASE:IS',
    value,
    type
  }
  return ast
}
