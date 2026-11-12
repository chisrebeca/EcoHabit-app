import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Image, 
  SafeAreaView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator,
  ScrollView 
} from 'react-native';
import { useRouter } from 'expo-router'; // Importăm router-ul pentru Expo

import { loginStyles as styles } from '../styles/LoginStyles';

export default function LoginScreen() {
  const router = useRouter(); // Inițializăm router-ul
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // 1. Validare câmpuri goale
    if (!email || !parola) {
      Alert.alert("Eroare", "Te rugăm să completezi toate câmpurile!");
      return;
    }

    setLoading(true);

    try {
      // 2. Cererea către serverul tău prin ngrok
      const response = await fetch('http://192.168.0.126:5000/api/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true' // Bypass pentru pagina de avertizare ngrok
        },
        body: JSON.stringify({ email, parola }),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. Mesaj de succes și navigare către Experience
        // Folosim replace pentru ca userul să nu poată da "back" la Login
        console.log("Login reușit pentru:", data.user.nume);
        router.replace('/experience'); 
      } else {
        // Mesaj de eroare de la server (ex: parolă greșită)
        Alert.alert("Eroare", data.msg || "Date de autentificare incorecte.");
      }

      const numeUtilizator = data.user.nume || "Eco-Prieten"; 

        Alert.alert(
          "Bine ai revenit, " + numeUtilizator + "! 🌍",
          "Ne bucurăm să te revedem. Continuă-ți progresul eco!",
          [
            {
              text: "Spre aplicație",
              onPress: () => router.replace('/experience') 
            }
          ]
        );
    } catch (error) {
      console.error(error);
      Alert.alert("Eroare de rețea", "Nu am putut contacta serverul!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.logoImage} 
            />
            <Text style={styles.title}>Autentificare în cont</Text>
            <Text style={styles.subtitle}>Continuă călătoria ta eco</Text>
          </View>

          <View style={styles.mainCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>✉ Email</Text>
              <TextInput 
                style={styles.input}
                placeholder="adresa.ta@email.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>🔒︎ Parolă</Text>
              <TextInput 
                style={styles.input}
                placeholder="Minim 6 caractere"
                placeholderTextColor="#999"
                value={parola}
                onChangeText={setParola}
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.buttonGreen, loading && { opacity: 0.7 }]} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.textWhite}>Intră în cont</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/')} 
            style={styles.footerButton}
          >
            <Text style={styles.footerText}>
              ← Înapoi la început
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}