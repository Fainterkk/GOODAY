import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function PasswordInput({ label, value, onChangeText }) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={colors.placeholder}
          secureTextEntry={!visible}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text style={styles.eye}>{visible ? '🙈' : '👁'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: { marginTop: 18 },
  label: { fontSize: 12, color: colors.text, marginBottom: 6 },
  field: {
    height: 66, backgroundColor: colors.input, borderRadius: 4,
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12,
  },
  input: { flex: 1, fontSize: 14, color: colors.text },
  eye: { fontSize: 20 },
});
