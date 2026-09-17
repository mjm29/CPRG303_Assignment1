import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RestaurantCard from '@/components/RestaurantCard';

const STORES = [
  { id: 1, name: 'Pizza Hut', imageURL: require('../../assets/images/pizza.jpg'), type: 'store', deliveryFee: 4.99, deliveryTime: '15 min.', rating: 4.1 },
] as const;

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>

          </View>
          <View style={styles.main}>
            <ScrollView style={styles.carousel} horizontal={true}>
              {STORES.map((store) => (
                <RestaurantCard key={store.id} card={store} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
