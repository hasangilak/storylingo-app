import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface RecentlyViewedCardProps {
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
