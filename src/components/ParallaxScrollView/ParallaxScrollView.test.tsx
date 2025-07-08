import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import ParallaxScrollView from './ParallaxScrollView';

jest.mock('@/components/ui/TabBarBackground', () => ({ useBottomTabOverflow: () => 0 }));
jest.mock('@/hooks/useColorScheme', () => ({ useColorScheme: () => 'light' }));

describe('ParallaxScrollView', () => {
  it('renders header image and children', () => {
    const headerImage = <Text>Header Image</Text>;
    const { getByText } = render(
      <ParallaxScrollView
        headerImage={headerImage}
        headerBackgroundColor={{ light: 'white', dark: 'black' }}
      >
        <Text>Child Content</Text>
      </ParallaxScrollView>,
    );
    expect(getByText('Header Image')).toBeTruthy();
    expect(getByText('Child Content')).toBeTruthy();
  });
});
