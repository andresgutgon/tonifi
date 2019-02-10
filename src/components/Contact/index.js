import * as React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Textarea from 'react-textarea-autosize'
import cn from 'classnames/bind'

import Layout from '../Layout'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'
const cx = cn.bind(styles)

function Row ({ children }) {
  return (
    <div className={styles.row}>{children}</div>
  )
}
function LabelInput ({ children, label, name, type }) {
  return (
    <Field type={type} name={name}>
      {({ field }) => {
        const fieldProps = {
          ...field,
          id: name,
          type
        }
        return (
          <label htmlFor={name} className={cx('labelInput', type)}>
            {children({ fieldProps })}
            <span className={styles.label}>
              {label}
            </span>
            <span className={styles.border} />
          </label>
        )
      }}
    </Field>
  )
}

function TextInput ({ label, name, type }) {
  return (
    <LabelInput type={type} name={name} label={label}>
      {({ fieldProps }) => (
        <input
          {...fieldProps}
          className={styles.input}
          placeholder='&nbsp;'
        />
      )}
    </LabelInput>
  )
}

function TextAreaInput ({ label, name, type }) {
  return (
    <LabelInput type={type} name={name} label={label}>
      {({ fieldProps }) => (
        <Textarea
          {...fieldProps}
          className={styles.input}
          placeholder='&nbsp;'
        />
      )}
    </LabelInput>
  )
}
function onSubmit (values, actions) {
  return Promise.resolve()
}
const Contact = () => (
  <Layout
    pathname='contacto'
    pageTitle='Contacto'
  >
    <Header
      title='Contacto'
      description='Recibiré un email y te contestaré lo antes posible.'
    />
    <Content>
      <div className={styles.contact}>
        <Formik
          initialValues={{
            email: '',
            subject: '',
            comment: ''
          }}
          onSubmit={onSubmit}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form className={styles.form}>
              <Row>
                <TextInput type='email' name='email' label='Tu email' />
              </Row>
              <Row>
                <TextInput type='email' name='text' label='Asunto de tu consulta' />
              </Row>
              <Row>
                <TextAreaInput
                  type='textarea'
                  name='comment'
                  label='Tus comentarios'
                />
              </Row>
              <Row>
                <button
                  className={styles.button}
                  type='submit'
                  disabled={isSubmitting}
                >
                  <span>Enviar mensaje</span>
                </button>
              </Row>
            </Form>
          )}
        />
      </div>
    </Content>
  </Layout>
)

export default Contact
