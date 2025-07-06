import FeaturedCard from "@/components/FeaturedCard";
import { Colors } from "@/constants/Colors";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CategoriesBar from "./layouts/CategoriesBar";
import Header from "./layouts/Header";
import RecentlyViewedSection from "./layouts/RecentlyViewedSection";

const spacing = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 };
const radii = { none: 0, sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 };
const typography = {
  fontFamily: "Inter, 'Space Mono', Arial, sans-serif",
  fontWeight: { regular: "400", medium: "500", bold: "700" },
  fontSize: {
    display: 32,
    headline: 24,
    title: 20,
    subtitle: 16,
    body: 14,
    caption: 12,
  },
  lineHeight: {
    display: 40,
    headline: 32,
    title: 28,
    subtitle: 24,
    body: 20,
    caption: 16,
  },
};

const TABS = ["Novels", "Stories", "Dialogues", "Vocal"];
const featuredCards = [
  {
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "The Alchemist",
    meta: ["Novel Summary", "Intermediate"],
    info: "15 min audio · English - Spanish",
  },
  {
    badge: "Audio",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    title: "Coffee Shop Conversations",
    meta: ["Daily Dialogue", "Beginner"],
    info: "10 min read · New",
  },
  {
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    title: "The Secret Library",
    meta: ["Mystery", "Advanced"],
    info: "20 min read · 30% complete",
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radii.pill,
    backgroundColor: Colors.secondary,
    marginRight: spacing.md,
  },
  headerText: {
    flexDirection: "column",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.xs,
    gap: spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
  },
  tabActive: {
    backgroundColor: Colors.primary,
  },
  tabInactive: {
    backgroundColor: "transparent",
  },
  featuredCard: {
    backgroundColor: Colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    overflow: "hidden",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 2,
  },
  featuredImage: {
    width: "100%",
    height: 160,
  },
  badge: {
    position: "absolute",
    top: spacing.md,
    left: spacing.md,
    backgroundColor: Colors.primary,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    zIndex: 2,
  },
  cardContent: {
    padding: spacing.lg,
  },
  metaRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
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
    flexDirection: "row",
    gap: spacing.md,
  },
  recentlyViewedCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: radii.md,
    overflow: "hidden",
    marginRight: spacing.md,
  },
  recentlyViewedImage: {
    width: "100%",
    height: 80,
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    backgroundColor: Colors.surface,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navCenter: {
    backgroundColor: Colors.primary,
    borderRadius: radii.pill,
    padding: spacing.sm,
    marginTop: -spacing.md,
  },
});

const textStyles = StyleSheet.create({
  appName: {
    color: Colors.onBackground,
    fontSize: typography.fontSize.title,
    fontWeight: "700",
    fontFamily: typography.fontFamily,
  },
  subtitle: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.body,
    fontWeight: "400",
    fontFamily: typography.fontFamily,
  },
  tab: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.body,
    fontWeight: "500",
    fontFamily: typography.fontFamily,
  },
  tabActive: {
    color: Colors.onPrimary,
  },
  badge: {
    color: Colors.onPrimary,
    fontSize: typography.fontSize.caption,
    fontWeight: "500",
    fontFamily: typography.fontFamily,
  },
  cardTitle: {
    color: Colors.onBackground,
    fontSize: typography.fontSize.headline,
    fontWeight: "700",
    fontFamily: typography.fontFamily,
    marginBottom: spacing.sm,
  },
  meta: {
    color: Colors.primary,
    fontSize: typography.fontSize.caption,
    fontWeight: "500",
    fontFamily: typography.fontFamily,
    backgroundColor: "rgba(59,130,246,0.08)",
    borderRadius: radii.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  info: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.caption,
    fontWeight: "400",
    fontFamily: typography.fontFamily,
  },
  recentlyViewedTitle: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.subtitle,
    fontWeight: "500",
    fontFamily: typography.fontFamily,
  },
  recentlyViewedCardTitle: {
    color: Colors.onBackground,
    fontSize: typography.fontSize.body,
    fontWeight: "500",
    fontFamily: typography.fontFamily,
    marginTop: spacing.xs,
  },
  recentlyViewedProgress: {
    color: Colors.primary,
    fontSize: typography.fontSize.caption,
    fontWeight: "400",
    fontFamily: typography.fontFamily,
  },
  navLabel: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.caption,
    fontWeight: "500",
    fontFamily: typography.fontFamily,
    marginTop: spacing.xs,
  },
  navLabelActive: {
    color: Colors.primary,
  },
});

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={viewStyles.container}
        contentContainerStyle={viewStyles.contentContainer}
      >
        <Header />
        <CategoriesBar
          TABS={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {featuredCards.map((card) => (
          <FeaturedCard
            key={card.title}
            image={card.image}
            badge={card.badge}
            title={card.title}
            meta={card.meta}
            info={card.info}
            viewStyles={viewStyles}
            textStyles={textStyles}
          />
        ))}
        <RecentlyViewedSection />
      </ScrollView>
    </View>
  );
}
