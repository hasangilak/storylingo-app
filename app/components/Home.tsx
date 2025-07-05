import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Design tokens (import or copy from designs/design.json)
const colors = {
  primary: '#3B82F6',
  primaryVariant: '#2563EB',
  secondary: '#F59E42',
  secondaryVariant: '#FBBF24',
  background: '#181A20', // dark background
  surface: '#23262F',    // card background
  error: '#EF4444',
  onPrimary: '#FFFFFF',
  onSecondary: '#1F2937',
  onBackground: '#FFFFFF',
  onSurface: '#E5E7EB',
  onError: '#FFFFFF',
  border: '#353945',
  shadow: 'rgba(0,0,0,0.16)'
};
const spacing = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 };
const radii = { none: 0, sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 };
const typography = {
  fontFamily: "Inter, 'Space Mono', Arial, sans-serif",
  fontWeight: { regular: '400', medium: '500', bold: '700' },
  fontSize: { display: 32, headline: 24, title: 20, subtitle: 16, body: 14, caption: 12 },
  lineHeight: { display: 40, headline: 32, title: 28, subtitle: 24, body: 20, caption: 16 }
};

const TABS = ['Novels', 'Stories', 'Dialogues', 'Vocal'];
const featuredCards = [
  {
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'The Alchemist',
    meta: ['Novel Summary', 'Intermediate'],
    info: '15 min audio · English - Spanish',
  },
  {
    badge: 'Audio',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    title: 'Coffee Shop Conversations',
    meta: ['Daily Dialogue', 'Beginner'],
    info: '10 min read · New',
  },
  {
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    title: 'The Secret Library',
    meta: ['Mystery', 'Advanced'],
    info: '20 min read · 30% complete',
  },
];
const recentlyViewed = [
  {
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    title: 'Night in the City',
    progress: '70% complete',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Summer Memories',
    progress: '45% complete',
  },
];

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 0,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radii.pill,
    backgroundColor: colors.secondary,
    marginRight: spacing.md,
  },
  headerText: {
    flexDirection: 'column',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.xs,
    gap: spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabInactive: {
    backgroundColor: 'transparent',
  },
  featuredCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 2,
  },
  featuredImage: {
    width: '100%',
    height: 160,
  },
  badge: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    zIndex: 2,
  },
  cardContent: {
    padding: spacing.lg,
  },
  metaRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  recentlyViewedSection: {
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
  },
  recentlyViewedTitle: {
    marginBottom: spacing.md,
  },
  recentlyViewedRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  recentlyViewedCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    overflow: 'hidden',
    marginRight: spacing.md,
  },
  recentlyViewedImage: {
    width: '100%',
    height: 80,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navCenter: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    padding: spacing.sm,
    marginTop: -spacing.md,
  },
});

