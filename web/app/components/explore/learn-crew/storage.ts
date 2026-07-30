'use client'

import { createLocalStorageState } from 'foxact/create-local-storage-state'

export const LEARN_CREW_HIDDEN_STORAGE_KEY = 'explore-learn-crew-hidden'

const [_useLearnCrewHidden, useLearnCrewHiddenValue, useSetLearnCrewHidden] =
  createLocalStorageState<boolean>(LEARN_CREW_HIDDEN_STORAGE_KEY, false)

export { useLearnCrewHiddenValue, useSetLearnCrewHidden }
