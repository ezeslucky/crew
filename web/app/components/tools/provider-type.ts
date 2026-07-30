import type { ToolProviderType } from '@crew/contracts/api/console/workspaces/types.gen'
import { zToolProviderType } from '@crew/contracts/api/console/workspaces/zod.gen'

export const parseToolProviderType = (providerType: unknown): ToolProviderType =>
  zToolProviderType.parse(providerType)
