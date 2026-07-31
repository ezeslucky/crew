import type { GetVersionResponse } from '@crew/contracts/api/console/version/types.gen'

export type CrewVersionInfo = GetVersionResponse & {
  current_version: string
  latest_version: string
  current_env: string
}
