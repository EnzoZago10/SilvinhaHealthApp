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
import { calcularAgua } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';

export default function AguaScreen() {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    if (!peso) {
      Alert.alert('Erro', 'Digite seu peso!');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));

    if (isNaN(pesoNum) || pesoNum <= 0) {
      Alert.alert('Erro', 'Digite um valor válido.');
      return;
    }

    const agua = calcularAgua(pesoNum);
    setResultado(agua);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Água Diária</Text>

        <Text style={styles.description}>
          Descubra a quantidade ideal de água que você deve consumir diariamente.
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

        <TouchableOpacity style={styles.button} onPress={handleCalcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Recomendação diária:</Text>

            <Text style={styles.resultValue}>
              {resultado.ml} ml
            </Text>

            <Text style={styles.resultSecondary}>
              ({resultado.l} litros)
            </Text>

            <View style={styles.tipsBox}>
              <Text style={styles.tipsTitle}>Dicas:</Text>
              <Text style={styles.tip}>• Beba água ao acordar</Text>
              <Text style={styles.tip}>• Ande sempre com uma garrafa</Text>
              <Text style={styles.tip}>• Use lembretes no celular</Text>
            </View>
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
  button: {
    backgroundColor: '#45B7D1',
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
  resultLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  resultSecondary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  tipsBox: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  tipsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tip: {
    fontSize: 14,
    color: '#444',
  },
});