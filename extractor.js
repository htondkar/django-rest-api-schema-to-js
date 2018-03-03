const fs = require('fs')
const _ = require('lodash')

function traverseUntilMethodFound(apiSchema, options, initialPath = '') {
  if (!apiSchema) return
  const { targetKeys, renames } = options

  for (const key in apiSchema) {
    if (apiSchema.hasOwnProperty(key) && typeof apiSchema[key] === 'object') {
      if (targetKeys.includes(key)) {
        if (hasOtherObjectsInsideExcept('fields', apiSchema[key])) {
          process.nextTick(() =>
            traverseUntilMethodFound(
              apiSchema[key],
              options,
              `${initialPath}-${key}`
            )
          )
        } else {
          enhanceWithAxios(
            apiSchema[key],
            `${initialPath}-${key}`,
            targetKeys,
            renames
          )
        }
      } else {
        process.nextTick(() =>
          traverseUntilMethodFound(
            apiSchema[key],
            options,
            `${initialPath}-${key}`
          )
        )
      }
    }
  }
}

const reverseString = string =>
  string
    .split('-')
    .reverse()
    .join('-')

const restrictPathDepth = (depth, splitBy) => string => {
  const parts = string.split(splitBy)
  parts.length = depth
  return parts.join(splitBy)
}

const removeChar = charsList => string =>
  string
    .split('')
    .filter(char => !charsList.includes(char))
    .join('')

function enhanceWithAxios(apiMethodObject, path, targetKeys) {
  const { action: method, url: relativeUrl, fields } = apiMethodObject
  const paramRegExp = /\{(\w+)\}/g
  const urlParams = relativeUrl.match(paramRegExp)

  let arguments = ''

  if (urlParams) {
    arguments = urlParams.map(removeChar(['{', '}'])).join(', ')
  }

  const absoluteUrl = '{BASE_URL}' + relativeUrl
  const absoluteUrlWithTemplates = absoluteUrl.replace(
    paramRegExp,
    matchStr => '$' + matchStr
  )

  if (['post', 'patch', 'put'].includes(method)) {
    const fn = `(${
      arguments ? `${arguments}, ` : ''
    }body) => axios.${method}(\`${absoluteUrlWithTemplates}\`, body, getConfig())`

    const [refinedPath, startsWithCommonVerbs] = refineApiPath(
      path,
      targetKeys,
      method
    )

    const name = _.camelCase(
      restrictPathDepth(4, '-')(reverseString(refinedPath))
    )

    fs.appendFileSync('./api.js', `const ${name} = ${fn}\n`)
  } else {
    const [
      refinedPath,
      startsWithCommonVerbs,
      refinedPathWithOutVerb
    ] = refineApiPath(path, targetKeys, method)
    const fn = `(${arguments}) => axios.${method}(\`${absoluteUrlWithTemplates}\`, getConfig())`

    const restrictedPath = restrictPathDepth(3, '-')(refinedPathWithOutVerb)

    const dashedName = startsWithCommonVerbs
      ? 'get-' + restrictedPath
      : 'get-' + restrictedPath

    const name = _.camelCase(dashedName)

    fs.appendFileSync('./api.js', `const ${name} = ${fn}\n`)
  }
}

function refineApiPath(path, targetKeys, method) {
  const actionVerb = path.split('-').pop()
  const startsWithCommonVerbs = targetKeys.includes(actionVerb)
  let result = ''

  switch (actionVerb) {
    case 'create':
      if (!['post', 'patch', 'put'].includes(method)) {
        result = path.replace('-create', '')
      } else {
        result = path
      }
      break

    default:
      result = path
  }

  const refinedPathWithOutVerb = path.split('-')
  refinedPathWithOutVerb.splice(-1, 1)

  return [result, startsWithCommonVerbs, refinedPathWithOutVerb.join('-')]
}

function hasOtherObjectsInsideExcept(fieldToExclude, object) {
  for (const key in object) {
    if (
      object.hasOwnProperty(key) &&
      key !== fieldToExclude &&
      typeof object[key] === 'object'
    ) {
      return true
    }
  }

  return false
}

function extractor(apiSchema) {
  const targetKeys = [
    'list',
    'create',
    'read',
    'update',
    'partial_update',
    'delete'
  ]

  const extractionTarget = {}

  traverseUntilMethodFound(apiSchema, {
    targetKeys,
    renames: {
      create: ''
    }
  })
}

exports.default = extractor
