import * as React from 'react'
import { Formik, Field, Form } from 'formik'
import Textarea from 'react-textarea-autosize'
import cn from 'classnames/bind'

import Layout from '../Layout'
import Header from '../Header'
import Content from '../Content'
import styles from './index.module.scss'
import TickIcon from './TickIcon'
const cx = cn.bind(styles)

const BASE_API = 'https://script.google.com/macros/s'
const VERSION = 'AKfycbzKC8m1Gu1zP0ihCK9EVEUu1xcg0ZXzlqvpmXP-AQ-tIxfYWl76'
const URL = `${BASE_API}/${VERSION}/exec`
const INITIAL_STATE = {
  email: '',
  name: '',
  subject: '',
  message: '',
  answer: ''
}

/**
 * This is a honeypot spam. If not empty do not submit
 */
function emptyAnswerValidation(value) {
  const valueDom = document.getElementById('answer').value
  if (value !== '' || valueDom !== '') return 'Bad boy'

  return null
}

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

function FormComponent ({ sent, errors, touched, isSubmitting }) {
  const effect = sent ? 'bounceOutDown' : 'bounceInUp'
  return (
    <Form className={cx('form', 'animated', effect)}>
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
          name='name'
          label='Tu nombre'
          errors={errors}
          touched={touched}
          validate={requiredValidation}
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
          name='message'
          label='Tus comentarios'
          errors={errors}
          touched={touched}
          validate={requiredValidation}
        />
      </Row>
      <Row>
        <div className={styles.answer}>
          <TextInput
            type='text'
            name='answer'
            label='Put here your answer'
            errors={errors}
            touched={touched}
            validate={emptyAnswerValidation}
          />
        </div>
        <button
          className={styles.button}
          type='submit'
          disabled={isSubmitting}
        >
          <span>
            {isSubmitting && 'Enviando mensaje...'}
            {!isSubmitting && 'Enviar mensaje'}
          </span>
        </button>
      </Row>
    </Form>
  )
}

function onSubmit (data, actions) {
  const xhr = new XMLHttpRequest()
  xhr.open('POST', URL)
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  xhr.onreadystatechange = function() {
    actions.setSubmitting(false)
    actions.setStatus({ sent: true })
    setTimeout(() => {
      actions.resetForm()
      actions.setStatus({ sent: false })
    }, 4000) // 4 seconds
    return
  }
  const encoded = Object
    .keys(data)
    .map((k) => (encodeURIComponent(k) + "=" + encodeURIComponent(data[k])))
    .join('&')
  return xhr.send(encoded)
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
          initialStatus={{ sent: false }}
          initialValues={INITIAL_STATE}
          onSubmit={onSubmit}
          render={({ errors, values, status, touched, isSubmitting }) => {
            const { sent } = status
            const { name, email } = values
            const messageSuccess = sent ? 'bounceInDown' : 'bounceOutUp'

            return (
              <>
                <div className={cx('success', 'animated', messageSuccess, { sent })}>
                  <h3>
                    <div className={styles.successIcon}>
                      <TickIcon />
                    </div>
                    Mensaje enviado
                  </h3>
                  <p>
                    Gracias <strong>{name}</strong>,
                    en cuanto lo reciba te contesto a tu email:
                    <strong>{` ${email}`}</strong>
                  </p>
                </div>
                <FormComponent
                  sent={sent}
                  errors={errors}
                  touched={touched}
                  isSubmitting={isSubmitting}
                />
              </>
            )
          }}
        />
      </div>
    </Content>
  </Layout>
)

export default Contact
