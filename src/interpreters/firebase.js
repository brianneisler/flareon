import _ from 'mudash'
import invariant from 'invariant'

// should return rules in JSON form
export default function firebase(schema) {
  const { paths } = schema
  const rules = interpretPaths(paths)
  return {
    rules
  }
}

function interpretPaths(paths) {
  return _.reduce(paths, (rules, path) => {
    return _.merge(rules, interpretPath(path))
  }, {})
}

function interpretPath(path) {
  const type = _.get()
}

function expect(value, types) {
  invariant(_.get())
}

function isAST(value) {
  return _.has(value, '@type')
}
