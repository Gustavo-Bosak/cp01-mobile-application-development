import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaskInput, { Masks } from 'react-native-mask-input'

export default function Home () {
  const router = useRouter()
  const [formNome, setFormNome] = useState('')
  const [formCPF, setformCPF] = useState('')
  const [formTelefone, setformTelefone] = useState('')
  const [formCurso, setFormCurso] = useState('')

  const handleSumbit = async () => {
    if (!formNome || !formCPF || !formTelefone || !formCurso) {
      Alert.alert(
        'Campos Vazios',
        'Por favor, preencha todos os campos antes de continuar.'
      )
      return
    }

    try {
      const perfil = {
        nome: formNome,
        cpf: formCPF,
        descricao: formTelefone,
        curso: formCurso
      }

      await AsyncStorage.setItem('perfil', JSON.stringify(perfil))

      router.push('/perfil')
    } catch (e) {
      console.log(e)
      Alert.alert('Erro', 'Não foi possível salvar os dados.')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastrar Perfil</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={formNome}
            onChangeText={setFormNome}
            placeholder='Seu Nome'
            placeholderTextColor='#484f58'
          />

          <Text style={styles.label}>CPF</Text>
          <MaskInput
            style={styles.input}
            value={formCPF}
            onChangeText={setformCPF}
            mask={Masks.BRL_CPF}
            placeholder='000.000.000-00'
            placeholderTextColor='#484f58'
            keyboardType='numeric'
          />

          <Text style={styles.label}>Telefone</Text>
          <MaskInput
            style={styles.input}
            value={formTelefone}
            onChangeText={setformTelefone}
            mask={Masks.BRL_PHONE}
            placeholder='(11) 99999-9999'
            placeholderTextColor='#484f58'
            keyboardType='numeric'
          />

          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            value={formCurso}
            onChangeText={setFormCurso}
            placeholder='Seu Curso'
            placeholderTextColor='#484f58'
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSumbit}>
            <Text style={styles.submitButtonText}>Salvar e Ver Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  formContainer: { padding: 24 },
  header: { marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '600', color: '#c9d1d9' },
  card: {
    backgroundColor: '#161b22',
    borderRadius: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: '#30363d'
  },
  label: { color: '#c9d1d9', marginBottom: 8, marginTop: 12 },
  input: {
    backgroundColor: '#0d1117',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    padding: 10,
    color: '#c9d1d9'
  },
  submitButton: {
    backgroundColor: '#238636',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 24
  },
  submitButtonText: { color: '#ffffff', fontWeight: '600' }
})
