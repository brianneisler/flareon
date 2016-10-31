import { expect } from '../lang/assertion'
import { type } from '../lang/lang'

const Enum = (elements) => type({
  name: 'Enum',
  description: 'A data type consisting of a set of named values called elements',
  elements,
  validate: (value, schema) => expect(value).to.be.oneOf(schema.elements)
})
export default Enum
