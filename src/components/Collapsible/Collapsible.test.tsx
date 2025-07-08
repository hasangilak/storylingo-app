import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Collapsible } from './Collapsible';

jest.mock('expo-symbols', () => ({ SymbolView: () => null }));
jest.mock('@/components/ThemedText/ThemedText', () => ({ ThemedText: 'Text' }));
jest.mock('@/components/ThemedView/ThemedView', () => ({ ThemedView: 'View' }));

jest.mock('@/hooks/useColorScheme', () => ({ useColorScheme: () => 'light' }));

describe('Collapsible', () => {
  it('renders the title', () => {
    const { getByText } = render(<Collapsible title="Test Title">Hidden Content</Collapsible>);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('toggles children visibility on press', () => {
    const { getByText, queryByTestId } = render(
      <Collapsible title="Test Title">Hidden Content</Collapsible>,
    );
    // Initially hidden
    expect(queryByTestId('collapsible-content')).toBeNull();
    // Press to open
    fireEvent.press(getByText('Test Title'));
    expect(queryByTestId('collapsible-content')).toBeTruthy();
    // Press to close
    fireEvent.press(getByText('Test Title'));
    expect(queryByTestId('collapsible-content')).toBeNull();
  });
});
