# StoryLingo App

A modern React Native + Expo app using TypeScript, centralized design tokens, ESLint, Prettier, Husky pre-commit hooks, and @ alias for imports.

## Project Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm start
   ```

   or

   ```sh
   expo start
   ```

3. **Run on device or simulator:**
   - Use the Expo Go app on your device, or an emulator/simulator.

## Scripts

- `npm start` / `expo start` — Start the Expo development server
- `npm run lint` — Run ESLint
- `npm run tsc` — Type-check the codebase
- `npm test` — Run tests with Jest
- `npm run coverage` — Run tests with coverage report

## Code Quality & Automation

- **Linting & Formatting:**
  - ESLint and Prettier are enforced via scripts and pre-commit hooks (Husky + lint-staged)
  - All staged files are automatically linted and formatted before commit
- **Type Safety:**
  - TypeScript strict mode is enabled
  - All components and functions use explicit types and interfaces
- **Testing:**
  - Jest and React Native Testing Library are set up for unit and integration tests
  - Run `npm test` to execute tests, and `npm run coverage` for coverage reports
- **CI/CD:**
  - GitHub Actions workflow runs lint, type-check, and tests on every push and pull request

## Development Workflow

- All source code is under `src/` (except `assets/` and `designs/`)
- Use the `@` alias for imports from `src/` (e.g., `import X from '@/components/X'`)
- Design tokens (spacing, radii, typography) are centralized in `src/constants/tokens.ts`
- Error boundaries are used for robust error handling
- Accessibility best practices are followed for interactive elements

## Onboarding & Contributing

- See `ONBOARDING.md` for a quickstart guide for new contributors
- Fork the repo and create a new branch for your feature or fix
- Run `npm run lint` and commit only after passing pre-commit checks
- Add or update tests as needed

---

For more details, see the code comments and the `tasks/REVIEW_TASKS_YYYY-MM-DD.md` file for ongoing improvements.
