import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RestaurantCard from '@/components/RestaurantCard';
import Carousel from '@/components/Carousel';
import Categories from '@/components/CategoryIcon';
import { Label } from 'expo-router';

const STORES = [
  { id: '1', name: 'Pizza Hut', imageURL: require('../../assets/images/pizza.jpg'),type: 'card', deliveryFee: 4.99, deliveryTime: '15 min.', rating: 4.1 },
  { id: '2', name: 'Burger King', imageURL: require('../../assets/images/burger.jpg'), type: 'card', deliveryFee: 2.99, deliveryTime: '17 min.', rating: 3.8 },
  { id: '3', name: 'KFC', imageURL: require('../../assets/images/chicken.jpg'), promoText: 'Buy 1 Get 1', type: 'card', deliveryFee: 2.99, deliveryTime: '15 min.', rating: 4.4 },
  { id: '4', name: 'New York Fries', imageURL: require('../../assets/images/Fries.jpg'), promoText: '20% Off', type: 'card', deliveryFee: 3.99, deliveryTime: '10 min.', rating: 4.1 },
];

const CATEGORIES = [
  { id:'1', icon: '🍕', title: 'Pizza', type: 'category'},
  { id:'2', icon: '🍣', title: 'Sushi', type: 'category'},
  { id:'3', icon: '🍲', title: 'Soup', type: 'category'},
  { id:'4', icon: '🥪', title: 'Sandwiches', type: 'category'},
  { id:'5', icon: '🧋', title: 'Bubble Tea', type: 'category'},
  { id:'6', icon: '🍜', title: 'Noodles', type: 'category'},
  { id:'7', icon: '🍗', title: 'Chicken', type: 'category'},
];

const PILLS = [
  { id:'1', icon: '🏷️', label: 'Offers', showOverlayButton: false, type: 'pill'},
  { id:'2', label: 'Delivery fee', showOverlayButton: true, type: 'pill'},
  { id:'3', label: 'Under 30 min', showOverlayButton: false, type: 'pill'},
  { id:'4', icon: '🏅', label: 'Best overall', showOverlayButton: false, type: 'pill'},
  { id:'5', icon: '⭐', label: 'Rating', showOverlayButton: true, type: 'pill'},
  { id:'6', label: 'Price', showOverlayButton: true, type: 'pill'},
  { id:'7', icon: '💵', label: 'Cash Accepted', showOverlayButton: false, type: 'pill'},
  { id:'8', label: 'Sort', showOverlayButton: true, type: 'pill'},
];

const HEADER = [
  { id:'1', icon: '🛍️', label: 'All', showOverlayButton: false, type: 'pill'},
  { id:'2', icon: '🚗', label: 'Rides', showOverlayButton: false, type: 'pill'},
  { id:'3', icon: '🍌', label: 'Grocery', showOverlayButton: false, type: 'pill'},
  { id:'4', icon: '🥤', label: 'Convenience', showOverlayButton: false, type: 'pill' }
];

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Carousel items={HEADER}/>
          </View>
          <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
            <Carousel items={CATEGORIES} />
            <Carousel items={PILLS}/>
            <Text>Delivery Fees & Service Fees are charged for delivery orders in addition to item prices</Text>
            <Text style={styles.underlined}>Learn More</Text>
            <Carousel items={STORES} sectionTitle='Featured on Uber Eats'/>
            <Carousel items={STORES} sectionTitle='Most Reviewed'/>
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
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    justifyContent: 'center',
    marginTop: 12,
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
    marginBottom: 12,
  }
});
