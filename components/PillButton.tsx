import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { Pill } from '../types/pill';
import { SymbolView } from 'expo-symbols';
import Colors from '../constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

interface PillUI {
  pill: Pill;
  onPress?: () => void;
}

function PillButton ({ pill, onPress }: PillUI) {
  const colorScheme = useColorScheme();
  if(pill.showOverlayButton){
    return(
      <Pressable style={styles.pill}>
        <Text>
          {pill.icon}
          {pill.label}
          <Pressable style={{ marginRight: 15 }}>
            {({ pressed }) => (
              <SymbolView
                name={{ ios: 'chevron.down', android: 'stat_minus_1', web: 'stat_minus_1' }}
                size={14}
                tintColor={Colors[colorScheme].text}
                style={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Text>
      </Pressable>
    );
  } else {
    return(
      <Pressable style={styles.pill}>
        <Text>
          {pill.icon ? pill.icon : null}
          {pill.label}
        </Text>
      </Pressable> 
    ); 
  }
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    fontSize: 12,
    justifyContent: 'center',
    padding: 12,
  }
});

export default PillButton;

