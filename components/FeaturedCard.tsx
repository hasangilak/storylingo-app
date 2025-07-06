import React from 'react';
import { Image, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

interface FeaturedCardProps {
  image: string;
  badge: string;
  title: string;
  meta: string[];
  info: string;
  viewStyles: {
    featuredCard: StyleProp<ViewStyle>;
    featuredImage: StyleProp<ViewStyle>;
    badge: StyleProp<ViewStyle>;
    cardContent: StyleProp<ViewStyle>;
    metaRow: StyleProp<ViewStyle>;
  };
  textStyles: {
    badge: StyleProp<TextStyle>;
    cardTitle: StyleProp<TextStyle>;
    meta: StyleProp<TextStyle>;
    info: StyleProp<TextStyle>;
  };
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  image,
  badge,
  title,
  meta,
  info,
  viewStyles,
  textStyles,
}) => (
  <View style={viewStyles.featuredCard}>
    <Image source={{ uri: image }} style={viewStyles.featuredImage} />
    <View style={viewStyles.badge}>
      <Text style={textStyles.badge}>{badge}</Text>
    </View>
    <View style={viewStyles.cardContent}>
      <Text style={textStyles.cardTitle}>{title}</Text>
      <View style={viewStyles.metaRow}>
        {meta.map((m) => (
          <Text key={m} style={textStyles.meta}>{m}</Text>
        ))}
      </View>
      <Text style={textStyles.info}>{info}</Text>
    </View>
  </View>
);

export default FeaturedCard; 