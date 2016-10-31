import { expect } from '../lang/assertion'
import { type } from '../lang/lang'

const String = type({
  name: 'String',
  description: 'A data type representing a sequence of characters',
  validate: (value) => expect(value).to.be.a('string')
})
export default String
