export default function div(...args) {
  return {
    '@type': 'MATH:DIV',
    args
  }
}
