# Skills

Fork of [antfu/skills](https://github.com/antfu/skills) — a curated collection of [Agent Skills](https://agentskills.io/home): build tools (Vite, Vitest), styling (Tailwind CSS), package management (pnpm), presentations (Slidev), AI workflows (Superpowers), monorepos (Turborepo), and more.

> [!IMPORTANT]
> This is a proof-of-concept project for generating agent skills from source documentation and keeping them in sync.
> I haven't fully tested how well the skills perform in practice, so feedback and contributions are greatly welcome.

## Installation

```bash
pnpx skills add JohnsonMao/skills --skill='*'
```

or to install all of them globally:

```bash
pnpx skills add JohnsonMao/skills --skill='*' -g
```

Learn more about the CLI usage at [skills](https://github.com/vercel-labs/skills).

## Skills

This collection includes skills generated from official documentation and skills synced from external repositories. See `meta.ts` for the source configuration.

### Hand-maintained Skills

> Opinionated

Manually maintained with preferred tools, setup conventions, and best practices.

| Skill | Description |
|-------|-------------|
| [mao](skills/mao) | Johnson Mao's preferences and best practices for projects |

### Skills Generated from Official Documentation

Generated from official docs (sources in `meta.ts` → `submodules`).

| Skill | Description | Source |
|-------|-------------|--------|
| [pnpm](skills/pnpm) | pnpm - fast, disk space efficient package manager | [pnpm/pnpm.io](https://github.com/pnpm/pnpm.io) |
| [tailwindcss](skills/tailwindcss) | Tailwind CSS - utility-first CSS, theme, content sources, Vite/PostCSS/CLI | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) |
| [vite](skills/vite) | Vite - build tool, config, plugins, SSR, Rolldown | [vitejs/vite](https://github.com/vitejs/vite) |
| [vitest](skills/vitest) | Vitest - unit testing framework powered by Vite | [vitest-dev/vitest](https://github.com/vitest-dev/vitest) |

### Vendored Skills

Synced from external repositories that maintain their own skills (see `meta.ts` → `vendors`).

| Skill | Description | Source |
|-------|-------------|--------|
| [slidev](skills/slidev) (Official) | Presentation slides for developers (Markdown, code, animations) | [slidevjs/slidev](https://github.com/slidevjs/slidev) |
| [sp-brainstorming](skills/sp-brainstorming) | Brainstorming with structured exploration | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-dispatching-parallel-agents](skills/sp-dispatching-parallel-agents) | Dispatching and coordinating parallel agents | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-executing-plans](skills/sp-executing-plans) | Executing plans step by step | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-finishing-a-development-branch](skills/sp-finishing-a-development-branch) | Finishing a development branch (cleanup, PR) | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-receiving-code-review](skills/sp-receiving-code-review) | Receiving and addressing code review | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-requesting-code-review](skills/sp-requesting-code-review) | Requesting code review | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-subagent-driven-development](skills/sp-subagent-driven-development) | Subagent-driven development workflow | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-systematic-debugging](skills/sp-systematic-debugging) | Systematic debugging and root cause analysis | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-test-driven-development](skills/sp-test-driven-development) | Test-driven development | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-using-git-worktrees](skills/sp-using-git-worktrees) | Using Git worktrees for parallel work | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-using-superpowers](skills/sp-using-superpowers) | How to find and invoke skills before responding | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-verification-before-completion](skills/sp-verification-before-completion) | Verification before marking work complete | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-writing-plans](skills/sp-writing-plans) | Writing actionable plans | [obra/superpowers](https://github.com/obra/superpowers) |
| [sp-writing-skills](skills/sp-writing-skills) | Writing and maintaining agent skills | [obra/superpowers](https://github.com/obra/superpowers) |
| [tsdown](skills/tsdown) (Official) | TypeScript/JS library bundler powered by Rolldown | [rolldown/tsdown](https://github.com/rolldown/tsdown) |
| [turborepo](skills/turborepo) (Official) | High-performance build system for monorepos | [vercel/turborepo](https://github.com/vercel/turborepo) |
| [composition-patterns](skills/composition-patterns) | React composition patterns that scale | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [react-best-practices](skills/react-best-practices) | React best practices | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [react-native-skills](skills/react-native-skills) | React Native skills | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [web-design-guidelines](skills/web-design-guidelines) | Web interface guidelines and accessibility review | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |

## FAQ

### What Makes This Collection Different?

This collection uses git submodules to reference source documentation directly, so generated skills can stay in sync with upstream. It mixes generated skills (from official docs), vendored skills (synced from other repos), and hand-maintained skills. You can fork and adjust `meta.ts` to build your own set.

### Skills vs llms.txt vs AGENTS.md

To me, the value of skills lies in being **shareable** and **on-demand**.

Being shareable makes prompts easier to manage and reuse across projects. Being on-demand means skills can be pulled in as needed, scaling far beyond what any agent's context window could fit at once.

You might hear people say "AGENTS.md outperforms skills". I think that's true — AGENTS.md loads everything upfront, so agents always respect it, whereas skills can have false negatives where agents don't pull them in when you'd expect. That said, I see this more as a gap in tooling and integration that will improve over time. Skills are really just a standardized format for agents to consume—plain markdown files at the end of the day. Think of them as a knowledge base for agents. If you want certain skills to always apply, you can reference them directly in your AGENTS.md.

## Generate Your Own Skills

Fork this project to create your own customized skill collection.

1. Fork or clone this repository
2. Install dependencies: `pnpm install`
3. Update `meta.ts` with your own projects and skill sources
4. Run `pnpm start cleanup` to remove existing submodules and skills
5. Run `pnpm start init` to clone the submodules
6. Run `pnpm start sync` to sync vendored skills
7. Ask your agent to `Generate skills for \<project\>` (recommended one at a time to manage token usage)

See [AGENTS.md](AGENTS.md) for detailed generation guidelines.

## License

Skills and the scripts in this repository are [MIT](LICENSE.md) licensed.

Vendored skills from external repositories retain their original licenses - see each skill directory for details.
