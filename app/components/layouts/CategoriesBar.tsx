import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface CategoriesBarProps {
  TABS: string[];
  activeTab: number;
  setActiveTab: (idx: number) => void;
  viewStyles: {
    tabBar: StyleProp<ViewStyle>;
    tab: StyleProp<ViewStyle>;
    tabActive: StyleProp<ViewStyle>;
    tabInactive: StyleProp<ViewStyle>;
  };
  textStyles: {
    tab: StyleProp<TextStyle>;
    tabActive: StyleProp<TextStyle>;
  };
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({ TABS, activeTab, setActiveTab, viewStyles, textStyles }) => (
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
);

export default CategoriesBar; 