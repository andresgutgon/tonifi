import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function TranslatedMessage({ text }) {
  const app = useContext(AppContext)
  const translated = text[app.locale]

  if (typeof text === 'string') return text

  if (!translated) {
    console.log('wat', text)
  }

  return translated || null
}
