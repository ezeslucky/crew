'use client'

import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { IS_CLOUD_EDITION } from '@/config'
import { useSearchParams } from '@/next/navigation'
import { rememberCreateAppExternalAttribution } from '@/utils/create-app-tracking'

const UTM_INFO_COOKIE = 'utm_info'
const UTM_INFO_COOKIE_EXPIRES_DAYS = 1
const UTM_INFO_QUERY_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'slug',
] as const

type SearchParamReader = {
  get: (name: string) => string | null
}

const normalizeString = (value?: string | null) => {
  const trimmed = value?.trim()
  return trimmed || undefined
}

const getSearchParamValue = (searchParams: SearchParamReader, key: string) =>
  normalizeString(searchParams.get(key))

const parseRedirectUrlSearchParams = (redirectUrl: string) => {
  const baseUrl = window.location.origin

  try {
    const url = new URL(redirectUrl, baseUrl)
    if (url.origin !== baseUrl) return null

    return url.searchParams
  } catch {
    return null
  }
}

const resolveAttributionSearchParams = (
  searchParams: SearchParamReader,
): SearchParamReader | null => {
  if (getSearchParamValue(searchParams, 'utm_source')) return searchParams

  const redirectUrl = getSearchParamValue(searchParams, 'redirect_url')
  if (!redirectUrl) return null

  return parseRedirectUrlSearchParams(redirectUrl)
}


const ExternalAttributionRecorder = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!IS_CLOUD_EDITION) return

    const attributionSearchParams = resolveAttributionSearchParams(searchParams)
    if (!attributionSearchParams) return

    const utmSource = getSearchParamValue(attributionSearchParams, 'utm_source')
    if (!utmSource) return

    // create_app conversion attribution (utm_source + slug).
    rememberCreateAppExternalAttribution({ searchParams: attributionSearchParams })

    // Seed the utm_info cookie the registration trackers read. A campaign click always
    // overwrites any previous value, so the most recent blog link wins (last-touch) and
    // a stale cookie from an earlier, un-converted visit can't shadow the new slug. This
    // mirrors the create_app attribution refreshed just above.
    const utmInfo: Record<string, string> = {}
    UTM_INFO_QUERY_KEYS.forEach((key) => {
      const value = getSearchParamValue(attributionSearchParams, key)
      if (value) utmInfo[key] = value
    })

    Cookies.set(UTM_INFO_COOKIE, JSON.stringify(utmInfo), {
      expires: UTM_INFO_COOKIE_EXPIRES_DAYS,
      path: '/',
    })
  }, [searchParams])

  return null
}

export default ExternalAttributionRecorder
