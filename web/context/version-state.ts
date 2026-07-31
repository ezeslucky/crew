'use client'

import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'
import { consoleQuery } from '@/service/client'
import { accountProfileMetaAtom } from './account-state'
import { initialCrewVersionInfo } from './app-context-defaults'
import { getCrewVersionInfo } from './app-context-normalizers'
import { systemFeaturesAtom } from './system-features-state'

const versionQueryAtom = atomWithQuery((get) => {
  const meta = get(accountProfileMetaAtom)
  const systemFeatures = get(systemFeaturesAtom)
  const enabled = Boolean(meta.currentVersion && !systemFeatures.branding.enabled)

  return consoleQuery.version.get.queryOptions({
    input: {
      query: {
        current_version: meta.currentVersion ?? '',
      },
    },
    enabled,
  })
})

export const CrewVersionInfoAtom = atom((get) => {
  const meta = get(accountProfileMetaAtom)
  const versionData = get(versionQueryAtom).data

  if (!versionData) return initialCrewVersionInfo

  return getCrewVersionInfo({
    meta,
    versionData,
  })
})

export const crewCurrentVersionAtom = atom((get) => {
  return get(crewVersionInfoAtom).current_version
})
