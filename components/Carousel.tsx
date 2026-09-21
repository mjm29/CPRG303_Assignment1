import { Text, View, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteButton from './FavoriteButton';
import { StoreCard } from '../types/card';
import { Category } from '../types/category'
import RestaurantCard from './RestaurantCard';
import CategoryIcon from './CategoryIcon';

interface CarouselUI {
  items: StoreCard[] | Category[];
  sectionTitle?: string;
}

function Carousel ({items, sectionTitle}: CarouselUI) {
    //for Carousel of cards
  if (items[0].type === 'card'){
    items = items as StoreCard[];
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
  } else {
    items = items as Category[]
    return(
      <SafeAreaView style={categoriesStyles.container}>
        <ScrollView contentContainerStyle={categoriesStyles.carousel} horizontal={true}>
          {items.map((ctgry) => (
            <CategoryIcon category={ctgry}/>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
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

const categoriesStyles = StyleSheet.create({
  container: {
    height: 140,
  },
  carousel: {
    gap:12,
  }
});

export default Carousel;