import chain from '../chain'

export default function replace(value, substring, replacement) {
  const ast = {
    '@type': 'REPLACE',
    args: [substring, replacement]
  }
  return chain(ast, {
    replace
  })
}
