import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { Pill } from '../types/pill';

interface PillUI {
  pill: Pill;
  onPress: () => void;
}

