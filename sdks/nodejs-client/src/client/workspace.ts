import type { CrewResponse } from '../types/common'
import type { WorkspaceModelType, WorkspaceModelsResponse } from '../types/workspace'
import { CrewClient } from './base'
import { ensureNonEmptyString } from './validation'

export class WorkspaceClient extends CrewClient {
  async getModelsByType(
    modelType: WorkspaceModelType,
  ): Promise<CrewResponse<WorkspaceModelsResponse>> {
    ensureNonEmptyString(modelType, 'modelType')
    return this.http.request({
      method: 'GET',
      path: `/workspaces/current/models/model-types/${modelType}`,
    })
  }
}
