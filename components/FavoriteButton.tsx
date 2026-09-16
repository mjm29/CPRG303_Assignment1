import { useState } from "react";

const [favorited, setFavorited] = useState(false);

function handleFavorite() {
  setFavorited(true);
}

export default function FavoriteButton() {
  
}