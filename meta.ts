export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  pnpm: 'https://github.com/pnpm/pnpm.io',
  tailwindcss: 'https://github.com/tailwindlabs/tailwindcss',
  vite: 'https://github.com/vitejs/vite',
  vitest: 'https://github.com/vitest-dev/vitest',
}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  'slidev': {
    official: true,
    source: 'https://github.com/slidevjs/slidev',
    skills: {
      slidev: 'slidev',
    },
  },
  'superpowers': {
    official: true,
    source: 'https://github.com/obra/superpowers',
    skills: {
      'brainstorming': 'sp-brainstorming',
      'dispatching-parallel-agents': 'sp-dispatching-parallel-agents',
      'executing-plans': 'sp-executing-plans',
      'finishing-a-development-branch': 'sp-finishing-a-development-branch',
      'receiving-code-review': 'sp-receiving-code-review',
      'requesting-code-review': 'sp-requesting-code-review',
      'subagent-driven-development': 'sp-subagent-driven-development',
      'systematic-debugging': 'sp-systematic-debugging',
      'test-driven-development': 'sp-test-driven-development',
      'using-git-worktrees': 'sp-using-git-worktrees',
      'using-superpowers': 'sp-using-superpowers',
      'verification-before-completion': 'sp-verification-before-completion',
      'writing-plans': 'sp-writing-plans',
      'writing-skills': 'sp-writing-skills',
    },
  },
  'tsdown': {
    official: true,
    source: 'https://github.com/rolldown/tsdown',
    skills: {
      tsdown: 'tsdown',
    },
  },
  'turborepo': {
    official: true,
    source: 'https://github.com/vercel/turborepo',
    skills: {
      turborepo: 'turborepo',
    },
  },
  'web-design-guidelines': {
    source: 'https://github.com/vercel-labs/agent-skills',
    skills: {
      'composition-patterns': 'composition-patterns',
      'react-best-practices': 'react-best-practices',
      'react-native-skills': 'react-native-skills',
      'web-design-guidelines': 'web-design-guidelines',
    },
  },
}

/**
 * Hand-written skills with Johnson Mao's preferences/tastes/recommendations
 */
export const manual = [
  'mao',
]
