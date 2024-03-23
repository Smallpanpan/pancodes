import $http from './request'

const Q = []
const L = 2
let i = 0
const instance = {}

function getConfig(args, method) {
  return ['delete', 'head', 'get'].indexOf(method) >= 0 ? args[1] : args[2]
}

['put', 'delete', 'patch', 'get', 'head', 'post'].forEach(method => {
  instance[method] = (...args) => {
    return new Promise((resolve, reject) => {
      const opt = {
        args,
        method,
        reject,
        resolve
      }
      Q.push(opt)

      const config = getConfig(args, method)

      if (config && config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(cancel => {
          const index = Q.indexOf(opt)
          // 如果不存在，则表示已经发送，留给后续处理，这里不需要处理
          if (index >= 0) {
            reject(cancel)
            Q.splice(index, 1)
          }
        })
      }

      dequeue()
    })
  }
})

function dequeue() {
  if (i >= L || !Q.length) {
    return
  }

  i++

  const opt = Q.shift()
  $http[opt.method](...opt.args)
    .then(opt.resolve)
    .catch(opt.reject)
    .then(() => {
      i--
      dequeue()
    })
}



export default instance
