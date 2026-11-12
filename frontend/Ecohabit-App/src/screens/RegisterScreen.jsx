import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Image, 
  SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert 
} from 'react-native';
import { registerStyles as styles } from '../styles/RegisterStyles';

export default function RegisterScreen({ navigation }) {
  const [nume, setNume] = useState('');
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleRegister = async () => {
    if (!nume || !email || !parola) {
      Alert.alert("Eroare", "Te rugăm să completezi toate câmpurile!");
      return;
    }
  
    setLoading(true);
  
    try {
      // ⚠️ ÎNLOCUIEȘTE CU IP-UL TĂU REAL GĂSIT LA PASUL 2
      // Fii atentă să scrii "http://" și să adaugi portul 3000
      const API_URL = 'http://192.168.0.126:5000/api/register'; 

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ nume, email, parola }),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ msg: "Eroare de la server." }));
        Alert.alert("Atenție", errorData.msg || "Ceva nu a mers bine la înregistrare.");
        return; 
      }

      // DACĂ TOTUL E OK, TE TRIMITE MAI DEPARTE!
      Alert.alert(
        `Bun venit, ${nume}!`,
        "Contul tău a fost creat cu succes. Hai să alegem nivelul tău eco!",
        [
          { 
            text: "Mergi la Nivel", 
            onPress: () => {
              
              navigation.push('nivel')
            }
          }
        ]
      );
      
    } catch (error) {
      console.error("Eroare Catch:", error);
      Alert.alert("Eroare", "Verifică dacă ești pe același Wi-Fi cu laptopul!");
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
            <Text style={styles.title}>Alătură-te comunității!</Text>
            <Text style={styles.subtitle}>Creează-ți un cont Ecohabit acum</Text>
          </View>

          <View style={styles.mainCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>✎ Nume complet</Text>
              <TextInput 
                style={styles.input}
                placeholder="Ex: Alexandru Popescu"
                placeholderTextColor="#999"
                value={nume}
                onChangeText={setNume}
              />
            </View>

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
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.textWhite}>
              {loading ? "Se procesează..." : "Creează cont"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.push('/')} 
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