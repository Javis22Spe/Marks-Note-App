import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Powered by: Marks Spencer © 2025.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#D1D5DB',
  },
});
