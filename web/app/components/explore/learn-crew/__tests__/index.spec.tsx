import type { App } from '@/models/explore'
import { render, screen } from '@testing-library/react'
import { STEP_BY_STEP_TOUR_TARGETS } from '@/app/components/step-by-step-tour/target-registry'
import { createConsoleQueryWrapper } from '@/test/console/query-data'
import { AppModeEnum } from '@/types/app'
import LearnCrew from '../index'
import { LEARN_CREW_HIDDEN_STORAGE_KEY } from '../storage'

let mockLearnCrewApps: App[] = []
let mockLearnCrewLoading = false

vi.mock('@/service/use-explore', () => ({
  useLearnCrewAppList: () => ({
    data: mockLearnCrewApps,
    isLoading: mockLearnCrewLoading,
  }),
}))

const createApp = (overrides: Partial<App> = {}): App => ({
  app: {
    id: overrides.app?.id ?? 'app-basic-id',
    mode: overrides.app?.mode ?? AppModeEnum.CHAT,
    icon_type: overrides.app?.icon_type ?? 'emoji',
    icon: overrides.app?.icon ?? '😀',
    icon_background: overrides.app?.icon_background ?? '#fff',
    icon_url: overrides.app?.icon_url ?? '',
    name: overrides.app?.name ?? 'Learn Crew App',
    description: overrides.app?.description ?? 'Learn Crew description',
    use_icon_as_answer_icon: overrides.app?.use_icon_as_answer_icon ?? false,
  },
  can_trial: overrides.can_trial ?? true,
  app_id: overrides.app_id ?? 'learn-crew-app',
  description: overrides.description ?? 'Learn Crew description',
  copyright: overrides.copyright ?? '',
  privacy_policy: overrides.privacy_policy ?? null,
  custom_disclaimer: overrides.custom_disclaimer ?? null,
  categories: overrides.categories ?? ['Writing'],
  position: overrides.position ?? 1,
  is_listed: overrides.is_listed ?? true,
  install_count: overrides.install_count ?? 0,
  installed: overrides.installed ?? false,
  editable: overrides.editable ?? false,
  is_agent: overrides.is_agent ?? false,
})

const renderLearnCrew = ({
  enableLearnApp = true,
  forceVisible = false,
}: {
  enableLearnApp?: boolean
  forceVisible?: boolean
} = {}) => {
  const { wrapper } = createConsoleQueryWrapper({
    systemFeatures: {
      enable_learn_app: enableLearnApp,
    },
  })

  return render(
    <LearnCrew forceVisible={forceVisible} stepByStepTourTarget={STEP_BY_STEP_TOUR_TARGETS.home} />,
    { wrapper },
  )
}

describe('LearnCrew', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    mockLearnCrewApps = [createApp()]
    mockLearnCrewLoading = false
  })

  it('should stay hidden when the user hidden preference is set', () => {
    localStorage.setItem(LEARN_CREW_HIDDEN_STORAGE_KEY, 'true')

    renderLearnCrew()

    expect(
      screen.queryByRole('heading', { name: 'explore.learnCrew.title' }),
    ).not.toBeInTheDocument()
  })

  it('should show hidden content when forceVisible is set for the step tour', () => {
    localStorage.setItem(LEARN_CREW_HIDDEN_STORAGE_KEY, 'true')

    renderLearnCrew({ forceVisible: true })

    const learnCrewHeading = screen.getByRole('heading', { name: 'explore.learnCrew.title' })
    expect(learnCrewHeading).toBeInTheDocument()
    expect(learnCrewHeading.closest('section')).toHaveAttribute(
      'data-step-by-step-tour-target',
      STEP_BY_STEP_TOUR_TARGETS.home,
    )
    expect(screen.queryByRole('button', { name: 'explore.learnCrew.hide' })).not.toBeInTheDocument()
  })

  it('should keep Learn Crew hidden when the system feature is disabled', () => {
    localStorage.setItem(LEARN_CREW_HIDDEN_STORAGE_KEY, 'true')

    renderLearnCrew({ enableLearnApp: false, forceVisible: true })

    expect(
      screen.queryByRole('heading', { name: 'explore.learnCrew.title' }),
    ).not.toBeInTheDocument()
  })
})
