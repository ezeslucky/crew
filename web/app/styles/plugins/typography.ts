
import typographyPlugin from '@tailwindcss/typography'
import typographyConfig from './typography-config.js'

const created = typographyPlugin()

export default {
  handler: created.handler,
  config: {
    theme: {
      typography: typographyConfig,
    },
  },
}
