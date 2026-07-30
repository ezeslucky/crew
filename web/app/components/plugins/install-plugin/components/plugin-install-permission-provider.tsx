'use client'

import type { ReactNode } from 'react'
import type { PluginInstallPermissionStore } from '../hooks/use-plugin-install-permission'
import { use, useEffect, useRef } from 'react'
import {
  createPluginInstallPermissionStore,
  PluginInstallPermissionContext,
} from '../hooks/use-plugin-install-permission'

type PluginInstallPermissionProviderProps = {
  canInstallPlugin: boolean
  canUpdatePlugin?: boolean
  currentCrewVersion?: string
  children: ReactNode
}

export const PluginInstallPermissionProvider = ({
  canInstallPlugin,
  canUpdatePlugin,
  currentCrewVersion,
  children,
}: PluginInstallPermissionProviderProps) => {
  const storeRef = useRef<PluginInstallPermissionStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = createPluginInstallPermissionStore({
      canInstallPlugin,
      canUpdatePlugin,
      currentCrewVersion,
    })
  }

  useEffect(() => {
    storeRef.current?.getState().setPluginInstallPermission({
      canInstallPlugin,
      canUpdatePlugin: canUpdatePlugin ?? canInstallPlugin,
      currentCrewVersion,
    })
  }, [canInstallPlugin, canUpdatePlugin, currentCrewVersion])

  return (
    <PluginInstallPermissionContext value={storeRef.current}>
      {children}
    </PluginInstallPermissionContext>
  )
}

export const PluginInstallPermissionProviderGuard = ({
  canInstallPlugin,
  canUpdatePlugin,
  currentCrewVersion,
  children,
}: PluginInstallPermissionProviderProps) => {
  const store = use(PluginInstallPermissionContext)

  if (store) return children

  return (
    <PluginInstallPermissionProvider
      canInstallPlugin={canInstallPlugin}
      canUpdatePlugin={canUpdatePlugin}
      currentCrewVersion={currentCrewVersion}
    >
      {children}
    </PluginInstallPermissionProvider>
  )
}
