import { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ResultPerfil () {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('perfil')
        if (jsonValue != null) {
          setUser(JSON.parse(jsonValue))
        }
      } catch (e) {
        console.error('Erro ao carregar dados')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const handleExit = async () => {
    try {
      await AsyncStorage.removeItem('perfil')
      router.replace('/')

    } catch (e) {
      console.error('Erro ao limpar dados: ', e)
      router.replace('/')
    }
  }

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />

  return (
    <View style={styles.perfilOverlay}>
      <View style={styles.perfilContent}>
        <View style={styles.perfilHeader}>
          <Image
            source={require('../assets/github_background.jpg')}
            style={styles.headerImage}
            resizeMode='cover'
          />
          <Text style={styles.perfilTitle}>Perfil Salvo</Text>
        </View>

        <View style={styles.perfilBody}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nome: </Text>
              {user?.nome}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>CPF: </Text>
              {user?.cpf}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Telefone: </Text>
              {user?.telefone}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Curso: </Text>
              {user?.curso}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton} onPress={handleExit}>
          <Text style={styles.closeButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  perfilOverlay: {
    flex: 1,
    backgroundColor: '#0d1117',
    justifyContent: 'center',
    padding: 20
  },
  perfilContent: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30363d'
  },
  perfilHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d'
  },
  headerImage: { width: '100%', height: 150, marginBottom: 16 },
  perfilTitle: {
    color: '#c9d1d9',
    fontSize: 16,
    fontWeight: '600'
  },
  perfilBody: { padding: 20 },
  infoBox: { backgroundColor: '#0d1117', padding: 12, borderRadius: 6 },
  infoText: { color: '#8b949e', marginBottom: 8 },
  bold: { color: '#c9d1d9', fontWeight: 'bold' },
  closeButton: {
    margin: 16,
    backgroundColor: '#30363d',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  closeButtonText: { color: '#c9d1d9' }
})
