const { Magic } = require('./index')

class Target {
  __get(key) {
    console.log('__get', key)
  }
  __set(key, value) {
    console.log('__set', key, value)
  }
  __call(method, params) {
    console.log('__call', method, params)
  }
}

const target = new Target()
const proxy = Magic(target)

proxy.test({ count: 1 })
proxy.a = 1
