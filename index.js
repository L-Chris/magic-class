function Magic(target) {
  const __get = target.__get
  const __set = target.__get
  const __call = target.__call

  const proxy = new Proxy(target, {
    get(target, key) {
      if (key in target) return target[key]

      __get && __get.call(target, key)
      if (__call) return function() {
        return __call.apply(target, [key, ...arguments])
      }
    },
    set(target, key, value) {
      if (key in target) {
        target[key] = value
        return
      }

      __set && __set.call(target, key, value)
    }
  })

  return proxy
}

exports.Magic = Magic
