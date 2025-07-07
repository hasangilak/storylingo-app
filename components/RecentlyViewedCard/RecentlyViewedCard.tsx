import React from 'react';
import { Image, Text, View } from 'react-native';

import type { RecentlyViewedCardProps } from './RecentlyViewedCard.types';
  
const RecentlyViewedCard: React.FC<RecentlyViewedCardProps> = ({
  image,
  title,
  progress,
  viewStyles,
  textStyles,
}) => (
  <View style={viewStyles.recentlyViewedCard}>
    <Image source={{ uri: image }} style={viewStyles.recentlyViewedImage} />
    <View style={{ padding: 8 }}>
      <Text style={textStyles.recentlyViewedCardTitle}>{title}</Text>
      <Text style={textStyles.recentlyViewedProgress}>{progress}</Text>
    </View>
  </View>
);

export default RecentlyViewedCard; 