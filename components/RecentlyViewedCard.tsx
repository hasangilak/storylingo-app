import React from 'react';
import { Image, ImageStyle, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

interface RecentlyViewedCardProps {
  image: string;
  title: string;
  progress: string;
  viewStyles: {
    recentlyViewedCard: StyleProp<ViewStyle>;
    recentlyViewedImage: StyleProp<ImageStyle>;
  };
  textStyles: {
    recentlyViewedCardTitle: StyleProp<TextStyle>;
    recentlyViewedProgress: StyleProp<TextStyle>;
  };
}

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