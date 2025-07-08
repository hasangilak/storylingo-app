# Onboarding Guide

Welcome to the StoryLingo codebase! This guide will help you get started as a contributor.

## Project Structure

- `src/` — All source code (app, components, hooks, constants, layouts, etc.)
- `assets/` — Fonts and images
- `designs/` — Design system and references
- `tasks/` — Project review and improvement tasks

## Key Conventions

- Use the `@` alias for imports from `src/` (e.g., `import X from '@/components/X'`)
- All components should have their own folder with `.tsx`, `.styles.ts`, and `.types.ts` (if needed)
- Centralized design tokens in `src/constants/tokens.ts`
- Type safety enforced with TypeScript
- Code style enforced with ESLint and Prettier
- Accessibility best practices for all interactive elements
- Error boundaries for robust error handling

## Setup

1. Clone the repo and run `npm install`
2. Start the development server with `npm start` or `expo start`
3. Run `npm run lint` and `npm run format` before submitting code

## Contributing

- Create a new branch for each feature or fix
- Add or update tests as needed
- Check the `tasks/REVIEW_TASKS_YYYY-MM-DD.md` file for ongoing improvements

---

If you have questions, check the README or ask a maintainer. Happy coding!
