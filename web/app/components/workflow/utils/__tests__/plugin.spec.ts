import { extractPluginId } from '../plugin'

describe('extractPluginId', () => {
  it('returns the provider prefix for nested plugin paths', () => {
    expect(extractPluginId('crew/openai/tools/chat')).toBe('crew/openai')
  })

  it('returns the original provider when it has no nested path', () => {
    expect(extractPluginId('crew')).toBe('crew')
  })
})
