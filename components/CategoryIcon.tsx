import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { Category } from '../types/category';

interface CategoryUI {
  category: Category;
  onPress?: () => void;
}

function CategoryIcon({ category, onPress}: CategoryUI) {
  return(
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.icon}>{category.icon}</Text>
        <Text>{category.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    gap:4,
  },
  icon: {
    fontSize: 48,
  },

});

export default CategoryIcon;