import * as React from 'react'
import { Formik, Field, Form } from 'formik'
import Textarea from 'react-textarea-autosize'
import cn from 'classnames/bind'

import { FormattedMessage } from 'react-intl'
import useFormatMessage from '../../hooks/useFormatMessage'
import Header from '../Header'
import Content from '../Content'
import styles from './index.module.scss'
import TickIcon from './TickIcon'
const cx = cn.bind(styles)

const BASE_API = 'https://script.google.com/macros/s'
const VERSION =
  'AKfycbz06mg_HTQLXmp95os8yaVST5KdoiskTJq8fTR5KT98Nb76Ik7pl--b2upe57aSnWQw'
const URL = `${BASE_API}/${VERSION}/exec`
const INITIAL_STATE = {
  email: '',
  name: '',
  subject: '',
  message: '',
  answer: '',
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

function emailValidation(errorMesssage) {
  return (value) => {
    let error = requiredValidation(value)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = errorMesssage
    }
    return error
  }
}

function Row({ children }) {
  return <div className={styles.row}>{children}</div>
}
function LabelInput({
  children,
  label,
  name,
  type,
  validate,
  errors,
  touched,
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
          type,
        }
        return (
          <label htmlFor={name} className={cx('labelInput', { hasErrors })}>
            {children({ fieldProps })}
            <span className={styles.label}>
              {label}
              {hasErrors && (
                <span className={styles.errors}> - {errors[name]}</span>
              )}
            </span>
            <span className={styles.border} />
          </label>
        )
      }}
    </Field>
  )
}

function TextInput({ label, name, type, validate, errors, touched }) {
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
        <input {...fieldProps} className={styles.input} placeholder="&nbsp;" />
      )}
    </LabelInput>
  )
}

function TextAreaInput({ label, name, type, validate, errors, touched }) {
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
          placeholder="&nbsp;"
        />
      )}
    </LabelInput>
  )
}

function FormComponent({ sent, errors, touched, isSubmitting }) {
  const effect = sent === null ? null : sent ? 'bounceOutDown' : 'bounceInUp'
  const invalidEmailErrorMessage = useFormatMessage(
    'contact.fields.email.invalidFormat'
  )
  return (
    <Form className={cx('form', 'animated', effect)}>
      <Row>
        <TextInput
          type="email"
          name="email"
          label={useFormatMessage('contact.fields.email.label')}
          errors={errors}
          touched={touched}
          validate={emailValidation(invalidEmailErrorMessage)}
        />
      </Row>
      <Row>
        <TextInput
          type="text"
          name="name"
          label="Tu nombre"
          label={useFormatMessage('contact.fields.name.label')}
          errors={errors}
          touched={touched}
          validate={requiredValidation}
        />
      </Row>
      <Row>
        <TextInput
          type="text"
          name="subject"
          label={useFormatMessage('contact.fields.subject.label')}
          errors={errors}
          touched={touched}
          validate={requiredValidation}
        />
      </Row>
      <Row>
        <TextAreaInput
          type="textarea"
          name="message"
          label={useFormatMessage('contact.fields.comments.label')}
          errors={errors}
          touched={touched}
          validate={requiredValidation}
        />
      </Row>
      <Row>
        <div className={styles.answer}>
          <TextInput
            type="text"
            name="answer"
            label="Put here your answer"
            errors={errors}
            touched={touched}
            validate={emptyAnswerValidation}
          />
        </div>
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          <span>
            {isSubmitting && <FormattedMessage id="contact.fields.sending" />}
            {!isSubmitting && <FormattedMessage id="contact.fields.send" />}
          </span>
        </button>
      </Row>
    </Form>
  )
}

function onSubmit(data, actions) {
  const xhr = new XMLHttpRequest()
  xhr.open('POST', URL)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onreadystatechange = function () {
    actions.setSubmitting(false)
    actions.setStatus({ sent: true })
    setTimeout(() => {
      actions.resetForm()
      actions.setStatus({ sent: false })
    }, 4000) // 4 seconds
    return
  }
  const encoded = Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
  return xhr.send(encoded)
}

const Contact = ({ title, description }) => (
  <>
    <Header title={title} description={description} />
    <Content>
      <div className={styles.contact}>
        <Formik
          initialStatus={{ sent: null }}
          initialValues={INITIAL_STATE}
          onSubmit={onSubmit}
        >
          {({ errors, values, status, touched, isSubmitting }) => {
            const { sent } = status
            const { name, email } = values
            const messageSuccess = sent ? 'bounceInDown' : 'bounceOutUp'

            return (
              <>
                <div
                  className={cx('success', 'animated', messageSuccess, {
                    sent,
                  })}
                >
                  <h3>
                    <div className={styles.successIcon}>
                      <TickIcon />
                    </div>
                    <FormattedMessage id="contact.messageSent" />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="contact.thanks"
                      values={{
                        name: <strong>{name}</strong>,
                        email: <strong>{email}</strong>,
                      }}
                    />
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
        </Formik>
      </div>
    </Content>
  </>
)

export default Contact
