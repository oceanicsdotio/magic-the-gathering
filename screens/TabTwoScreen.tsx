import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bench</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="#eee" />
      <Text style={styles.content}>
        The bench is where cards not in active play live.
        This could be either unused trades, deck alternates, or investment items.
        
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content: {
    fontSize: 18,
    width: '80%'
  }
});
