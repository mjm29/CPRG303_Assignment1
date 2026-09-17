import { Text, View, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteButton from './FavoriteButton';
import { StoreCard } from '../types/card';
import RestaurantCard from './RestaurantCard';


interface CarouselUI {
  items: StoreCard[];
  sectionTitle: string;
}

function Carousel ({ items, sectionTitle }: CarouselUI) {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <ScrollView contentContainerStyle={styles.carousel} horizontal={true}>
        {items.map((store) => (
          <RestaurantCard key={store.id} card={store}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  sectionTitle: {
    fontSize: 32,
  },
  carousel: {
    gap: 8
  },
});

export default Carousel;