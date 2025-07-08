import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { ThemedView } from './ThemedView';

describe('ThemedView', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ThemedView>
        <Text>Test content</Text>
      </ThemedView>,
    );
    expect(getByText('Test content')).toBeTruthy();
  });

  it('applies style prop', () => {
    const { getByTestId } = render(
      <ThemedView style={{ backgroundColor: 'red' }} testID="themed-view" />,
    );
    const view = getByTestId('themed-view');
    expect(view.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ backgroundColor: 'red' })]),
    );
  });
});
