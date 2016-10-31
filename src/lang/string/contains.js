export default function contains(value, substring) {
  return {
    '@type': 'CONTAINS',
    value,
    substring
  }
}
