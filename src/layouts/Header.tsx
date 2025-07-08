import { Colors } from '@/constants/Colors';
import { radii, spacing, typography } from '@/constants/tokens';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: radii.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.xs,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
    marginTop: spacing.xxl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radii.pill,
    backgroundColor: Colors.secondary,
    marginRight: spacing.md,
  },
  headerText: {
    flexDirection: 'column',
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    justifyContent: 'flex-end',
  },
  iconGlass: {
    width: 36,
    height: 36,
    borderRadius: radii.md,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  appName: {
    color: Colors.onBackground,
    fontSize: typography.fontSize.title,
    fontWeight: '700',
    fontFamily: typography.fontFamily,
  },
  subtitle: {
    color: Colors.onSurface,
    fontSize: typography.fontSize.body,
    fontWeight: '400',
    fontFamily: typography.fontFamily,
  },
});

const Header: React.FC = () => (
  <View style={styles.header}>
    <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
    <View style={styles.headerLeft}>
      <View style={styles.avatar} />
      <View style={styles.headerText}>
        <Text style={styles.appName}>StoryLingo</Text>
        <Text style={styles.subtitle}>Learn Through Stories</Text>
      </View>
    </View>
    <View style={styles.iconRow}>
      <View style={styles.iconGlass}>
        <BlurView intensity={30} tint="light" style={StyleSheet.absoluteFill} />
        <Ionicons name="notifications-outline" size={22} color={Colors.onSurface} />
      </View>
      <View style={[styles.iconGlass, { marginRight: 0 }]}>
        <BlurView intensity={30} tint="light" style={StyleSheet.absoluteFill} />
        <MaterialIcons name="settings" size={22} color={Colors.onSurface} />
      </View>
    </View>
  </View>
);

export default Header;
