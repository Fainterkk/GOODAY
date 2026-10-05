import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function SocialButtons() {
  return (
    <View>
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Ou continue com</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: { flexDirection: 'row', alignItems: 'center', marginTop: 40, paddingHorizontal: 20 },
  line: { flex: 1, height: 1, backgroundColor: colors.line },
  dividerText: { marginHorizontal: 8, fontSize: 13, color: colors.text },
  row: { flexDirection: 'row', justifyContent: 'center', marginTop: 28 },
  box: {
    width: 80, height: 80, marginHorizontal: 14, borderRadius: 4,
    backgroundColor: '#EEEEEE', alignItems: 'center', justifyContent: 'center',
  },
  icon: { width: 56, height: 56, resizeMode: 'contain' },
});