const textStyles = StyleSheet.create({
  appName: {
    color: colors.onBackground,
    fontSize: typography.fontSize.title,
    fontWeight: '700',
    fontFamily: typography.fontFamily,
  },
  subtitle: {
    color: colors.onSurface,
    fontSize: typography.fontSize.body,
    fontWeight: '400',
    fontFamily: typography.fontFamily,
  },
  tab: {
    color: colors.onSurface,
    fontSize: typography.fontSize.body,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
  },
  tabActive: {
    color: colors.onPrimary,
  },
  badge: {
    color: colors.onPrimary,
    fontSize: typography.fontSize.caption,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
  },
  cardTitle: {
    color: colors.onBackground,
    fontSize: typography.fontSize.headline,
    fontWeight: '700',
    fontFamily: typography.fontFamily,
    marginBottom: spacing.sm,
  },
  meta: {
    color: colors.primary,
    fontSize: typography.fontSize.caption,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
    backgroundColor: 'rgba(59,130,246,0.08)',
    borderRadius: radii.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  info: {
    color: colors.onSurface,
    fontSize: typography.fontSize.caption,
    fontWeight: '400',
    fontFamily: typography.fontFamily,
  },
  recentlyViewedTitle: {
    color: colors.onSurface,
    fontSize: typography.fontSize.subtitle,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
  },
  recentlyViewedCardTitle: {
    color: colors.onBackground,
    fontSize: typography.fontSize.body,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
    marginTop: spacing.xs,
  },
  recentlyViewedProgress: {
    color: colors.primary,
    fontSize: typography.fontSize.caption,
    fontWeight: '400',
    fontFamily: typography.fontFamily,
  },
  navLabel: {
    color: colors.onSurface,
    fontSize: typography.fontSize.caption,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
    marginTop: spacing.xs,
  },
  navLabelActive: {
    color: colors.primary,
  },
});

const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    fontSize: typography.fontSize.body,
    color: colors.onSurface,
    fontFamily: typography.fontFamily,
  },
});

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={viewStyles.container} contentContainerStyle={viewStyles.contentContainer}>
        {/* Header */}
        <View style={viewStyles.header}>
          <View style={viewStyles.headerLeft}>
            <View style={viewStyles.avatar} />
            <View style={viewStyles.headerText}>
              <Text style={textStyles.appName}>StoryLingo</Text>
              <Text style={textStyles.subtitle}>Learn Through Stories</Text>
            </View>
          </View>
          <View style={viewStyles.iconRow}>
            {/* Placeholder icons */}
            <View style={{ width: 28, height: 28, backgroundColor: colors.surface, borderRadius: 8, marginRight: spacing.sm }} />
            <View style={{ width: 28, height: 28, backgroundColor: colors.surface, borderRadius: 8 }} />
          </View>
        </View>
        {/* Tab Bar */}
        <View style={viewStyles.tabBar}>
          {TABS.map((tab, idx) => (
            <TouchableOpacity
              key={tab}
              style={[viewStyles.tab, activeTab === idx ? viewStyles.tabActive : viewStyles.tabInactive]}
              onPress={() => setActiveTab(idx)}
            >
              <Text style={[textStyles.tab, activeTab === idx && textStyles.tabActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Featured Cards */}
        {featuredCards.map((card, idx) => (
          <View key={card.title} style={viewStyles.featuredCard}>
            <Image source={{ uri: card.image }} style={viewStyles.featuredImage} />
            <View style={viewStyles.badge}>
              <Text style={textStyles.badge}>{card.badge}</Text>
            </View>
            <View style={viewStyles.cardContent}>
              <Text style={textStyles.cardTitle}>{card.title}</Text>
              <View style={viewStyles.metaRow}>
                {card.meta.map((m) => (
                  <Text key={m} style={textStyles.meta}>{m}</Text>
                ))}
              </View>
              <Text style={textStyles.info}>{card.info}</Text>
            </View>
          </View>
        ))}
        {/* Recently Viewed */}
        <View style={viewStyles.recentlyViewedSection}>
          <Text style={[textStyles.recentlyViewedTitle, viewStyles.recentlyViewedTitle]}>Recently Viewed</Text>
          <View style={viewStyles.recentlyViewedRow}>
            {recentlyViewed.map((item) => (
              <View key={item.title} style={viewStyles.recentlyViewedCard}>
                <Image source={{ uri: item.image }} style={viewStyles.recentlyViewedImage} />
                <Text style={textStyles.recentlyViewedCardTitle}>{item.title}</Text>
                <Text style={textStyles.recentlyViewedProgress}>{item.progress}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={viewStyles.bottomNav}>
        <View style={viewStyles.navItem}>
          <View style={{ width: 24, height: 24, backgroundColor: colors.onSurface, borderRadius: 6 }} />
          <Text style={textStyles.navLabel}>Home</Text>
        </View>
        <View style={viewStyles.navItem}>
          <View style={{ width: 24, height: 24, backgroundColor: colors.onSurface, borderRadius: 6 }} />
          <Text style={textStyles.navLabel}>Ask</Text>
        </View>
        <View style={[viewStyles.navItem, viewStyles.navCenter]}>
          <View style={{ width: 32, height: 32, backgroundColor: colors.onPrimary, borderRadius: 16 }} />
        </View>
        <View style={viewStyles.navItem}>
          <View style={{ width: 24, height: 24, backgroundColor: colors.onSurface, borderRadius: 6 }} />
          <Text style={textStyles.navLabel}>Practice</Text>
        </View>
        <View style={viewStyles.navItem}>
          <View style={{ width: 24, height: 24, backgroundColor: colors.onSurface, borderRadius: 6 }} />
          <Text style={textStyles.navLabel}>Profile</Text>
        </View>
      </View>
    </View>
  );
} 