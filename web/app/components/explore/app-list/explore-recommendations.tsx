'use client'

import type { App } from '@/models/explore'
import type { App as WorkspaceApp } from '@/types/app'
import type { TryAppSelection } from '@/types/try-app'
import ContinueWork from '@/app/components/explore/continue-work'
import { STEP_BY_STEP_TOUR_TARGETS } from '@/app/components/step-by-step-tour/target-registry'
import dynamic from '@/next/dynamic'

const LearnCrew = dynamic(() => import('@/app/components/explore/learn-crew'), { ssr: false })

export function ExploreRecommendations({
  canCreate,
  continueWorkApps,
  forceShowLearnCrew,
  onCreate,
  onTry,
}: {
  canCreate: boolean
  continueWorkApps: WorkspaceApp[]
  forceShowLearnCrew?: boolean
  onCreate: (app: App) => void
  onTry: (params: TryAppSelection) => void
}) {
  return (
    <>
      <ContinueWork apps={continueWorkApps} />
      <LearnCrew
        canCreate={canCreate}
        className="pb-0"
        forceVisible={forceShowLearnCrew}
        onCreate={onCreate}
        onTry={onTry}
        stepByStepTourTarget={STEP_BY_STEP_TOUR_TARGETS.home}
      />
    </>
  )
}
