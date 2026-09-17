import { useState } from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

export default function FavoriteButton() {

    const [favorited, setFavorited] = useState(false);

  return (  
    <Pressable style={styles.button} onPress={() => setFavorited(!favorited)} hitSlop={10}>
      <Text>{favorited ? '❤️' : '🤍'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
});