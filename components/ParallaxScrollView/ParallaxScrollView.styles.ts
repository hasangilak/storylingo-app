import { StyleSheet } from "react-native";

const HEADER_HEIGHT = 300;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: HEADER_HEIGHT,
      overflow: 'hidden',
    },
    content: {
      flex: 1,
      padding: 32,
      gap: 16,
      overflow: 'hidden',
    },
  });
  