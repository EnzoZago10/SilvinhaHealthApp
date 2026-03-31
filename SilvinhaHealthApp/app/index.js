import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const menuData = [
  {
    id: '1',
    title: 'Calculadora de IMC',
    route: '/imc',
    color: '#FF6B6B',
    icon: '📊'
  },
  {
    id: '2',
    title: 'Peso Ideal',
    route: '/peso-ideal',
    color: '#4ECDC4',
    icon: '⚖️'
  },
  {
    id: '3',
    title: 'Água Diária',
    route: '/agua',
    color: '#45B7D1',
    icon: '💧'
  },
  {
    id: '4',
    title: 'Taxa Metabólica',
    route: '/tmb',
    color: '#96CEB4',
    icon: '🔥'
  },
];

export default function HomeScreen() {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.color }]}
      onPress={() => router.push(item.route)}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌸 Silvinha Health App</Text>
        <Text style={styles.subtitle}>Cuide da sua saúde</Text>
      </View>

      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});