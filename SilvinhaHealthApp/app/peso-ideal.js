import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calcularPesoIdeal } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';

export default function PesoIdealScreen() {
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState(null);
  const [resultado, setResultado] = useState('');

  const handleCalcular = () => {
    if (!altura || !sexo) {
      Alert.alert('Erro', 'Preencha a altura e selecione o sexo!');
      return;
    }

    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(alturaNum) || alturaNum <= 0) {
      Alert.alert('Erro', 'Digite uma altura válida.');
      return;
    }

    const pesoIdeal = calcularPesoIdeal(alturaNum, sexo);
    setResultado(pesoIdeal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Peso Ideal</Text>

        <Text style={styles.description}>
          Calcule seu peso ideal com base na altura e no sexo.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Altura (m)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 1.75"
            value={altura}
            onChangeText={setAltura}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.label}>Selecione o sexo:</Text>

        <View style={styles.sexContainer}>
          <TouchableOpacity
            style={[
              styles.sexButton,
              sexo === 'masculino' && styles.sexButtonSelected,
            ]}
            onPress={() => setSexo('masculino')}
          >
            <Text style={styles.sexIcon}>👨</Text>
            <Text
              style={[
                styles.sexText,
                sexo === 'masculino' && styles.sexTextSelected,
              ]}
            >
              Masculino
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sexButton,
              sexo === 'feminino' && styles.sexButtonSelected,
            ]}
            onPress={() => setSexo('feminino')}
          >
            <Text style={styles.sexIcon}>👩</Text>
            <Text
              style={[
                styles.sexText,
                sexo === 'feminino' && styles.sexTextSelected,
              ]}
            >
              Feminino
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCalcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {resultado !== '' && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Peso Ideal:</Text>
            <Text style={styles.resultValue}>{resultado} kg</Text>
          </View>
        )}

        <BotaoVoltar />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sexButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  sexButtonSelected: {
    backgroundColor: '#4ECDC4',
  },
  sexIcon: {
    fontSize: 30,
  },
  sexText: {
    marginTop: 5,
    color: '#333',
  },
  sexTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 16,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});