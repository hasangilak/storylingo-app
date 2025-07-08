import { Colors } from '@/constants/Colors';
import { radii, spacing, typography } from '@/constants/tokens';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexDirection: 'row' }}
    >
      {TABS.map((tab, idx) => (
        <TouchableOpacity
          key={tab}
          accessibilityRole="button"
          accessibilityState={{ selected: activeTab === idx }}
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
