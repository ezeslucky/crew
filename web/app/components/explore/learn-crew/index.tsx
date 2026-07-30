'use client'

import type { App } from '@/models/explore'
import type { TryAppSelection } from '@/types/try-app'
import { cn } from '@crew/crew-ui/cn'
import { useSuspenseQuery } from '@tanstack/react-query'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { systemFeaturesQueryOptions } from '@/features/system-features/client'
import { useLearnCrewAppList } from '@/service/use-explore'
import LearnCrewItem from './item'
import { useLearnCrewHiddenValue, useSetLearnCrewHidden } from './storage'

type LearnCrewProps = {
  canCreate?: boolean
  className?: string
  dismissible?: boolean
  forceVisible?: boolean
  itemLimit?: number
  loadingFallback?: React.ReactNode
  onCreate?: (app: App) => void
  onTry?: (params: TryAppSelection) => void
  showDescription?: boolean
  stepByStepTourTarget?: string
  title?: string
}

type LearnCrewContentProps = LearnCrewProps & {
  onHide?: () => void
}

const LearnCrewContent = ({
  canCreate = false,
  className,
  itemLimit,
  loadingFallback = null,
  onHide,
  onCreate,
  onTry,
  showDescription = true,
  stepByStepTourTarget,
  title,
}: LearnCrewContentProps) => {
  const { t } = useTranslation()
  const [isClosing, setIsClosing] = useState(false)
  const [collapseTransform, setCollapseTransform] = useState<string>()
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { data: learnCrewItems = [], isLoading } = useLearnCrewAppList()

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [])

  const handleHide = () => {
    const sectionRect = sectionRef.current?.getBoundingClientRect()
    const helpTargetRect = document
      .querySelector('[data-learn-crew-help-target]')
      ?.getBoundingClientRect()
    if (sectionRect && helpTargetRect) {
      const sectionCenterX = sectionRect.left + sectionRect.width / 2
      const sectionCenterY = sectionRect.top + sectionRect.height / 2
      const helpCenterX = helpTargetRect.left + helpTargetRect.width / 2
      const helpCenterY = helpTargetRect.top + helpTargetRect.height / 2

      setCollapseTransform(
        `translate3d(${helpCenterX - sectionCenterX}px, ${helpCenterY - sectionCenterY}px, 0) scale(0.08)`,
      )
    } else {
      setCollapseTransform('scale(0.08)')
    }
    setIsClosing(true)
    hideTimerRef.current = setTimeout(() => {
      onHide?.()
      setIsClosing(false)
      setCollapseTransform(undefined)
    }, 800)
  }

  const visibleItems = itemLimit ? learnCrewItems.slice(0, itemLimit) : learnCrewItems
  const sectionTitle = title ?? t(($) => $['learnCrew.title'], { ns: 'explore' })

  if (isLoading) return loadingFallback
  if (visibleItems.length === 0) return null

  return (
    <section
      ref={sectionRef}
      className={cn(
        'px-8 pb-6 transition-[opacity,transform] duration-800 ease-in-out',
        isClosing && 'pointer-events-none relative z-50 opacity-20',
        className,
      )}
      style={
        isClosing ? { transform: collapseTransform, transformOrigin: 'center center' } : undefined
      }
      aria-labelledby="learn-crew-title"
      data-step-by-step-tour-target={stepByStepTourTarget}
    >
      <div className="-mx-4 rounded-2xl bg-background-section p-4">
        <div className="flex items-start justify-between gap-4 pb-2.5">
          <div className="min-w-0">
            <h2
              id="learn-crew-title"
              className="truncate system-xl-medium text-text-primary"
              title={sectionTitle}
            >
              {sectionTitle}
            </h2>
            {showDescription && (
              <p className="mt-0.5 truncate system-xs-regular text-text-tertiary">
                {t(($) => $['learnCrew.description'], { ns: 'explore' })}
              </p>
            )}
          </div>
          {onHide && (
            <button
              type="button"
              className="flex size-8 shrink-0 items-center justify-center rounded-lg text-text-tertiary hover:bg-state-base-hover hover:text-text-secondary focus-visible:bg-state-base-hover focus-visible:ring-1 focus-visible:ring-components-input-border-hover focus-visible:outline-hidden"
              aria-label={t(($) => $['learnCrew.hide'], { ns: 'explore' })}
              onClick={handleHide}
            >
              <span className="i-ri-close-line size-4" aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(296px,1fr))] gap-2.5">
          {visibleItems.map((item) => (
            <LearnCrewItem
              key={item.app_id}
              canCreate={canCreate}
              item={item}
              onCreate={onCreate}
              onTry={onTry}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const DismissibleLearnCrew = (props: LearnCrewProps) => {
  const hidden = useLearnCrewHiddenValue()
  const setHidden = useSetLearnCrewHidden()

  if (hidden) return null

  return <LearnCrewContent {...props} onHide={() => setHidden(true)} />
}

const LearnCrew = (props: LearnCrewProps) => {
  const { data: systemFeatures } = useSuspenseQuery(systemFeaturesQueryOptions())

  if (!systemFeatures.enable_learn_app) return null

  if (props.dismissible === false || props.forceVisible) return <LearnCrewContent {...props} />

  return <DismissibleLearnCrew {...props} />
}

export default React.memo(LearnCrew)
