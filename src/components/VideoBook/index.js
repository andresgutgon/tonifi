import * as React from 'react'
import { Formik, Field, Form } from 'formik'
import Textarea from 'react-textarea-autosize'
import cn from 'classnames/bind'

import { FormattedMessage } from 'react-intl'
import useFormatMessage from '../../hooks/useFormatMessage'
import Header from '../Header'
import Content from '../Content'
import styles from './index.module.scss'
const cx = cn.bind(styles)

const VideBook = ({ title, description }) => (
  <>
    <Header
      title={title}
      description={description}
    />
    <Content>
      <div className={styles.videobook}>
        <div className={styles.videoWrapper}>
          <iframe
            src='https://player.vimeo.com/video/502110043?title=0&byline=0&portrait=0'
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <script src='https://player.vimeo.com/api/player.js'></script>
    </Content>
  </>
)

export default VideBook
