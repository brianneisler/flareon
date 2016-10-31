import { expect } from '../lang/assertion'
import { extend } from '../lang/lang'
import { mod } from '../lang/math'
import Number from './Number'

const Epoch = extend(Number, {
  name: 'Epoch',
  description: 'Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC, with leap seconds ignored',
  validate: (value, schema, _super) => expect(mod(value, 1)).to.equal(0).and(_super(value))
})
export default Epoch
