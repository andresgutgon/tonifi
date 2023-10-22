const config = require('../../data/siteConfig')

const locales = config.languages.langs
const defaultLocale = config.languages.defaultLangKey
const PLAIN_TYPES = ['string', 'number']

function isObject(content) {
  return typeof content === 'object'
}

function isPlainType(content) {
  const type = typeof content
  return PLAIN_TYPES.includes(type)
}

function isNestedType(content) {
  return Array.isArray(content) || isObject(content)
}

function canBeTranslated(keys) {
  return !keys.find((key) => !locales.includes(key))
}

function translateKeys(data, keys) {
  const identity = { data, keys }
  if (!canBeTranslated(keys)) return identity

  const allKeys = keys.length === locales.length
  if (allKeys) return identity

  if (!keys.includes(defaultLocale)) {
    const dataString = JSON.stringify(data)
    raise`It must contain default locale translated: ${dataString}`
  }

  const defaultTranslation = data[defaultLocale]
  const emptyLocales = locales.reduce((memo, loc) => {
    memo[loc] = defaultTranslation
    return memo
  }, {})

  const newData = { ...emptyLocales, ...data }
  const newKeys = Object.keys(newData)
  return { keys: newKeys, data: newData }
}

function recursiveFallback(input) {
  if (isPlainType(input)) return input

  if (Array.isArray(input)) {
    return input.map((item) => {
      if (isNestedType(item)) {
        return recursiveFallback(item)
      }

      return item
    })
  }

  const { keys, data } = translateKeys(input, Object.keys(input))
  return keys.reduce((memo, key) => {
    const content = data[key]
    let result = content
    if (isNestedType(content)) {
      result = recursiveFallback(content)
    }
    memo[key] = result
    return memo
  }, {})
}

module.exports = function i18nFallbacks(data) {
  return recursiveFallback(data)
}
