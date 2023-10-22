import * as React from 'react'
import cn from 'classnames/bind'

import { FormattedMessage } from 'react-intl'
import TranslatedMessage from '../TranslatedMessage'
import useFormatMessage from '../../hooks/useFormatMessage'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'
const cx = cn.bind(styles)

const METADATA = {
  teacher: 'Professor/a',
  director: 'Director',
  author: 'Autor',
  company: 'Companyia',
  production: 'Productora',
}

const DIRECTION_METADATA = { ...METADATA, years: 'Anys' }

function itemsGrouped(items) {
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

function MetaLink({ metaKey, url, name }) {
  return (
    <div className={styles.metadata}>
      <strong>{METADATA[metaKey]}</strong>
      {!!url && (
        <a href={url} target="_bkank">
          <TranslatedMessage text={name} />
        </a>
      )}
      {!url && <TranslatedMessage text={name} />}
    </div>
  )
}

function hasMetadata(item) {
  return !!Object.keys(METADATA).map((_meta) => !item.meta)
}

function Title({ title }) {
  return (
    <h4 className={styles.title}>
      <TranslatedMessage text={title} />
    </h4>
  )
}

function MetadataItem({ metaKey, item }) {
  const content = item[metaKey]
  let name

  if (!content) return null

  if (metaKey !== 'company') {
    name = content
  } else if (metaKey === 'company') {
    return <MetaLink metaKey={metaKey} url={content.url} name={content.name} />
  } else {
    name = content.name
  }

  const type = typeof name
  const isArray = Array.isArray(name)
  if (type !== 'string' && type !== 'number' && !isArray) return null
  const meta = useFormatMessage(`curriculum.${metaKey}`)
  name = isArray ? name.join(', ') : name
  return (
    <div className={styles.metadata}>
      {metaKey !== 'years' && <strong>{meta}</strong>}
      <TranslatedMessage text={name} />
    </div>
  )
}

const CurriculumVitae = ({ title, education, work, pdf }) => {
  const pdfText = useFormatMessage(pdf.i18n)
  return (
    <>
      <Header title={title}>
        <div className={styles.infoLine}>
          <ul>
            <li>
              <a href={pdf.filepath} target="_blank" rel="noopener noreferrer">
                {pdfText}
              </a>
            </li>
          </ul>
        </div>
      </Header>
      <Content>
        {work.map((group, index) => (
          <div key={index}>
            <div
              className={styles.category}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${group.image.childImageSharp.gatsbyImageData.images.fallback.src})`,
              }}
            >
              <h3 className={styles.categoryTitle}>
                <TranslatedMessage text={group.category} />
              </h3>
            </div>
            <div className={styles.items}>
              {itemsGrouped(group.items).map((itemGroup, ig) => (
                <div
                  className={cx('row', { incompleted: itemGroup.length < 2 })}
                  key={ig}
                >
                  {itemGroup.map((item, index) => (
                    <div key={index} className={styles.col}>
                      <div className={styles.item}>
                        <Title title={item.title} />
                        {hasMetadata(item) && (
                          <div className={styles.metadataList}>
                            {Object.keys(METADATA).map((metaKey) => (
                              <MetadataItem
                                key={metaKey}
                                metaKey={metaKey}
                                item={item}
                              />
                            ))}
                          </div>
                        )}
                        {item.played.length > 0 && (
                          <div className={styles.places}>
                            <strong>Productora:</strong>
                            <div className={styles.placeList}>
                              {item.played.map((place, index) => (
                                <div key={index} className={styles.place}>
                                  <TranslatedMessage text={place.name} />
                                  {place.location && (
                                    <span>&nbsp;({place.location})</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
        {education && (
          <>
            <h2 className={styles.sectionTitle}>
              <FormattedMessage id="curriculum.education" />
            </h2>
            <ul className={styles.education}>
              {education.map((item, index) => (
                <li key={index}>
                  <div className={styles.educationItem}>
                    <Title title={item.title} />
                    {hasMetadata(item) && (
                      <div className={styles.metadataList}>
                        {Object.keys(METADATA).map((metaKey) => (
                          <MetadataItem
                            key={metaKey}
                            metaKey={metaKey}
                            item={item}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </Content>
    </>
  )
}

export default CurriculumVitae
