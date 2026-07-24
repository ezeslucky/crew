import type { DocLanguage } from '@/types/doc-paths'
import data from './languages'

export type I18nText = Record<(typeof LanguagesSupported)[number], string>

export const languages = data.languages

// for compatibility
export type Locale = 'ja_JP' | 'zh_Hans' | 'en_US' | (typeof languages)[number]['value']

export const LanguagesSupported: Locale[] = languages
  .filter((item) => item.supported)
  .map((item) => item.value)

export const getLanguage = (locale: Locale): Locale => {
  if (['zh-Hans', 'ja-JP'].includes(locale)) return locale.replace('-', '_') as Locale

  return LanguagesSupported[0]!.replace('-', '_') as Locale
}

const DOC_LANGUAGE: Record<string, DocLanguage | undefined> = {
  'zh-Hans': 'zh',
  'ja-JP': 'ja',
  'en-US': 'en',
}

export type AccessControlTemplateLanguage = 'zh' | 'ja' | 'en'

const ACCESS_CONTROL_TEMPLATE_LANGUAGE: Record<string, AccessControlTemplateLanguage> = {
  'zh-Hans': 'zh',
  'ja-JP': 'ja',
  'en-US': 'en',
}

export const localeMap: Record<Locale, string> = {
  'en-US': 'en',
  en_US: 'en',
  
}

export const getDocLanguage = (locale: string): DocLanguage => {
  return DOC_LANGUAGE[locale] || 'en'
}

const PRICING_PAGE_LANGUAGE: Record<string, string> = {
  'ja-JP': 'jp',
}

export const getPricingPageLanguage = (locale: string) => {
  return PRICING_PAGE_LANGUAGE[locale] || ''
}

export const getAccessControlTemplateLanguage = (locale: string): AccessControlTemplateLanguage => {
  return ACCESS_CONTROL_TEMPLATE_LANGUAGE[locale] || 'en'
}

export const NOTICE_I18N = {
  title: {
    en_US: 'Important Notice',
  
  },
  desc: {
    en_US:
      'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@crew.ai). We value your patience.',
   
  },
  href: '#',
}
