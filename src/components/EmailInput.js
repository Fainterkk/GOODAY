import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function EmailInput({ value, onChangeText }) {
  return (
    <View>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        placeholderTextColor={colors.placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 12, color: colors.text, marginBottom: 6 },
  input: {
    height: 66, backgroundColor: colors.input, borderRadius: 4,
    paddingHorizontal: 12, fontSize: 14, color: colors.text,
  },
});
