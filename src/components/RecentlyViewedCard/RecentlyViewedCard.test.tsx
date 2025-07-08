import { render } from '@testing-library/react-native';
import React from 'react';
import RecentlyViewedCard from './RecentlyViewedCard';

describe('RecentlyViewedCard', () => {
  const baseProps = {
    image: 'https://example.com/image.jpg',
    title: 'Test Card',
    progress: '50%',
    viewStyles: {
      recentlyViewedCard: {},
      recentlyViewedImage: {},
    },
    textStyles: {
      recentlyViewedCardTitle: {},
      recentlyViewedProgress: {},
    },
  };

  it('renders the title', () => {
    const { getByText } = render(<RecentlyViewedCard {...baseProps} />);
    expect(getByText('Test Card')).toBeTruthy();
  });

  it('renders the progress', () => {
    const { getByText } = render(<RecentlyViewedCard {...baseProps} />);
    expect(getByText('50%')).toBeTruthy();
  });
});
