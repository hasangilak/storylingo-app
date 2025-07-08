import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { styles } from './FeaturedCard.styles';
import type { FeaturedCardProps } from './FeaturedCard.types';

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  image,
  badge,
  title,
  meta,
  info,
}) => {
  const scale = useSharedValue(0.95);

  React.useEffect(() => {
    scale.value = withSpring(1, { damping: 10 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPressIn={() => { scale.value = withSpring(0.97); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={{ flex: 1 }}
    >
      <Animated.View style={[styles.featuredCard, animatedStyle]}>
        <Image source={{ uri: image }} style={styles.featuredImage} />
        <LinearGradient
          colors={["rgba(0,0,0,1)", "rgba(0,0,0,0.0)"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
          locations={[0, 1]}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.metaRow}>
            {meta.map((m) => (
              <Text key={m} style={styles.meta}>{m}</Text>
            ))}
          </View>
          <Text style={styles.info}>{info}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default FeaturedCard; 