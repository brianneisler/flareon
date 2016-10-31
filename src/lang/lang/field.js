import chain from '../chain'

export default function field(schema) {
  const ast = {
    '@type': 'FIELD',
    schema
  }
  return chain(ast, {

  })
}
