export interface Card {
  name: string,
  imageURL: string;
  promoText?: string;
}

//for restaurant cards
export interface RestaurantCard extends Card {
  type: 'store';
  deliveryTime: string;
  deliveryFee: number;
  rating: number;
}

//for individual items on display like grocery items
export interface ItemCard extends Card {
  type: 'item';
  price: string;
  unitSize?: string;
}
