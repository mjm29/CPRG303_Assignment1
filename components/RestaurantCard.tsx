import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import FavoriteButton from './FavoriteButton';
import { RestaurantCard } from '../types/card';

interface CardUI {
  card: RestaurantCard;
  onPress?: () => void;
}

function RestaurantCard ({ card, onPress }: CardUI) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: card.imageURL}} style={styles.cardImage}/>
      {card.promoText ? (
        <View style={styles.promoBadge}>
          <Text style={styles.promoText}>{card.promoText}</Text>
        </View>
      ) : null}
      <View style={styles.details}>
        <View>
          <Text>{card.name}</Text>
          <FavoriteButton/>
        </View>
        <Text>${card.deliveryFee}・{card.deliveryTime}</Text>
        <Text>{card.rating} ⭐</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  cardImage: {

  },
  details: {

  },
  promoBadge: {

  },
  promoText: {
    
  },

});

export default RestaurantCard;