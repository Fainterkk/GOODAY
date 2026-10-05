import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image source={require('../assets/casual_dog.png')} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
          <View style={styles.googleIconBox}>
            <Image source={require('../assets/google.png')} style={styles.googleIcon} />
          </View>
          <Text style={styles.primaryText}>Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.outlineText}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 28 },
  hero: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 280 },
  title: { fontSize: 38, color: colors.title, textAlign: 'center', fontWeight: '500', marginTop: 12 },
  subtitle: { fontSize: 14, color: colors.text, textAlign: 'center', fontWeight: '600', marginTop: 14 },
  actions: { marginTop: 40, marginBottom: 60 },
  googleButton: {
    height: 62, backgroundColor: colors.primary, borderRadius: 6,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  googleIconBox: {
    position: 'absolute', left: 14, width: 36, height: 36, borderRadius: 4,
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center',
  },
  googleIcon: { width: 22, height: 22 },
  primaryText: { color: colors.white, fontSize: 14 },
  outlineButton: {
    height: 62, marginTop: 15, borderRadius: 6, borderWidth: 1, borderColor: colors.primary,
    backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center',
  },
  outlineText: { color: colors.text, fontSize: 14 },
});
