import React, { memo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import FeaturedCard from '@/components/FeaturedCard/FeaturedCard';
import { Colors } from '@/constants/Colors';
import { radii, spacing } from '@/constants/tokens';
import CategoriesBar from '@/layouts/CategoriesBar';
import Header from '@/layouts/Header';
import RecentlyViewedSection from '@/layouts/RecentlyViewedSection';

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

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    padding: 0,
    paddingBottom: 80,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
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
    backgroundColor: Colors.primary,
  },
  tabInactive: {
    backgroundColor: 'transparent',
  },
});

const HomeComponent = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={viewStyles.container}
        contentContainerStyle={[viewStyles.contentContainer, { paddingBottom: 160 }]}
      >
        <Header />
        <CategoriesBar TABS={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
        {featuredCards.map((card) => (
          <FeaturedCard
            key={card.title}
            image={card.image}
            badge={card.badge}
            title={card.title}
            meta={card.meta}
            info={card.info}
          />
        ))}
        <RecentlyViewedSection />
      </ScrollView>
    </View>
  );
};

const Home = memo(HomeComponent);
export default Home;
