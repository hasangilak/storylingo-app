import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemedText } from './ThemedText';

describe('ThemedText', () => {
  it('renders children', () => {
    const { getByText } = render(<ThemedText>Test text</ThemedText>);
    expect(getByText('Test text')).toBeTruthy();
  });

  it('applies the type prop for style variants', () => {
    const { getByText } = render(<ThemedText type="title">Title text</ThemedText>);
    const text = getByText('Title text');
    expect(text.props.style).toBeDefined();
  });
});
