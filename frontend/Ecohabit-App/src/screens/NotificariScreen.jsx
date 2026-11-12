import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/NotificariStyles';

const NotificariScreen = () => {
  const router = useRouter();

  // Stările (True/False) pentru fiecare comutator
  // Le-am setat exact ca în poza ta
  const [reminders, setReminders] = useState({
    zilnic: true,
    completat: true,
    streak: true,
    gunoi: true,
    raport: true,
    realizare: true,
    prieteni: false,
    clasament: false,
  });

  // Funcție rapidă pentru a schimba starea unui comutator
  const toggleSwitch = (key) => {
    setReminders((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log("Setări notificări salvate:", reminders);
    router.back(); // Sau router.push('/setari')
  };

  // Sub-componentă curată pentru un rând cu Switch
  const ToggleItem = ({ title, subtitle, value, onValueChange, isLast }) => (
    <View style={[styles.toggleRow, isLast && { borderBottomWidth: 0 }]}>
      <View style={styles.toggleTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      <Switch
        trackColor={{ false: '#D1D1D6', true: '#000000' }} // Gri / Negru
        thumbColor="#FFFFFF" // Bulina albă
        ios_backgroundColor="#D1D1D6"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Buton Înapoi */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setari')}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>

        {/* Titlu Pagină */}
        <View style={styles.headerRow}>
          <View style={styles.headerIconBox}>
            <Ionicons name="notifications" size={22} color="#000" />
          </View>
          <Text style={styles.title}>Notificări</Text>
        </View>
        <Text style={styles.subtitle}>Alege ce notificări vrei să primești</Text>

        {/* --- SECȚIUNEA 1: Task-uri & Activitate --- */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionIconBox}><Feather name="check" size={16} color="#444" /></View>
          <Text style={styles.sectionTitle}>Task-uri & Activitate</Text>
        </View>
        <View style={styles.card}>
          <ToggleItem 
            title="Reminder zilnic" subtitle="Notificare pentru task-urile zilei"
            value={reminders.zilnic} onValueChange={() => toggleSwitch('zilnic')} 
          />
          <ToggleItem 
            title="Task completat" subtitle="Confirmare când completezi un task"
            value={reminders.completat} onValueChange={() => toggleSwitch('completat')} 
          />
          <ToggleItem 
            title="Menține streak-ul" subtitle="Reminder să nu pierzi streak-ul"
            value={reminders.streak} onValueChange={() => toggleSwitch('streak')} isLast 
          />
        </View>

        {/* --- SECȚIUNEA 2: Evenimente & Calendar --- */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionIconBox}><Feather name="calendar" size={16} color="#444" /></View>
          <Text style={styles.sectionTitle}>Evenimente & Calendar</Text>
        </View>
        <View style={styles.card}>
          <ToggleItem 
            title="Colectare gunoi" subtitle="Reminder pentru zilele de reciclare"
            value={reminders.gunoi} onValueChange={() => toggleSwitch('gunoi')} 
          />
          <ToggleItem 
            title="Raport săptămânal" subtitle="Sumar al progresului tău"
            value={reminders.raport} onValueChange={() => toggleSwitch('raport')} isLast 
          />
        </View>

        {/* --- SECȚIUNEA 3: Realizări & Social --- */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionIconBox}><Ionicons name="trophy-outline" size={16} color="#444" /></View>
          <Text style={styles.sectionTitle}>Realizări & Social</Text>
        </View>
        <View style={styles.card}>
          <ToggleItem 
            title="Realizare deblocată" subtitle="Când câștigi un nou badge"
            value={reminders.realizare} onValueChange={() => toggleSwitch('realizare')} 
          />
          <ToggleItem 
            title="Activitate prieteni" subtitle="Când prietenii completează task-uri"
            value={reminders.prieteni} onValueChange={() => toggleSwitch('prieteni')} 
          />
          <ToggleItem 
            title="Actualizări clasament" subtitle="Schimbări în poziția ta"
            value={reminders.clasament} onValueChange={() => toggleSwitch('clasament')} isLast 
          />
        </View>

        {/* --- BUTON SALVARE --- */}
        <TouchableOpacity style={styles.saveButton} onPress={() => router.push('/setari')}>
          <Text style={styles.saveButtonText}>Salvează setările</Text>
        </TouchableOpacity>

        {/* --- BANNER INFORMATIV --- */}
        <View style={styles.infoBanner}>
          <Text style={styles.infoText}>
            <Text style={styles.infoTextBold}>💡 Sfat: </Text> 
            Pentru cea mai bună experiență, recomandăm să activezi cel puțin reminder-ul zilnic și notificările pentru colectarea gunoiului.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificariScreen;