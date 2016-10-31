export default function matches(value, regex) {
  return {
    '@type': 'MATCHES',
    args: [value, regex]
  }
}
