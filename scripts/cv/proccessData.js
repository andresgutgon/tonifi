const fs = require('fs')
const path = require('path')

const i18nFallbacks = require('./i18nFallbacks')

const entitiesPath = path.join(__dirname, 'data', 'entities.json')
const entities = JSON.parse(fs.readFileSync(entitiesPath, 'utf8'))

const companiesPath = path.join(__dirname, 'data', 'companies.json')
const companies = JSON.parse(fs.readFileSync(companiesPath, 'utf8'))

const cvPath = path.join(__dirname, 'data', 'cv.json')
const cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'))

const IMAGE_ROOT = '../../images/cv'

function proccessEducation(education) {
  if (!education.company_id) return education

  const company = companies.find((c) => c.id === education.company_id)

  if (!company) {
    throw new Error(`No company found with id: ${education.company_id}`)
  }
  education.company = company
  return education
}

function buildEntity(entityItem) {
  const entity = entities.find((item) => item.id === entityItem.entity_id)

  if (!entity) {
    throw new Error('No entity found')
  }

  const tags = entityItem.tags || []
  return Object.assign({ tags }, entity)
}

function proccessWork(work) {
  const played = work.played ?? []
  const producers = work.producers ?? []

  // Companies
  if (work.company_id) {
    const company = companies.find((c) => c.id === work.company_id)
    if (!company) {
      throw new Error(`No company found with id: ${work.company_id}`)
    }
    work.company = company
  }

  // Played places
  work.played = played.map(buildEntity)

  // Producers
  work.producers = producers.map(buildEntity)

  return work
}

/**
 * @param {Number} years
 */
function latestYear(years) {
  const y = years || []
  return y.sort((a, b) => b - a)[0] || 1900
}

module.exports = function ProccesData() {
  cv.work = cv.work.map((group) => {
    group.image = `${IMAGE_ROOT}/${group.image}`

    // Missing description add default
    if (!group.description) {
      group.description = { es: [], ca: [] }
    }

    group.items = group.items
      .sort((work1, work2) => {
        const year1 = latestYear(work1.years)
        const year2 = latestYear(work2.years)
        return year2 - year1
      })
      .map(proccessWork)

    return group
  })
  cv.education = cv.education
    .sort((edu1, edu2) => {
      const year1 = latestYear(edu1.years)
      const year2 = latestYear(edu2.years)
      return year2 - year1
    })
    .map(proccessEducation)
  return i18nFallbacks(cv)
}
