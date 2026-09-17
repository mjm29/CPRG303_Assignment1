import { Text, View, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import FavoriteButton from './FavoriteButton';
import { StoreCard } from '../types/card';
import RestaurantCard from './RestaurantCard';


interface CarouselUI {
  items: StoreCard[];
  sectionTitle: string;
}

function Carousel ({ items, sectionTitle }: CarouselUI) {
  return(
    <View>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <ScrollView contentContainerStyle={styles.carousel} horizontal={true}>
        {items.map((store) => (
          <RestaurantCard key={store.id} card={store}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 32,
  },
  carousel: {
    gap: 8
  },
});

export default Carousel;