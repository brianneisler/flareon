import _ from 'mudash'
import * as interpreters from './interpreters'

export default function interpret(schema, options) {
  options = {
    interpreters,
    ...options
  }
  if (!_.has(options, 'target')) {
    throw new Error('interpret must have target option')
  }
  const { target } = options
  const interpreter = _.get(options.interpreters, target)
  if (!interpreter) {
    throw new Error(`No interpreter found for ${target}`)
  }
  return interpreter(schema)
}
