export default function add(...args) {
  return {
    '@type': 'MATH:ADD',
    args
  }
}
