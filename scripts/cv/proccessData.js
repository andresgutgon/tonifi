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

const imageRoot = '../../images/cv'
function findTheaterCategory (work, categories) {
  const category = categories.find(
    c => c.id === work.category_id
  )
  if (!category) {
    return 'no_category'
  }
  return category.label
}



module.exports = function ProccesData () {
  cv.work = cv.work.map(group => {
    group.image = `${imageRoot}/${group.image}`
    group.items = group.items.map(work => {
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
    })
    return group
  })
  return cv
}
