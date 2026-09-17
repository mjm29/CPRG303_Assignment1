import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RestaurantCard from '@/components/RestaurantCard';
import Carousel from '@/components/Carousel';

const STORES = [
  { id: 1, name: 'Pizza Hut', imageURL: require('../../assets/images/pizza.jpg'), deliveryFee: 4.99, deliveryTime: '15 min.', rating: 4.1 },
  { id: 2, name: 'KFC', imageURL: require('../../assets/images/chicken.jpg'), promoText: 'Buy 1 Get 1', deliveryFee: 2.99, deliveryTime: '15 min.', rating: 4.4 },
  { id: 2, name: 'New York Fries', imageURL: require('../../assets/images/Fries.jpg'), promoText: '20% Off', deliveryFee: 3.99, deliveryTime: '10 min.', rating: 4.1 },
];

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>

          </View>
          <View style={styles.main}>
            <Carousel items={STORES} sectionTitle='Stores Near You'/>
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
    gap: 8,
  },
});
