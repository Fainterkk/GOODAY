import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import BackButton from '../components/BackButton';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SocialButtons from '../components/SocialButtons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Acesse</Text>
        <Text style={styles.subtitle}>com E-mail e senha</Text>

        <View style={styles.form}>
          <EmailInput value={email} onChangeText={setEmail} />
          <PasswordInput label="Senha" value={password} onChangeText={setPassword} />
        </View>

        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.remember} onPress={() => setRemember(!remember)}>
            <View style={[styles.checkbox, remember && styles.checkboxOn]} />
            <Text style={styles.optionText}>Lembrar senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.filled]}>
            <Text style={styles.filledText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.outline]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.outlineText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

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
  optionsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 },
  remember: { flexDirection: 'row', alignItems: 'center' },
  checkbox: { width: 22, height: 22, borderRadius: 3, borderWidth: 1, borderColor: colors.primary, backgroundColor: colors.white, marginRight: 10 },
  checkboxOn: { backgroundColor: colors.primary },
  optionText: { fontSize: 13, color: colors.text },
  buttons: { flexDirection: 'row', marginTop: 28 },
  button: { flex: 1, height: 62, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  filled: { backgroundColor: colors.primary, marginRight: 8 },
  outline: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.primary, marginLeft: 8 },
  filledText: { color: colors.white, fontSize: 14 },
  outlineText: { color: colors.text, fontSize: 14 },
});
