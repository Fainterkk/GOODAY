import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} hitSlop={12}>
      <Image source={require('../assets/left-arrow.png')} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { alignSelf: 'flex-start', paddingVertical: 8 },
  icon: { width: 18, height: 18, tintColor: colors.primary, resizeMode: 'contain' },
});
