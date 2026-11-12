import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'; 
import { welcomeStyles as styles } from '../styles/WelcomeStyles';
import { Ionicons } from '@expo/vector-icons'; 

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../src/assets/logo.png')}
            style={styles.logoImage} 
          />
        </View>

        <Text style={styles.title}>Bine ai venit la Ecohabit!</Text>
        <Text style={styles.subtitle}>Hai să transformăm împreună lumea într-un loc mai verde</Text>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="clipboard-outline" size={24} color="#4A6B32" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Task-uri personalizate</Text>
            <Text style={styles.cardDesc}>Acțiuni concrete adaptate stilului tău</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="trending-up-outline" size={24} color="#4A6B32" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Urmărește impactul</Text>
            <Text style={styles.cardDesc}>Vezi în timp real CO2 economisit</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="trophy-outline" size={24} color="#4A6B32" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Recompense & Gamificare</Text>
            <Text style={styles.cardDesc}>Câștigă puncte, badge-uri și recompense reale</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.buttonGreen}
          onPress={() => navigation.push('register')}
        >
          <Text style={styles.textWhite}>Începe acum</Text> 
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonOutline}
          onPress={() => navigation.push('login')} 
        >
          <Text style={styles.textGreen}>Am deja cont</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}