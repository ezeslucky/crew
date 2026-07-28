import type { ReleaseSummary } from '@crew/contracts/enterprise/types.gen'
import type { ReleaseWithSummaryDeployments } from './release-deployments'
import { getReleaseSummaryDeployments } from './release-deployments'

export function releaseRowFromSummary(summary: ReleaseSummary): ReleaseWithSummaryDeployments {
  return {
    ...summary.release,
    summaryDeployments: getReleaseSummaryDeployments(summary),
  }
}
