import type { AppInstance } from '@crew/contracts/enterprise/types.gen'

export type DeploymentActionAppInstance = Pick<AppInstance, 'id' | 'displayName' | 'description'>
