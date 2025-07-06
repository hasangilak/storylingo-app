import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TAB_ICONS = [
  { name: 'home', label: 'Home', icon: (color: string) => <Ionicons name="home" size={24} color={color} /> },
  { name: 'ask', label: 'Ask', icon: (color: string) => <MaterialIcons name="menu-book" size={24} color={color} /> },
  { name: 'center', label: '', icon: null, isCenter: true },
  { name: 'practice', label: 'Practice', icon: (color: string) => <MaterialIcons name="translate" size={24} color={color} /> },
  { name: 'profile', label: 'Profile', icon: (color: string) => <Ionicons name="person" size={24} color={color} /> },
];

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
      {TAB_ICONS.map((tab, idx) => {
        if (tab.isCenter) {
          return (
            <View key="center" style={styles.centerButtonWrapper}>
              <TouchableOpacity
                style={styles.centerButton}
                onPress={() => navigation.navigate('practice')}
                activeOpacity={0.8}
              >
                <MaterialCommunityIcons name="headphones" size={32} color="#fff" />
              </TouchableOpacity>
            </View>
          );
        }
        // Map navigation state index to tab index, skipping the center button
        const navIndex = idx > 1 ? idx - 1 : idx;
        const route = state.routes[navIndex];
        const isFocused = state.index === navIndex;
        return (
          <TouchableOpacity
            key={tab.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            {tab.icon && tab.icon(isFocused ? '#a78bfa' : '#fff')}
            <Text style={[styles.tabLabel, isFocused && { color: '#a78bfa' }]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="ask" options={{ title: 'Ask' }} />
      <Tabs.Screen name="practice" options={{ title: 'Practice' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(30,41,59,0.7)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.10)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 8,
    height: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  centerButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -24,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#a78bfa',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#a78bfa',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
