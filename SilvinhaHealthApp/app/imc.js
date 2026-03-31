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
import { calcularIMC } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    if (!peso || !altura) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Digite valores válidos (maiores que zero).');
      return;
    }

    const resultadoIMC = calcularIMC(pesoNum, alturaNum);
    setResultado(resultadoIMC);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>

          <Text style={styles.title}>Calculadora de IMC</Text>

          <Text style={styles.description}>
            O Índice de Massa Corporal (IMC) é uma medida usada para avaliar se você está no peso ideal.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 70"
              value={peso}
              onChangeText={setPeso}
              keyboardType="numeric"
            />
          </View>

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

          <TouchableOpacity style={styles.button} onPress={handleCalcular}>
            <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>

          {resultado && (
            <View style={styles.resultBox}>
              <Text style={styles.resultTitle}>Resultado:</Text>
              <Text style={styles.resultValue}>{resultado.valor}</Text>
              <Text style={styles.resultClassification}>
                {resultado.classificacao}
              </Text>
            </View>
          )}

          <BotaoVoltar />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    flexGrow: 1,
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
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
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
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  resultClassification: {
    fontSize: 18,
    color: '#666',
  },
});