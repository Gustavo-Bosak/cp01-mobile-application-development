import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [formNome, setFormNome] = useState('');
  const [formCurso, setFormCurso] = useState('');
  const [formDisciplina, setFormDisciplina] = useState('');
  const [formDescricao, setFormDescricao] = useState('');
  const [mostrar, setMostrar] = useState(false);

  const close = () => {
    setMostrar(false);
    setFormNome('');
    setFormCurso('');
    setFormDisciplina('');
    setFormDescricao('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastrar Perfil</Text>
          <Text style={styles.subtitle}>Preencha os campos abaixo com suas informações.</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder='Seu Nome'
              placeholderTextColor="#484f58"
              value={formNome}
              onChangeText={setFormNome}
            />

            <Text style={styles.label}>Curso</Text>
            <TextInput
              style={styles.input}
              placeholder='Desenvolvimento de Sistemas'
              placeholderTextColor="#484f58"
              value={formCurso}
              onChangeText={setFormCurso}
            />

            <Text style={styles.label}>Disciplina</Text>
            <TextInput
              style={styles.input}
              placeholder='Mobile Development'
              placeholderTextColor="#484f58"
              value={formDisciplina}
              onChangeText={setFormDisciplina}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder='Fale um pouco sobre você...'
              placeholderTextColor="#484f58"
              multiline
              numberOfLines={4}
              value={formDescricao}
              onChangeText={setFormDescricao}
            />
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => setMostrar(true)}
          >
            <Text style={styles.submitButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={mostrar}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Concluído!</Text>
              <TouchableOpacity onPress={close}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <Image
                style={styles.modalImage}
                source={require('./assets/github_background.jpg')}
              />
              <Text style={styles.modalMessage}>Cadastro finalizado com sucesso. Reveja abaixo suas informações</Text>

              <View style={styles.infoBox}>
                <Text style={styles.infoText}><Text style={styles.bold}>Nome: </Text> {formNome}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Curso: </Text> {formCurso}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Disciplina: </Text> {formDisciplina}</Text>
                <Text style={styles.infoText}><Text style={styles.bold}>Descrição: </Text> {formDescricao}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={close}>
              <Text style={styles.closeButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117'
  },
  formContainer: {
    padding: 24,
    alignItems: 'center',
    height: '100%'
  },
  header: {
    width: '100%',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
    paddingBottom: 8
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#c9d1d9'
  },
  subtitle: {
    fontSize: 14,
    color: '#8b949e',
    marginTop: 4
  },
  card: {
    width: '100%',
    backgroundColor: '#161b22',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#30363d',
    padding: 16
  },
  label: {
    color: '#c9d1d9',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 12
  },
  input: {
    backgroundColor: '#0d1117',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    padding: 10,
    color: '#c9d1d9',
    fontSize: 14
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top'
  },
  submitButton: {
    backgroundColor: '#238636',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 24
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#161b22',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30363d',
    overflow: 'hidden'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#21262d',
    borderBottomWidth: 1,
    borderBottomColor: '#30363d'
  },
  modalTitle: {
    color: '#c9d1d9',
    fontSize: 16,
    fontWeight: '600'
  },
  closeIcon: {
    color: '#8b949e',
    fontSize: 18
  },
  modalImage: {
    height: 120,
    width: 'auto',
    backgroundColor: '#fff',
    marginBottom: 16
  },
  modalBody: {
    padding: 20
  },
  modalMessage: {
    color: '#7ee787',
    fontSize: 14,
    marginBottom: 16
  },
  infoBox: {
    backgroundColor: '#0d1117',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#30363d'
  },
  infoText: {
    color: '#8b949e',
    fontSize: 14,
    marginBottom: 4
  },
  bold: {
    color: '#c9d1d9',
    fontWeight: 'bold'
  },
  closeButton: {
    margin: 16,
    backgroundColor: '#30363d',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  closeButtonText: {
    color: '#c9d1d9',
    fontWeight: '600'
  }
});