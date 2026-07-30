/**
 * Tests for embedded-chatbot utility functions.
 */

import { isCrew } from '../utils'

describe('isCrew', () => {
  const originalReferrer = document.referrer

  afterEach(() => {
    Object.defineProperty(document, 'referrer', {
      value: originalReferrer,
      writable: true,
    })
  })

  it('should return true when referrer includes crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://crew.ai/something',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer includes www.crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://www.crew.ai/app/xyz',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return false when referrer does not include crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://example.com',
      writable: true,
    })

    expect(isCrew()).toBe(false)
  })

  it('should return false when referrer is empty', () => {
    Object.defineProperty(document, 'referrer', {
      value: '',
      writable: true,
    })

    expect(isCrew()).toBe(false)
  })

  it('should return false when referrer does not contain crew.ai domain', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://example-crew.com',
      writable: true,
    })

    expect(isCrew()).toBe(false)
  })

  it('should handle referrer without protocol', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'crew.ai',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer includes api.crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://api.crew.ai/v1/endpoint',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer includes app.crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://app.crew.ai/chat',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer includes docs.crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://docs.crew.ai/guide',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer has crew.ai with query parameters', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://crew.ai/?ref=test&id=123',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer has crew.ai with hash fragment', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://crew.ai/page#section',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when referrer has crew.ai with port number', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://crew.ai:8080/app',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when crew.ai appears after another domain', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://example.com/redirect?url=https://crew.ai',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when substring contains crew.ai', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://notcrew.ai',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true when crew.ai is part of a different domain', () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://fake-crew.ai.example.com',
      writable: true,
    })

    expect(isCrew()).toBe(true)
  })

  it('should return true with multiple referrer variations', () => {
    const variations = [
      'https://crew.ai',
      'http://www.crew.ai',
      'http://crew.ai/',
      'https://crew.ai/app?token=123#section',
      'crew.ai/test',
      'www.crew.ai/en',
    ]

    variations.forEach((referrer) => {
      Object.defineProperty(document, 'referrer', {
        value: referrer,
        writable: true,
      })
      expect(isCrew()).toBe(true)
    })
  })

  it('should return false with multiple non-crew referrer variations', () => {
    const variations = [
      'https://github.com',
      'https://google.com',
      'https://stackoverflow.com',
      'https://example.crew',
      'https://crewai.com',
      '',
    ]

    variations.forEach((referrer) => {
      Object.defineProperty(document, 'referrer', {
        value: referrer,
        writable: true,
      })
      expect(isCrew()).toBe(false)
    })
  })
})
