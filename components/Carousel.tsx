import { Text, View, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteButton from './FavoriteButton';
import { StoreCard } from '../types/card';
import { Category } from '../types/category'
import RestaurantCard from './RestaurantCard';
import CategoryIcon from './CategoryIcon';
import { SymbolView } from 'expo-symbols';
import Colors from '../constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
interface CarouselUI {
  items: StoreCard[] | Category[];
  sectionTitle?: string;
}

function Carousel ({items, sectionTitle}: CarouselUI) {
  const colorScheme = useColorScheme();
    //for Carousel of cards
  if (items[0].type === 'card'){
    items = items as StoreCard[];
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.carouselHeader}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          <Pressable style={{ marginRight: 15 }}>
            {({ pressed }) => (
              <SymbolView
                name={{ ios: 'chevron.right', android: 'arrow_forward', web: 'arrow_forward' }}
                size={25}
                tintColor={Colors[colorScheme].text}
                style={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={styles.carousel} horizontal={true} showsHorizontalScrollIndicator={false}>
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
        <ScrollView contentContainerStyle={categoriesStyles.carousel} horizontal={true} showsHorizontalScrollIndicator={false}>
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
    marginHorizontal: 8,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 900,
  },
  carousel: {
    gap: 8
  },
  carouselHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const categoriesStyles = StyleSheet.create({
  container: {
    height: 140,
    marginHorizontal: 12,
  },
  carousel: {
    gap:12,
  }
});

export default Carousel;