#!/usr/bin/env -S bun

import { resolveBuildInfo } from '../scripts/lib/resolve-buildinfo.ts'

const info = resolveBuildInfo()
globalThis.__CREWCTL_VERSION__ = info.version
globalThis.__CREWCTL_COMMIT__ = info.commit
globalThis.__CREWCTL_BUILD_DATE__ = info.buildDate
globalThis.__CREWCTL_CHANNEL__ = info.channel
globalThis.__CREWCTL_MIN_CREW__ = info.minCrew
globalThis.__CREWCTL_MAX_CREW__ = info.maxCrew

const { commandTree } = await import('../src/commands/tree.ts')
const { run } = await import('../src/framework/run.ts')

await run(commandTree, process.argv.slice(2))
