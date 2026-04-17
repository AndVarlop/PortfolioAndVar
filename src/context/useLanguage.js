import { useContext } from 'react'
import { LanguageContext } from './languageContextCore'

export const useLanguage = () => useContext(LanguageContext)
