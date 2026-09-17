import { ImageSourcePropType } from "react-native";

export interface Card {
  id: number,
  name: string,
  imageURL: ImageSourcePropType;
  promoText?: string;
}

//for restaurant cards
export interface StoreCard extends Card {
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
