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
import { calcularTMB } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';

export default function TmbScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState(null);
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    if (!peso || !altura || !idade || !sexo) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    const idadeNum = parseInt(idade);

    if (
      isNaN(pesoNum) ||
      isNaN(alturaNum) ||
      isNaN(idadeNum) ||
      pesoNum <= 0 ||
      alturaNum <= 0 ||
      idadeNum <= 0
    ) {
      Alert.alert('Erro', 'Digite valores válidos.');
      return;
    }

    const tmb = calcularTMB(pesoNum, alturaNum, idadeNum, sexo);
    setResultado(tmb);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Taxa Metabólica Basal</Text>

        <Text style={styles.description}>
          Descubra quantas calorias seu corpo gasta por dia em repouso.
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

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 18"
            value={idade}
            onChangeText={setIdade}
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

        {resultado && (
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Sua TMB é:</Text>
            <Text style={styles.resultValue}>{resultado} kcal/dia</Text>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Para manter o peso:</Text>
              <Text style={styles.infoText}>
                Sedentário: {Math.round(resultado * 1.2)} kcal{'\n'}
                Leve atividade: {Math.round(resultado * 1.375)} kcal{'\n'}
                Moderado: {Math.round(resultado * 1.55)} kcal{'\n'}
                Intenso: {Math.round(resultado * 1.725)} kcal
              </Text>
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
    backgroundColor: '#96CEB4',
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
    backgroundColor: '#96CEB4',
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
  },
  resultLabel: {
    fontSize: 16,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoBox: {
    marginTop: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
  },
});