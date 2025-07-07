
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import RecentlyViewedCard from '@/components/RecentlyViewedCard/RecentlyViewedCard';
import { Colors } from '@/constants/Colors';

const spacing = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 };
const radii = { none: 0, sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 };
const typography = {
  fontFamily: "Inter, 'Space Mono', Arial, sans-serif",
  fontWeight: { regular: '400', medium: '500', bold: '700' },
  fontSize: { display: 32, headline: 24, title: 20, subtitle: 16, body: 14, caption: 12 },
  lineHeight: { display: 40, headline: 32, title: 28, subtitle: 24, body: 20, caption: 16 }
};

const recentlyViewed = [
  {
    image: 'https://images.unsplash.com/photo-1462007895615-c8c073bebcd8',
    title: 'Night in the City',
    progress: '70% complete',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Summer Memories',
    progress: '45% complete',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de',
    title: 'Romans Empire',
    progress: '35% complete',
  },
  {
    image: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe',
    title: 'Coffee Shop Conversations',
    progress: '10% complete',
  },
];

const styles = StyleSheet.create({
  recentlyViewedSection: {
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
  },
  recentlyViewedTitle: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.subtitle,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
    marginBottom: spacing.md,
  },
  recentlyViewedRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  recentlyViewedCard: {
    width: 180,
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: radii.md,
    overflow: 'hidden',
    marginRight: spacing.md,
  },
  recentlyViewedImage: {
    width: '100%',
    height: 120,
  },
  recentlyViewedCardTitle: {
    color: Colors.onBackground,
    fontSize: typography.fontSize.body,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
    marginTop: spacing.xs,
  },
  recentlyViewedProgress: {
    color: Colors.primary,
    fontSize: typography.fontSize.caption,
    fontWeight: '400',
    fontFamily: typography.fontFamily,
  },
});

const RecentlyViewedSection: React.FC = () => (
  <View style={styles.recentlyViewedSection}>
    <Text style={styles.recentlyViewedTitle}>Recently Viewed</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentlyViewedRow}>
      {recentlyViewed.map((item) => (
        <RecentlyViewedCard
          key={item.title}
          image={item.image}
          title={item.title}
          progress={item.progress}
          viewStyles={{
            recentlyViewedCard: styles.recentlyViewedCard,
            recentlyViewedImage: styles.recentlyViewedImage,
          }}
          textStyles={{
            recentlyViewedCardTitle: styles.recentlyViewedCardTitle,
            recentlyViewedProgress: styles.recentlyViewedProgress,
          }}
        />
      ))}
    </ScrollView>
  </View>
);

export default RecentlyViewedSection; 