import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RestaurantCard from '@/components/RestaurantCard';
import Carousel from '@/components/Carousel';
import Categories from '@/components/CategoryIcon';

const STORES = [
  { id: 1, name: 'Pizza Hut', imageURL: require('../../assets/images/pizza.jpg'),type: 'card', deliveryFee: 4.99, deliveryTime: '15 min.', rating: 4.1 },
  { id: 2, name: 'Burger King', imageURL: require('../../assets/images/burger.jpg'), type: 'card', deliveryFee: 2.99, deliveryTime: '17 min.', rating: 3.8 },
  { id: 3, name: 'KFC', imageURL: require('../../assets/images/chicken.jpg'), promoText: 'Buy 1 Get 1', type: 'card', deliveryFee: 2.99, deliveryTime: '15 min.', rating: 4.4 },
  { id: 4, name: 'New York Fries', imageURL: require('../../assets/images/Fries.jpg'), promoText: '20% Off', type: 'card', deliveryFee: 3.99, deliveryTime: '10 min.', rating: 4.1 },
];

const CATEGORIES = [
  { icon: '🍕', title: 'Pizza', type: 'category'},
  { icon: '🍣', title: 'Sushi', type: 'category'},
  { icon: '🍲', title: 'Soup', type: 'category'},
  { icon: '🥪', title: 'Sandwiches', type: 'category'},
  { icon: '🧋', title: 'Bubble Tea', type: 'category'},
  { icon: '🍜', title: 'Noodles', type: 'category'},
  { icon: '🍗', title: 'Chicken', type: 'category'},
];

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>

          </View>
          <ScrollView style={styles.main}>
            <Carousel items={CATEGORIES} />
            <Text>Delivery Fees & Service Fees are charged for delivery orders in addition to item prices</Text>
            <Text style={styles.underlined}>Learn More</Text>
            <Carousel items={STORES} sectionTitle='Stores Near You'/>
            <Carousel items={STORES} sectionTitle='Popular Stores'/>
            <Carousel items={STORES} sectionTitle='New Stores'/>
          </ScrollView>
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
  header: {

  },
  main: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 8,
  },
  carousel: {
    gap: 8,
  },
  underlined: {
    textDecorationLine: 'underline',
  }
});
