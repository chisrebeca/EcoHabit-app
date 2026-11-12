import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/CalendarStyles';

const CalendarScreen = () => {
  const router = useRouter();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [toggles, setToggles] = useState({
    menajer: true,
    plastic: true,
    hartie: true,
  });

  const toggleSwitch = (key) => setToggles(prev => ({ ...prev, [key]: !prev[key] }));

  // Date pentru calendar (Martie 2026)
  const weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  // Funcție pentru a da o culoare zilelor din calendar
  const getMarkerColor = (day) => {
    if ([1, 26].includes(day)) return '#E8DAEF'; // Mov (Sticlă?)
    if ([7, 17].includes(day)) return '#D6EAF8'; // Albastru (Hârtie?)
    if ([9, 30].includes(day)) return '#D4E7B6'; // Verde (Gunoi menajer?)
    if ([13, 18].includes(day)) return '#FAE5D3'; // Portocaliu (Plastic?)
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Buton Înapoi */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setari')}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>

        {/* Header cu Titlu și Locație */}
        <View style={styles.headerRow}>
          <View style={styles.titleRow}>
            <View style={styles.headerIconBox}>
              <Feather name="calendar" size={20} color="#000" />
            </View>
            <View>
              <Text style={styles.title}>Calendar Eco</Text>
              <Text style={styles.subtitle}>Cluj - Napoca</Text>
            </View>
          </View>
          <Feather name="map-pin" size={22} color="#333" onPress={() => router.push('/location')}/>
        </View>

        {/* Notificări Toggle */}
        <View style={styles.notificationCard}>
          <View style={styles.notificationLeft}>
            <Ionicons name="notifications" size={24} color="#000" />
            <View style={styles.notificationTexts}>
              <Text style={styles.notificationTitle}>Notificări</Text>
              <Text style={styles.notificationSub}>Reminder cu o zi înainte</Text>
            </View>
          </View>
          <Switch
            trackColor={{ false: '#D1D1D6', true: '#000000' }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#D1D1D6"
            onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
            value={notificationsEnabled}
          />
        </View>

        {/* Cardul Calendarului */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <Feather name="chevron-left" size={20} color="#000" />
            <Text style={styles.monthText}>Martie 2026</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </View>

          <View style={styles.weekDaysRow}>
            {weekDays.map((day, idx) => (
              <Text key={`wd-${idx}`} style={styles.weekDayText}>{day}</Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {daysInMonth.map(day => {
              const markerColor = getMarkerColor(day);
              return (
                <View key={`day-${day}`} style={styles.dayCell}>
                  <Text style={styles.dayText}>{day}</Text>
                  {markerColor && <View style={[styles.markerBar, { backgroundColor: markerColor }]} />}
                </View>
              );
            })}
          </View>
        </View>

        {/* Program Colectare */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Program colectare</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Adaugă</Text>
          </TouchableOpacity>
        </View>

        {/* Card: Gunoi Menajer */}
        <View style={styles.programCard}>
          <View style={styles.programTopRow}>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#000000' }}
              thumbColor="#FFFFFF"
              value={toggles.menajer}
              onValueChange={() => toggleSwitch('menajer')}
            />
            <Feather name="trash-2" size={22} color="#333" style={styles.programIcon} />
            <View>
              <Text style={styles.programTitle}>Gunoi menajer</Text>
              <Text style={styles.programDay}>Marți</Text>
            </View>
          </View>
          <Text style={styles.dropdownLabel}>Ziua săptămânii</Text>
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownText}>Marți</Text>
            <Feather name="chevron-down" size={16} color="#888" />
          </View>
        </View>

        {/* Card: Plastic */}
        <View style={styles.programCard}>
          <View style={styles.programTopRow}>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#000000' }}
              thumbColor="#FFFFFF"
              value={toggles.plastic}
              onValueChange={() => toggleSwitch('plastic')}
            />
            <MaterialCommunityIcons name="bottle-wine-outline" size={24} color="#333" style={styles.programIcon} />
            <View>
              <Text style={styles.programTitle}>Plastic</Text>
              <Text style={styles.programDay}>Luni</Text>
            </View>
          </View>
          <Text style={styles.dropdownLabel}>Ziua săptămânii</Text>
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownText}>Luni</Text>
            <Feather name="chevron-down" size={16} color="#888" />
          </View>
        </View>

        {/* Card: Hârtie/Carton */}
        <View style={styles.programCard}>
          <View style={styles.programTopRow}>
            <Switch
              trackColor={{ false: '#D1D1D6', true: '#000000' }}
              thumbColor="#FFFFFF"
              value={toggles.hartie}
              onValueChange={() => toggleSwitch('hartie')}
            />
            <Feather name="package" size={22} color="#333" style={styles.programIcon} />
            <View>
              <Text style={styles.programTitle}>Hârtie/Carton</Text>
              <Text style={styles.programDay}>Miercuri</Text>
            </View>
          </View>
          <Text style={styles.dropdownLabel}>Ziua săptămânii</Text>
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownText}>Miercuri</Text>
            <Feather name="chevron-down" size={16} color="#888" />
          </View>
        </View>

        {/* Următoarele Colectări */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Următoarele colectări</Text>
        </View>

        <View style={styles.nextCard}>
          <Feather name="package" size={24} color="#333" style={styles.nextIconBox} />
          <View>
            <Text style={styles.nextTitle}>Hârtie/Carton</Text>
            <Text style={styles.nextDate}>miercuri, 17 martie</Text>
          </View>
        </View>

        <View style={styles.nextCard}>
           <MaterialCommunityIcons name="bottle-wine-outline" size={24} color="#333" style={styles.nextIconBox} />
          <View>
            <Text style={styles.nextTitle}>Plastic</Text>
            <Text style={styles.nextDate}>luni, 30 martie</Text>
          </View>
        </View>

        <View style={styles.nextCard}>
          <Feather name="trash-2" size={24} color="#333" style={styles.nextIconBox} />
          <View>
            <Text style={styles.nextTitle}>Gunoi menajer</Text>
            <Text style={styles.nextDate}>joi, 26 martie</Text>
          </View>
        </View>

        <View style={styles.nextCard}>
           <MaterialCommunityIcons name="glass-wine" size={24} color="#333" style={styles.nextIconBox} />
          <View>
            <Text style={styles.nextTitle}>Sticlă</Text>
            <Text style={styles.nextDate}>miercuri, 18 martie</Text>
          </View>
        </View>

        {/* Banner Sfat */}
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

export default CalendarScreen;