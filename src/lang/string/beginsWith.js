export default function beginsWith(value, substring) {
  return {
    '@type': 'BEGINS_WITH',
    value,
    substring
  }
}
