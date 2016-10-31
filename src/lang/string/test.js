export default function test(value, regex) {
  return {
    '@type': 'TEST',
    args: [value, regex]
  }
}
