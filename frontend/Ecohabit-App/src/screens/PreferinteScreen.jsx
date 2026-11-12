import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/PreferinteStyles';

const PersonalizareScreen = () => {
  const router = useRouter();

  // STAREA 1: Reținem ora selectată (Doar una singură)
  const [selectedTime, setSelectedTime] = useState('09:00'); // Implicit setat pe 09:00

  // STAREA 2: Reținem zilele selectate (Pot fi mai multe, deci e un Array)
  // Punem 'L' și 'M1' etc. ca să nu se încurce Marți cu Miercuri
  const [selectedDays, setSelectedDays] = useState(['L', 'M1', 'M2', 'J', 'V']); 

  // Lista de opțiuni pentru oră
  const timeOptions = [
    { id: '06:00', label: '06:00 - Dimineața devreme' },
    { id: '09:00', label: '09:00 - Dimineața' },
    { id: '12:00', label: '12:00 - La prânz' },
    { id: '18:00', label: '18:00 - Seara' },
    { id: '21:00', label: '21:00 - Seara târziu' },
  ];

  // Lista de opțiuni pentru zile
  const dayOptions = [
    { id: 'L', label: 'L' },
    { id: 'M1', label: 'M' }, // Marți
    { id: 'M2', label: 'M' }, // Miercuri
    { id: 'J', label: 'J' },
    { id: 'V', label: 'V' },
    { id: 'S', label: 'S' },
    { id: 'D', label: 'D' },
  ];

  // Funcția care adaugă sau scoate o zi din lista de selecție
  const toggleDay = (dayId) => {
    setSelectedDays((prevDays) => {
      if (prevDays.includes(dayId)) {
        // Dacă ziua e deja selectată, o scoatem
        return prevDays.filter(d => d !== dayId);
      } else {
        // Dacă nu e selectată, o adăugăm
        return [...prevDays, dayId];
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.title}>Personalizează experiența</Text>
        <Text style={styles.subtitle}>Când vrei să primești notificări și în ce zile să fii activ?</Text>

        {/* --- CARDUL 1: Ora Preferată --- */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconBoxTime}>
              <Feather name="clock" size={24} color="#2874A6" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Ora preferată pentru task-uri?</Text>
              <Text style={styles.cardSubtitle}>Când vrei să primești notificări?</Text>
            </View>
          </View>

          {timeOptions.map((option) => (
            <TouchableOpacity 
              key={option.id}
              style={[
                styles.timeOption, 
                selectedTime === option.id && styles.timeOptionSelected
              ]}
              onPress={() => setSelectedTime(option.id)}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.timeText,
                selectedTime === option.id && styles.timeTextSelected
              ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* --- CARDUL 2: Zile Active --- */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconBoxDays}>
              <Feather name="calendar" size={24} color="#884EA0" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Zile active</Text>
              <Text style={styles.cardSubtitle}>În ce zile vrei să primești task-uri?</Text>
            </View>
          </View>

          <View style={styles.daysContainer}>
            {dayOptions.map((day) => {
              const isSelected = selectedDays.includes(day.id);
              return (
                <TouchableOpacity
                  key={day.id}
                  style={[
                    styles.dayCircle,
                    isSelected && styles.dayCircleSelected
                  ]}
                  onPress={() => toggleDay(day.id)}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.dayText,
                    isSelected && styles.dayTextSelected
                  ]}>
                    {day.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* --- BUTOANE JOS --- */}
        <TouchableOpacity style={styles.finishButton} onPress={() => router.push('/setari')}>
          <Text style={styles.finishButtonText}>Finalizează configurarea</Text>
        </TouchableOpacity>

        {/* --- BANNER INFORMATIV --- */}
        <View style={styles.infoBanner}>
          <Text style={styles.infoText}>
            <Text style={styles.infoTextBold}>💡 Sfat: </Text> 
            Poți schimba aceste setări oricând din secțiunea 
            <Text style={styles.infoLink}> Profil {'->'} Setări</Text>
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalizareScreen;