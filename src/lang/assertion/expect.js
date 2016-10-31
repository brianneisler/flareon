import * as chains from '../chains'
import chain from '../chain'
export default function expect(value) {
  const ast = {
    type: 'EXPECT',
    value
  }
  return chain(ast, {
    ...chains
  })
}
