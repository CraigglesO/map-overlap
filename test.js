const { mapOverlap } = require('./lib')

// const quads = [
//   { x: 0, y: 0, width: 100, height: 50, align: 'center' },
//   { x: 100, y: 20, width: 200, height: 25, align: 'center' },
//   { x: 75, y: 100, width: 40, height: 30, align: 'center' },
//   { x: 30, y: 30, width: 75, height: 40, align: 'center' },
//   { x: 200, y: 400, width: 180, height: 100, align: 'center' },
//   { x: 500, y: 60, width: 75, height: 25, align: 'center' },
//   { x: 20, y: 80, width: 100, height: 50, align: 'center' },
//   { x: 220, y: 400, width: 200, height: 25, align: 'center' },
//   { x: 300, y: 300, width: 40, height: 30, align: 'center' },
//   { x: 69, y: 69, width: 75, height: 40, align: 'center' },
//   { x: 87, y: 200, width: 180, height: 100, align: 'center' },
//   { x: 100, y: 95, width: 75, height: 25, align: 'center' },
//   { x: 100, y: 95, width: 75, height: 25, align: 'center' }
// ]

const quads = []

for (let i = 0; i < 100; i++) {
  quads.push({
    x: Math.floor(Math.random() * (512 - 0 + 1) + 0),
    y: Math.floor(Math.random() * (512 - 0 + 1) + 0),
    width: Math.floor(Math.random() * (300 - 20 + 1) + 20),
    height: Math.floor(Math.random() * (60 - 12 + 1) + 12),
    align: 'center'
  })
}

console.time('test')
mapOverlap(quads)
console.timeEnd('test')
//
// console.time('test2')
// mapOverlap(quads)
// console.timeEnd('test2')

console.log('quads', quads.filter(q => !q.overlap).length)
