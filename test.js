const { mapOverlap } = require('./lib')

const quads = [
  { x: 0, y: 0, width: 100, height: 50 }
]

console.time('test')
mapOverlap(quads)
console.timeEnd('test')

console.log('quads', quads)
