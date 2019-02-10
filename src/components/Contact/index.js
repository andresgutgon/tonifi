import * as React from 'react'
import { Formik, Field, Form } from 'formik'
import Textarea from 'react-textarea-autosize'
import cn from 'classnames/bind'

import Layout from '../Layout'
import Header from '../Header'
import Content from '../Content'

import styles from './index.module.scss'
const cx = cn.bind(styles)

function requiredValidation(value) {
  if (!value) return 'Requerido'
  return null
}

function emailValidation(value) {
  let error = requiredValidation(value);
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Email no válido'
  }
  return error
}

function Row ({ children }) {
  return (
    <div className={styles.row}>{children}</div>
  )
}
function LabelInput ({
  children,
  label,
  name,
  type,
  validate,
  errors,
  touched
}) {
  let attrs = { type, name }
  if (validate) {
    attrs = { ...attrs, validate }
  }
  const hasErrors = !!errors[name] && touched[name]
  return (
    <Field {...attrs}>
      {({ field }) => {
        const fieldProps = {
          ...field,
          id: name,
          type
        }
        return (
          <label
            htmlFor={name}
            className={cx('labelInput', { hasErrors })}
          >
            {children({ fieldProps })}
            <span className={styles.label}>
              {label}
              {hasErrors &&
               <span className={styles.errors}> - {errors[name]}</span>
              }
            </span>
            <span className={styles.border} />
          </label>
        )
      }}
    </Field>
  )
}

function TextInput ({ label, name, type, validate, errors, touched }) {
  return (
    <LabelInput
      type={type}
      name={name}
      label={label}
      validate={validate}
      errors={errors}
      touched={touched}
    >
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

function TextAreaInput ({ label, name, type, validate, errors, touched }) {
  return (
    <LabelInput
      type={type}
      name={name}
      label={label}
      validate={validate}
      errors={errors}
      touched={touched}
    >
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
    hideFooter
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
                <TextInput
                  type='email'
                  name='email'
                  label='Tu email'
                  errors={errors}
                  touched={touched}
                  validate={emailValidation}
                />
              </Row>
              <Row>
                <TextInput
                  type='text'
                  name='subject'
                  label='Asunto de tu consulta'
                  errors={errors}
                  touched={touched}
                  validate={requiredValidation}
                />
              </Row>
              <Row>
                <TextAreaInput
                  type='textarea'
                  name='comment'
                  label='Tus comentarios'
                  errors={errors}
                  touched={touched}
                  validate={requiredValidation}
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
