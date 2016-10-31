export default function concat(...args) {
  return {
    '@type': 'CONCAT',
    args
  }
}
