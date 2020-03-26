const fs = require('fs')
const { zeroClip, zeroClipDiv } = require('./lib')

const squares = [
  [
    [0, 0],
    [4096, 0],
    [4096, 4096],
    [0, 4096],
    [0, 0]
  ],
  [
    [1024, 1024],
    [1024, 3072],
    [3072, 3072],
    [3072, 1024],
    [1024, 1024]
  ]
]
const input = JSON.parse(fs.readFileSync('./featureCollections/holesTest.json', 'utf8'))
const allCoords = input.features[0].geometry.coordinates

const vertices = []
const indices = []

console.time('test')
// const data = zeroClip(squares)
// vertices.push(...data.vertices)
// indices.push(...data.indices)

allCoords.forEach(coords => {
  const data = zeroClip(coords, vertices.length / 2)
  // const data = zeroClipDiv(coords, 4096 / 8, vertices.length / 2)
  vertices.push(...data.vertices)
  indices.push(...data.indices)
})
console.timeEnd('test')

const featureCollection = {
  type: 'FeatureCollection',
  features: []
}

for (let i = 0, il = indices.length; i < il; i += 3) {
  const feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [vertices[indices[i] * 2] / 4096, vertices[indices[i] * 2 + 1] / 4096],
        [vertices[indices[i + 1] * 2] / 4096, vertices[indices[i + 1] * 2 + 1] / 4096],
        [vertices[indices[i + 2] * 2] / 4096, vertices[indices[i + 2] * 2 + 1] / 4096],
        [vertices[indices[i] * 2] / 4096, vertices[indices[i] * 2 + 1] / 4096]
      ]]
    }
  }

  featureCollection.features.push(feature)
}

fs.writeFileSync('./out.json', JSON.stringify(featureCollection, null, 2))

// console.log('vertices', vertices)
// console.log('indices', indices)
