import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import FavoriteButton from './FavoriteButton';
import { StoreCard } from '../types/card';

interface CardUI {
  card: StoreCard;
  onPress?: () => void;
}

function RestaurantCard ({ card, onPress }: CardUI) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={card.imageURL} style={styles.cardImage} resizeMode='cover'/>
        {card.promoText ? (
          <View style={styles.promoBadge}>
            <Text style={styles.promoText}>{card.promoText}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.details}>
        <View style={styles.detailHeader}>
          <Text>{card.name}</Text>
          <FavoriteButton/>
        </View>
        <Text style={styles.subtext}>${card.deliveryFee}・{card.deliveryTime}</Text>
        <Text style={styles.ratingText}>{card.rating} ⭐</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginBottom: 20,
  },
  imageContainer: {
    height: 160,
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#F3F4F6'
  },
  cardImage: {
    width: '100%',
    height: '100%'
  },
  details: {
    marginTop: 8
  },
  detailHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  promoBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#E11D48',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10
  },
  promoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  subtext: {
    fontSize: 13,
    color: '#545454',
    marginTop: 2,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    marginTop: 4,
  }

});

export default RestaurantCard;