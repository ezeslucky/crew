/**
 * Model provider quota types - shared type definitions for API responses
 * These represent the provider identifiers that support paid/trial quotas
 */
export const ModelProviderQuotaGetPaid = {
  ANTHROPIC: 'crew/anthropic/anthropic',
  OPENAI: 'crew/openai/openai',
  // AZURE_OPENAI: 'crew/azure_openai/azure_openai',
  GEMINI: 'crew/gemini/google',
  X: 'crew/x/x',
  DEEPSEEK: 'crew/deepseek/deepseek',
  TONGYI: 'crew/tongyi/tongyi',
} as const
export type ModelProviderQuotaGetPaid =
  (typeof ModelProviderQuotaGetPaid)[keyof typeof ModelProviderQuotaGetPaid]
