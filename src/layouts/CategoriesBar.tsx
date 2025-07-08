import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const spacing = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 40 };
const radii = { none: 0, sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 };
const typography = {
  fontFamily: "Inter, 'Space Mono', Arial, sans-serif",
  fontWeight: { regular: '400', medium: '500', bold: '700' },
  fontSize: { display: 32, headline: 24, title: 20, subtitle: 16, body: 14, caption: 12 },
  lineHeight: { display: 40, headline: 32, title: 28, subtitle: 24, body: 20, caption: 16 }
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.xs,
  },
  tab: {
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
    paddingHorizontal: spacing.lg,
  },
  tabActive: {
    backgroundColor: Colors.primary,
  },
  tabInactive: {
    backgroundColor: 'transparent',
  },
  tabText: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.body,
    fontWeight: '500',
    fontFamily: typography.fontFamily,
  },
  tabTextActive: {
    color: Colors.onPrimary,
  },
});

interface CategoriesBarProps {
  TABS: string[];
  activeTab: number;
  setActiveTab: (idx: number) => void;
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({ TABS, activeTab, setActiveTab }) => (
  <View style={styles.tabBar}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }}>
      {TABS.map((tab, idx) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === idx ? styles.tabActive : styles.tabInactive,
            idx !== TABS.length - 1 && { marginRight: spacing.sm },
          ]}
          onPress={() => setActiveTab(idx)}
        >
          <Text style={[styles.tabText, activeTab === idx && styles.tabTextActive]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default CategoriesBar; 