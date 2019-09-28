const UPNG = require('upng-js')
const { PNG } = require('pngjs')
const PNGJS = require('png-js')

const fs = require('fs')

const files = ['interlaced-grayscale-8bit.png', 'interlaced-pallete-8bit.png', 'interlaced-rgb-8bit.png', 'interlaced-rgb-16bit.png', 'interlaced-rgb-alpha-8bit.png']

files.forEach(file => {
  const fileData = fs.readFileSync(`images/${file}`)
  const UPNGData = UPNG.decode(fileData)
  const PNGData = PNG.sync.read(fileData)
  const pngInstance = new PNGJS(fileData)
  pngInstance.decodePixels(pixels => {
    fs.writeFileSync(`${file}-png-js.txt`, Array.from(pixels).toString())
  })
  pngInstance.decode(pixels => {
    fs.writeFileSync(`${file}-png-js-decode.txt`, Array.from(pixels).toString())
  })
  fs.writeFileSync(`${file}-upng.txt`, UPNGData.data.toString())
  fs.writeFileSync(`${file}-pngjs.txt`, Array.from(PNGData.data).toString())
})


