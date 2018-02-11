const fetch = require('node-fetch')
const extractor = require('./extractor').default
const fs = require('fs')

if (fs.existsSync('./api.js')) fs.unlinkSync('./api.js')

const filterKeys = (object, blackList) => {
  const result = {}

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      if (blackList.includes(key)) continue
      result[key] = object[key]
    }
  }

  return result
}

const apiSchemaUrl = 'http://api.projectant.aasoo.ir/schema/?format=corejson'

async function loadJsonSchema() {
  console.log('fetching the schema...')
  const response = await fetch(apiSchemaUrl)

  const jsonSchema = await response.json()
  console.log('extracting urls from the schema...')
  const filteredSchema = filterKeys(jsonSchema, ['_type', '_meta'])

  extractor(filteredSchema)
  console.log('all done')
}

loadJsonSchema()
