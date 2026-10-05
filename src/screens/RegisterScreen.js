import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import BackButton from '../components/BackButton';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SocialButtons from '../components/SocialButtons';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.subtitle}>Informe seu E-mail e crie uma senha</Text>

        <View style={styles.form}>
          <EmailInput value={email} onChangeText={setEmail} />
          <PasswordInput label="Crie uma senha" value={password} onChangeText={setPassword} />
          <PasswordInput label="Repita a senha" value={confirm} onChangeText={setConfirm} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <SocialButtons />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 28, paddingBottom: 40 },
  title: { fontSize: 38, fontWeight: '600', color: colors.title, marginTop: 24 },
  subtitle: { fontSize: 13, color: colors.text, marginTop: 4, marginLeft: 2 },
  form: { marginTop: 28 },
  button: { height: 62, marginTop: 70, borderRadius: 4, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.white, fontSize: 14 },
});
