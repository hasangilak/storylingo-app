import { render } from '@testing-library/react-native';
import React from 'react';
import FeaturedCard from './FeaturedCard';

describe('FeaturedCard', () => {
  it('renders title and badge', () => {
    const { getByText } = render(
      <FeaturedCard
        image="https://example.com/image.png"
        badge="New"
        title="Test Title"
        meta={['meta1', 'meta2']}
        info="Some info"
      />,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('New')).toBeTruthy();
  });
});
