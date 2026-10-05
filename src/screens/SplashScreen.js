import { Image, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function SplashScreen({ navigation }) {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Welcome')}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 260, height: 120 },
});
