import { expect } from '../lang/assertion'
import { type } from '../lang/lang'

const Number = type({
  name: 'Number',
  description: 'A numerical value',
  validate: (value) => expect(value).to.be.a('number')
})
export default Number
