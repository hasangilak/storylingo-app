import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <Text>Child content</Text>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Child content')).toBeTruthy();
  });

  it('renders fallback UI when error is thrown', () => {
    // Component that throws
    const ProblemChild = () => {
      throw new Error('Test error');
    };
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );
    expect(screen.getByText('Something went wrong.')).toBeTruthy();
    expect(screen.getByText('Test error')).toBeTruthy();
  });
});
