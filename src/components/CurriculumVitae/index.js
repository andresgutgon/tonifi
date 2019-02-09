import React from 'react'
import cn from 'classnames/bind'

import Layout from '../Layout'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'
const cx = cn.bind(styles)

const METADATA = {
  director: 'Director',
  production: 'Producción',
  author: 'Autor',
  company: 'Compañía'
}

function itemsGrouped (items) {
  return items.reduce((memo, item) => {
    const lastRowIndex = memo.length - 1
    const lastRow = memo[lastRowIndex]
    if (lastRow && lastRow.length < 2) {
      memo[lastRowIndex].push(item)
    } else {
      memo.push([item])
    }
    return memo
  }, [])
}

function MetaLink ({ metaKey, url, name }) {
  return (
    <div className={styles.metadata}>
      <strong>{METADATA[metaKey]}</strong>
      <a href={url} target='_bkank'>{name}</a>
    </div>
  )
}

function hasMetadata(item) {
  return !!Object.keys(METADATA).map(meta => !item.meta)
}

function MetadataItem ({metaKey, item}) {
  const content = item[metaKey]
  let name


  if (!content) return null

  if (metaKey !== 'company') {
    name = content
  } else if (metaKey === 'company' && content.url) {
    return (
      <MetaLink
        metaKey={metaKey}
        url={content.url}
        name={content.name}
      />
    )
  } else {
    name = content.name
  }

  if (typeof name !== 'string') return null

  return (
    <div className={styles.metadata}>
      <strong>{METADATA[metaKey]}</strong>
      {name}
    </div>
  )
}

const CurriculumVitae = ({ content }) => {
  const { education, work, contact, languages } = content

  return (
    <Layout>
      <Header title='Curriculum'>
        <div className={styles.infoLine}>
          <ul>
            <li>
              <strong>Teléfono: </strong>
              {contact.phone}
            </li>
            <li className={styles.separator}>/</li>
            <li>
              <strong>Email: </strong>
              {contact.email}
            </li>
          </ul>
        </div>
        <div className={styles.infoLine}>
          <ul>
            <li>
              <strong>Idiomas: </strong>
              {languages.join(' / ')}
            </li>
          </ul>
        </div>
      </Header>
      <Content>
        <h2 className={styles.sectionTitle}>Trayectoria</h2>
        {work.map((group) =>
          <div key={group.category}>
            <div
              className={styles.category}
              style={{ backgroundImage: `url(${group.image.childImageSharp.fluid.src})` }}
            >
              <h3 className={styles.categoryTitle}>
                {group.category}
              </h3>
            </div>
            <div className={styles.items}>
              {itemsGrouped(group.items).map((itemGroup, ig) =>
                <div
                  className={cx('row', { incompleted: itemGroup.length < 2})}
                  key={ig}
                >
                  {itemGroup.map((item, index) =>
                    <div key={index} className={styles.col}>
                      <div className={styles.item}>
                        <h4 className={styles.itemTitle}>
                          {item.title}
                        </h4>
                        {hasMetadata(item) &&
                          <div className={styles.metadataList}>
                            {Object.keys(METADATA).map(metaKey =>
                              <MetadataItem
                                key={metaKey}
                                metaKey={metaKey}
                                item={item}
                              />
                            )}
                          </div>
                        }
                        {item.played.length > 0 &&
                          <div className={styles.places}>
                            <strong>Representado en:</strong>
                            <div className={styles.placeList}>
                              {item.played.map((place, index)=>
                                <div key={index} className={styles.place}>
                                  {place.name}
                                  {place.location && <span>&nbsp;({place.location})</span>}
                                  {place.tags.length > 0 && place.tags.map(
                                    (tag, i) => <span key={i} className={styles.tag}>{tag}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        <h2 className={styles.sectionTitle}>Estudios</h2>
        <ul className={styles.education}>
          {education.map((eduItem, index) =>
            <li key={index}>{eduItem}</li>
          )}
        </ul>
      </Content>
    </Layout>
  )
}

export default CurriculumVitae
