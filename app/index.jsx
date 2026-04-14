import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const router = useRouter();
  const [formNome, setFormNome] = useState('');
  const [formCurso, setFormCurso] = useState('');
  const [formDisciplina, setFormDisciplina] = useState('');
  const [formDescricao, setFormDescricao] = useState('');

  const handleSumbit = () => {
    // Navigate to perfil and pass data as query params
    router.push({
      pathname: '/perfil',
      params: { 
        nome: formNome, 
        curso: formCurso, 
        disciplina: formDisciplina, 
        descricao: formDescricao 
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastrar Perfil</Text>
          <Text style={styles.subtitle}>Preencha os campos abaixo.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} value={formNome} onChangeText={setFormNome} placeholder="Seu Nome" placeholderTextColor="#484f58" />
            
            <Text style={styles.label}>Curso</Text>
            <TextInput style={styles.input} value={formCurso} onChangeText={setFormCurso} placeholder="Curso" placeholderTextColor="#484f58" />
            
            <Text style={styles.label}>Disciplina</Text>
            <TextInput style={styles.input} value={formDisciplina} onChangeText={setFormDisciplina} placeholder="Disciplina" placeholderTextColor="#484f58" />
            
            <Text style={styles.label}>Descrição</Text>
            <TextInput style={[styles.input, styles.textArea]} value={formDescricao} onChangeText={setFormDescricao} multiline placeholder="Sobre você..." placeholderTextColor="#484f58" />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSumbit}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Keep your existing styles.container, styles.formContainer, etc. here
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  formContainer: { padding: 24, alignItems: 'center' },
  header: { width: '100%', marginBottom: 24, borderBottomWidth: 1, borderBottomColor: '#30363d', paddingBottom: 8 },
  title: { fontSize: 24, fontWeight: '600', color: '#c9d1d9' },
  subtitle: { fontSize: 14, color: '#8b949e', marginTop: 4 },
  card: { width: '100%', backgroundColor: '#161b22', borderRadius: 6, borderWidth: 1, borderColor: '#30363d', padding: 16 },
  label: { color: '#c9d1d9', fontSize: 14, fontWeight: '500', marginBottom: 8, marginTop: 12 },
  input: { backgroundColor: '#0d1117', borderWidth: 1, borderColor: '#30363d', borderRadius: 6, padding: 10, color: '#c9d1d9' },
  textArea: { height: 80, textAlignVertical: 'top' },
  submitButton: { backgroundColor: '#238636', borderRadius: 6, paddingVertical: 12, alignItems: 'center', marginTop: 24 },
  submitButtonText: { color: '#ffffff', fontWeight: '600', fontSize: 16 },
});