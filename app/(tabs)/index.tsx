import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import RestaurantCard from '@/components/RestaurantCard';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.main}>
        <ScrollView style={styles.carousel} horizontal={true}>
          <></>
        </ScrollView>
      </View>
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
  header: {

  },
  main: {

  },
  carousel: {

  },
});
