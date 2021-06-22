
let config = {}
const fs = require('fs')

let currentConfig = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

// currentConfig = Object.keys(currentConfig).map(function (key) {return currentConfig[key]})
// for(let [configName, value] of currentConfig) {
//   console.log(configName, value)
// }

let input = process.stdin

function stdInput() {
  return new Promise(resolve => {
    input.on('data', (data) => {
      let text = data.toString()
      resolve(text)
    })
  })
}

async function returnText() {
  let text = await stdInput()
  return text
}


console.log('object');
async function setup() {
  for(let [key, value] of Object.entries(currentConfig)) {
    console.log(key + ' の設定:');

    currentConfig.key = await returnText()
  }
  console.log(currentConfig)
}

setup()
// let test = returnText()
// console.log(returnText())


// stdInput().then(
//   processExit()
// )

// function processExit() {
//   process.exit()

// }
