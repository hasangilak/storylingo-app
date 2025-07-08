# Codebase Review & Improvement Tasks

This document lists actionable tasks to improve the codebase, following best practices for React Native and Expo projects. Tasks are prioritized for maximum impact on maintainability, scalability, and developer experience.

---

## 1. Project Structure & Organization

- [ ] **Centralize All Source Code in `src/`**
  - Ensure all app, components, constants, hooks, and assets are under `src/`.
- [ ] **Consistent Component Folder Structure**
  - Each component should have its own folder with `.tsx`, `.styles.ts`, and `.types.ts` (if needed).
  - Remove unused or empty files.
- [ ] **Organize Shared Utilities**
  - Group shared hooks, constants, and utility functions in dedicated folders.
- [ ] **Review and Clean Up Aliases**
  - Ensure all imports use the `@` alias for paths under `src/`.
  - Remove any remaining relative imports that can use the alias.

## 2. Code Quality & Consistency

- [ ] **Enforce Consistent Styling**
  - Use a linter (e.g., ESLint) and formatter (e.g., Prettier) with a shared config.
  - Standardize code style (quotes, semicolons, spacing, etc.).
- [ ] **Type Safety**
  - Ensure all components and functions use TypeScript types and interfaces.
  - Add missing types, especially for props and state.
- [ ] **Component Reusability**
  - Refactor duplicate code into reusable components or hooks.
  - Extract repeated style objects into shared style modules.

## 3. Modernization & Best Practices

- [ ] **Use Functional Components and Hooks**
  - Prefer function components and React hooks over class components.
- [ ] **Expo & React Native Features**
  - Use Expo modules for fonts, images, and device features.
  - Leverage React Native's accessibility props for all interactive elements.
- [ ] **Performance Optimization**
  - Use `React.memo` or `useMemo` for expensive computations or pure components.
  - Optimize image loading and list rendering (e.g., FlatList for large lists).
- [ ] **Error Handling**
  - Add error boundaries or fallback UI for critical components.
  - Handle async errors in hooks and effects.

## 4. Documentation & Developer Experience

- [ ] **Add/Update README**
  - Document project setup, scripts, and development workflow.
- [ ] **Component Documentation**
  - Add JSDoc comments or MDX/Storybook stories for complex components.
- [ ] **Onboarding Guide**
  - Provide a short guide for new contributors (project structure, conventions, etc.).

## 5. Testing

- [ ] **Add Unit and Integration Tests**
  - Use Jest and React Native Testing Library for components and hooks.
  - Add tests for critical business logic and UI flows.
- [ ] **Test Coverage**
  - Track and improve test coverage over time.

## 6. Continuous Integration & Tooling

- [ ] **Set Up CI/CD**
  - Use GitHub Actions or similar for linting, testing, and building on PRs.
- [ ] **Automate Formatting and Linting**
  - Add pre-commit hooks (e.g., Husky) to enforce code quality.

---

## Quick Wins

- [ ] Remove unused files and dead code.
- [ ] Standardize all import paths to use the `@` alias.
- [ ] Add missing TypeScript types and interfaces.
- [ ] Add or update the main README with setup instructions.

---

> **Tip:** Tackle high-impact, low-effort tasks first (quick wins), then address structural and modernization improvements. Regularly review and update this list as the codebase evolves.
