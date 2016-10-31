import is from './is'
import chain from '../chain'

export default function path(value) {
  const ast = {
    '@type': 'PATH',
    value
  }
  return chain(ast, {
    is
  })
}
