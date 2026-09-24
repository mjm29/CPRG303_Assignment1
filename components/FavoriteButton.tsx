import { useState } from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

export default function FavoriteButton() {

    const [favorited, setFavorited] = useState(false);

  return (  
    <Pressable style={styles.button} onPress={() => setFavorited(!favorited)} hitSlop={10}>
      {/*default state is no fill, if pressed change state to render red heart*/}
      <Text>{favorited ? '❤️' : '🤍'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 16,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});