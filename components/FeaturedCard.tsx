import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const spacing = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 };
const radii = { none: 0, sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 };
const typography = {
  fontFamily: "Inter, 'Space Mono', Arial, sans-serif",
  fontWeight: { regular: '400', medium: '500', bold: '700' },
  fontSize: { display: 32, headline: 24, title: 20, subtitle: 16, body: 14, caption: 12 },
  lineHeight: { display: 40, headline: 32, title: 28, subtitle: 24, body: 20, caption: 16 }
};

const styles = StyleSheet.create({
  featuredCard: {
    backgroundColor: Colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 2,
    position: 'relative',
    height: 300,
  },
  featuredImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
  },
  badge: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    zIndex: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: typography.fontSize.caption,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
  },
  cardContent: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
    backgroundColor: 'transparent',
    zIndex: 1,
    padding: 0,
  },
  cardTitle: {
    color: Colors.onBackground,
    fontSize: typography.fontSize.headline,
    fontWeight: '700',
    fontFamily: typography.fontFamily,
    marginBottom: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  meta: {
    color: Colors.primary,
    fontSize: typography.fontSize.caption,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
    backgroundColor: 'rgba(59,130,246,0.08)',
    borderRadius: radii.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  info: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.caption,
    fontWeight: '400',
    fontFamily: typography.fontFamily,
  },
});

interface FeaturedCardProps {
  image: string;
  badge: string;
  title: string;
  meta: string[];
  info: string;
}

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