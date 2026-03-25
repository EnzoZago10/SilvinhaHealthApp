import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f9f9f9',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Silvinha Health App',
            headerShown: true
          }}
        />
      </Stack>
    </>
  );
}