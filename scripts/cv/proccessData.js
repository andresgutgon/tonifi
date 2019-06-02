const fs = require('fs')
const path = require('path')


const entitiesPath = path.join(__dirname, 'data', 'entities.json')
const entities = JSON.parse(fs.readFileSync(entitiesPath, 'utf8'))

const companiesPath = path.join(__dirname, 'data', 'companies.json')
const companies = JSON.parse(
  fs.readFileSync(companiesPath, 'utf8')
)

const cvPath = path.join(__dirname, 'data', 'cv.json')
const cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'))

const IMAGE_ROOT = '../../images/cv'

function proccessEducation (education) {
  if (!education.company_id) return education

  const company = companies.find(c => c.id === education.company_id)

  if (!company) {
    throw new Error(
      `No company found with id: ${education.company_id}`
    )
  }
  education.company = company
  return education
}

function proccessWork (work) {
  const played = work.played || []

  // Companies
  if (work.company_id) {
    const company = companies.find(
      c => c.id === work.company_id
    )
    if (!company) {
      throw new Error(
        `No company found with id: ${work.company_id}`
      )
    }
    work.company = company
  }

  // Entities
  work.played = played.map(entityItem => {
    const entity = entities.find(
      item => item.id === entityItem.entity_id
    )

    if (!entity) {
      throw new Error('No entity found')
    }

    const tags = entityItem.tags || []
    return Object.assign(
      { tags }, entity
    )
  })

  return work
}

/**
 * @param {Number} years
 */
function latestYear(years) {
  const y =  years || []
  return y.sort((a, b) => b - a)[0] || 1900
}

module.exports = function ProccesData () {
  cv.work = cv.work.map(group => {
    group.image = `${IMAGE_ROOT}/${group.image}`
    group.items = group
      .items
      .sort((work1, work2) => {
        const year1 = latestYear(work1.years)
        const year2 = latestYear(work2.years)
        return year2 - year1
      })
      .map(proccessWork)

    return group
  })
  cv.education = cv.education.sort((edu1, edu2) => {
      const year1 = latestYear(edu1.years)
      const year2 = latestYear(edu1.years)
      return year2 - year1
    })
    .map(proccessEducation)
  return cv
}
