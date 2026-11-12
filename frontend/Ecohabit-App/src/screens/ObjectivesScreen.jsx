import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
// 1. Am adăugat importul pentru router
import { useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons'; 
import { objectivesStyles as styles } from '../styles/ObjectivesStyles';

const OBJECTIVES = [
    {
      id: 'plastic',
      label: 'Reducere plastic',
      description: 'Minimizează plasticul de unică folosință',
      iconName: 'sync-outline', 
      borderColor: '#6DBF2F',
      iconBg: '#E8F5D6',
    },
    {
      id: 'energie',
      label: 'Economie energie',
      description: 'Reduce consumul de energie electrică',
      iconName: 'flash-outline', 
      borderColor: '#F5A623',
      iconBg: '#FEF3DC',
    },
    {
      id: 'apa',
      label: 'Conservare apă',
      description: 'Economisește resurse de apă',
      iconName: 'water-outline', 
      borderColor: '#4A90D9',
      iconBg: '#DCF0FC',
    },
    {
      id: 'transport',
      label: 'Transport eco',
      description: 'Folosește alternative sustenabile',
      iconName: 'bus-outline', 
      borderColor: '#C47AC0',
      iconBg: '#F5E4F5',
    },
    {
      id: 'alimentatie',
      label: 'Alimentație sustenabilă',
      description: 'Alege opțiuni alimentare eco',
      iconName: 'nutrition-outline', 
      borderColor: '#E05C3A',
      iconBg: '#FCE8E2',
    },
  ];

// 2. Am șters vechiul prop { navigation } care încurca
export default function ObjectivesScreen() {
  // 3. Inițializăm router-ul aici
  const router = useRouter(); 

  const [selected, setSelected] = useState(
    OBJECTIVES.reduce((acc, obj) => ({ ...acc, [obj.id]: true }), {})
  );

  const toggleObjective = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Care sunt obiectivele tale?</Text>
          <Text style={styles.subtitle}>
            Selectează ariile în care vrei să fii mai sustenabil
          </Text>
          <Text style={styles.multiSelectHint}>Poți selecta mai multe opțiuni</Text>
        </View>

        <View style={styles.optionsList}>
          {OBJECTIVES.map((obj) => {
            const isSelected = selected[obj.id];
            return (
              <TouchableOpacity
                key={obj.id}
                style={[
                  styles.optionCard,
                  isSelected && { borderColor: obj.borderColor, borderWidth: 1.5 },
                ]}
                onPress={() => toggleObjective(obj.id)}
                activeOpacity={0.85}
              >
                <View style={[styles.iconContainer, { backgroundColor: obj.iconBg }]}>
                    <Ionicons name={obj.iconName} size={28} color={obj.borderColor} />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionLabel}>{obj.label}</Text>
                  <Text style={styles.optionDescription}>{obj.description}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            selectedCount === 0 && styles.continueButtonDisabled,
          ]}
          disabled={selectedCount === 0}
          // 4. Am pus router.push către pagina nouă
          onPress={() => router.push({ pathname: '/personalizare', params: { from: 'objectives' } })} 
        >
          <Text style={styles.continueButtonText}>
            Continuă ({selectedCount} selectate)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}