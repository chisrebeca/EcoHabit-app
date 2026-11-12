import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

// Importă stilurile tale
import { styles } from '../styles/NivelStyles'; 

const NivelScreen = () => {
  const router = useRouter(); 
  const [selected, setSelected] = useState('incepator');

  const levels = [
    {
      id: 'incepator',
      title: 'Începător',
      desc: 'Nou în sustenabilitate',
      subDesc: 'Task-uri simple, 3-5 pe zi',
      icon: 'leaf-outline',
      color: '#D4E7B6',
    },
    {
      id: 'intermediar',
      title: 'Intermediar',
      desc: 'Am câteva obiceiuri eco',
      subDesc: 'Task-uri moderate, 5-7 pe zi',
      icon: 'leaf',
      color: '#B8E9C0',
    },
    {
      id: 'avansat',
      title: 'Avansat',
      desc: 'Stil de viață sustenabil',
      subDesc: 'Task-uri complexe, 7-10 pe zi',
      icon: 'trail-sign-outline',
      color: '#C6E2E9',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Care este nivelul tău?</Text>
          <Text style={styles.subtitle}>Vom personaliza task-urile în funcție de experiența ta</Text>
        </View>

        {levels.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => setSelected(item.id)}
            style={[
              styles.card,
              selected === item.id && styles.cardSelected
            ]}
          >
            <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
              <Ionicons name={item.icon} size={28} color="#2D4F1E" />
            </View>
            
            <View style={styles.cardTextContainer}>
              <Text style={styles.levelTitle}>{item.title}</Text>
              <Text style={styles.levelDesc}>{item.desc}</Text>
              <Text style={styles.levelSubDesc}>{item.subDesc}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.continueButton} 
            // Te trimite la pagina principală
            onPress={() => router.push('/objectives')} 
          >
            <Text style={styles.continueButtonText}>Continuă</Text>
          </TouchableOpacity>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// Export-ul rămâne jos de tot
export default NivelScreen;