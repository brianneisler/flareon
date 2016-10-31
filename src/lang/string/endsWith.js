export default function endsWith(value, substring) {
  return {
    '@type': 'ENDS_WITH',
    args: [value, substring]
  }
}
