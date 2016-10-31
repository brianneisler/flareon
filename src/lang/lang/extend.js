import chain from '../chain'

export default function extend(value, schema) {
  const ast = {
    '@type': 'EXTEND',
    schema,
    value
  }
  return chain(ast, {
    extend
  })
}
