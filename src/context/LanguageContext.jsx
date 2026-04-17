import React, { useState } from 'react'
import { translations } from '../translations'
import { LanguageContext } from './languageContextCore'

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'en' ? 'es' : 'en')

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
