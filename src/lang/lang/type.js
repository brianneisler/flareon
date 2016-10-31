import extend from './extend'
import chain from '../chain'

export default function type(schema) {
  const ast = {
    '@type': 'TYPE',
    schema
  }
  return chain(ast, {
    extend
  })
}
