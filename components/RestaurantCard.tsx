import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import FavoriteButton from './FavoriteButton';
import { RestaurantCard } from '../types/card';

interface CardUI {
  card: RestaurantCard;
  onPress?: () => void;
}

function RestaurantCard ({ card, onPress }: CardUI) {
  return (
    <Pressable>
      <Image source={{ uri: card.imageURL}} style={styles.card}/>
      <View style={styles.details}>
        <Text>{card.name}</Text>
        <Text>${card.deliveryFee}・{card.deliveryTime}</Text>
        <Text>{card.rating} ⭐</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  card: {

  },
  details: {

  },

});

export default RestaurantCard;