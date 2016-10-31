import chain from '../chain'
import replace from './replace'

export default function str(value) {
  const ast = {
    '@type': 'STR',
    args: [value]
  }
  return chain(ast, {
    replace
  })
}
