import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ResultPerfil() {
  const router = useRouter();
  const { nome, curso, disciplina, descricao } = useLocalSearchParams();

  return (
    <View style={styles.perfilOverlay}>
      <View style={styles.perfilContent}>
        <View style={styles.perfilHeader}>
          <Text style={styles.perfilTitle}>Concluído!</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.perfilBody}>
          <Image
            style={styles.perfilImage}
            source={require('../assets/github_background.jpg')}
          />
          <Text style={styles.perfilMessage}>Cadastro finalizado com sucesso.</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}><Text style={styles.bold}>Nome: </Text>{nome}</Text>
            <Text style={styles.infoText}><Text style={styles.bold}>Curso: </Text>{curso}</Text>
            <Text style={styles.infoText}><Text style={styles.bold}>Disciplina: </Text>{disciplina}</Text>
            <Text style={styles.infoText}><Text style={styles.bold}>Descrição: </Text>{descricao}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  perfilOverlay: { flex: 1, backgroundColor: '#0d1117', justifyContent: 'center', alignItems: 'center', padding: 20 },
  perfilContent: { width: '100%', backgroundColor: '#161b22', borderRadius: 12, borderWidth: 1, borderColor: '#30363d', overflow: 'hidden' },
  perfilHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#21262d' },
  perfilTitle: { color: '#c9d1d9', fontWeight: '600' },
  closeIcon: { color: '#8b949e', fontSize: 18 },
  perfilImage: { height: 120, width: '100%', marginBottom: 16 },
  perfilBody: { padding: 20 },
  perfilMessage: { color: '#7ee787', marginBottom: 16 },
  infoBox: { backgroundColor: '#0d1117', padding: 12, borderRadius: 6, borderWidth: 1, borderColor: '#30363d' },
  infoText: { color: '#8b949e', marginBottom: 4 },
  bold: { color: '#c9d1d9', fontWeight: 'bold' },
  closeButton: { margin: 16, backgroundColor: '#30363d', paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  closeButtonText: { color: '#c9d1d9', fontWeight: '600' }
});