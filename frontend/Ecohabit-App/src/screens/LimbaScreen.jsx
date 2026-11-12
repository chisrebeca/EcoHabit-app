import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/LimbaStyles';

const LimbaScreen = () => {
  const router = useRouter();

  // Lista completă a limbilor (datele)
  const languages = [
    { id: 'ro', code: 'RO', namePrimary: 'Română', nameSecondary: 'Romanian', available: true },
    { id: 'en', code: 'GB', namePrimary: 'English', nameSecondary: 'English', available: false },
    { id: 'fr', code: 'FR', namePrimary: 'Français', nameSecondary: 'French', available: false },
    { id: 'de', code: 'DE', namePrimary: 'Deutsch', nameSecondary: 'German', available: false },
    { id: 'es', code: 'ES', namePrimary: 'Español', nameSecondary: 'Spanish', available: false },
    { id: 'hu', code: 'HU', namePrimary: 'Magyar', nameSecondary: 'Hungarian', available: false },
    { id: 'it', code: 'IT', namePrimary: 'Italiano', nameSecondary: 'Italian', available: false },
    { id: 'bg', code: 'BG', namePrimary: 'български', nameSecondary: 'Bulgarian', available: false },
  ];

  // Starea pentru a reține limba selectată (implicit RO)
  const [selectedLangId, setSelectedLangId] = useState('ro');

  // Găsim obiectul complet al limbii selectate pentru a-l afișa sus
  const currentLang = languages.find(l => l.id === selectedLangId);

  // Funcție când utilizatorul apasă pe o limbă
  const handleSelectLanguage = (lang) => {
    if (lang.available) {
      setSelectedLangId(lang.id);
      // Aici în viitor poți adăuga logică pentru a salva în baza de date / AsyncStorage
      console.log("Limba schimbată în:", lang.id);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Buton Înapoi */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setari')}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>

        {/* Header Pagină */}
        <View style={styles.headerRow}>
          <View style={styles.headerIconBox}>
            <Feather name="globe" size={22} color="#8E44AD" />
          </View>
          <Text style={styles.title}>Limbă/Language</Text>
        </View>
        <Text style={styles.subtitle}>Alege limba aplicației / Choose app language</Text>

        {/* --- CARD LIMBA CURENTĂ (Dinamic) --- */}
        <View style={styles.activeLanguageCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <View style={styles.flagCircleActive}>
              <Text style={styles.flagTextActive}>{currentLang?.code}</Text>
            </View>
            <View style={styles.activeLanguageInfo}>
              <Text style={styles.activeLanguageLabel}>Limba curentă / Current language</Text>
              <Text style={styles.activeLanguageName}>{currentLang?.namePrimary}</Text>
            </View>
          </View>
          <Feather name="check" size={20} color="#8E44AD" />
        </View>

        <Text style={styles.sectionTitle}>Limbi disponibile / Available languages</Text>

        {/* --- LISTA DE LIMBI --- */}
        {languages.map((lang) => {
          const isSelected = selectedLangId === lang.id;

          return (
            <TouchableOpacity 
              key={lang.id}
              style={[styles.languageRow, isSelected && styles.languageRowSelected]}
              onPress={() => handleSelectLanguage(lang)}
              activeOpacity={lang.available ? 0.7 : 1} // Dezactivează efectul de click dacă nu e available
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={[styles.flagCircle, isSelected && { backgroundColor: '#D7BDE2' }]}>
                  <Text style={[styles.flagText, isSelected && { color: '#4A235A' }]}>
                    {lang.code}
                  </Text>
                </View>
                <View style={styles.languageInfo}>
                  <Text style={styles.languageNamePrimary}>{lang.namePrimary}</Text>
                  <Text style={styles.languageNameSecondary}>{lang.nameSecondary}</Text>
                </View>
              </View>

              {/* Partea dreaptă (Bifă SAU "În curând") */}
              {lang.available ? (
                isSelected ? (
                   <Ionicons name="checkmark-circle" size={24} color="#8E44AD" />
                ) : null
              ) : (
                <View style={styles.soonBadge}>
                  <Text style={styles.soonBadgeText}>În curând</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        {/* Banner Notă */}
        <View style={styles.noteBanner}>
          <Text style={styles.noteText}>
            <Text style={styles.noteBold}>💡 Notă: </Text>
            Schimbarea limbii va actualiza toate textele din aplicație. Datele tale personale rămân neschimbate.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LimbaScreen;