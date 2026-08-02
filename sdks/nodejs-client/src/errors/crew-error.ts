export type CrewErrorOptions = {
  statusCode?: number
  responseBody?: unknown
  requestId?: string
  retryAfter?: number
  cause?: unknown
}

export class CrewError extends Error {
  statusCode?: number
  responseBody?: unknown
  requestId?: string
  retryAfter?: number

  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message)
    this.name = 'CrewError'
    this.statusCode = options.statusCode
    this.responseBody = options.responseBody
    this.requestId = options.requestId
    this.retryAfter = options.retryAfter
    if (options.cause) {
      ;(this as { cause?: unknown }).cause = options.cause
    }
  }
}

export class APIError extends CrewError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'APIError'
  }
}

export class AuthenticationError extends APIError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'AuthenticationError'
  }
}

export class RateLimitError extends APIError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'RateLimitError'
  }
}

export class ValidationError extends APIError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'ValidationError'
  }
}

export class NetworkError extends CrewError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'NetworkError'
  }
}

export class TimeoutError extends CrewError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'TimeoutError'
  }
}

export class FileUploadError extends CrewError {
  constructor(message: string, options: CrewErrorOptions = {}) {
    super(message, options)
    this.name = 'FileUploadError'
  }
}
