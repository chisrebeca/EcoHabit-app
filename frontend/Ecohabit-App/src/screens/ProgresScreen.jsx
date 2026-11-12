import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { styles } from '../styles/ProgresStyles';
import { useRouter } from 'expo-router'; 

const ProgresScreen = () => {
  const router = useRouter(); 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.title}>Progresul tău</Text>
        <Text style={styles.subtitle}>Urmărește-ți impactul pozitiv</Text>

        <Text style={styles.sectionTitle}>Impact asupra mediului</Text>
        
        {/* Card CO2 */}
        <View style={styles.card}>
          <View style={[styles.iconCircle, {backgroundColor: '#E8F3E8'}]}>
            <Ionicons name="cloud-outline" size={24} color="#4A8C54" />
          </View>
          <View>
            <Text style={styles.cardTitle}>CO₂ Economisit</Text>
            <Text style={styles.cardValue}>7.5 kg</Text>
            <Text style={styles.cardSub}>Echivalent cu plantarea a 0 copaci</Text>
          </View>
        </View>

        {/* Card Apa */}
        <View style={styles.card}>
          <View style={[styles.iconCircle, {backgroundColor: '#E3F2FD'}]}>
            <Ionicons name="water-outline" size={24} color="#2196F3" />
          </View>
          <View>
            <Text style={styles.cardTitle}>Apă Economisită</Text>
            <Text style={styles.cardValue}>40 L</Text>
            <Text style={styles.cardSub}>Echivalent cu 4 dușuri</Text>
          </View>
        </View>

        {/* Card Task-uri */}
        <View style={styles.card}>
          <View style={[styles.iconCircle, {backgroundColor: '#F3E5F5'}]}>
            <Ionicons name="checkmark-done-circle-outline" size={24} color="#9C27B0" />
          </View>
          <View>
            <Text style={styles.cardTitle}>Task-uri Complete</Text>
            <Text style={styles.cardValue}>5</Text>
            <Text style={styles.cardSub}>Acțiuni sustenabile realizate</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Evoluția ultimelor 7 zile</Text>
        <View style={styles.chartCard}>
           {/* Placeholder pentru grafic */}
           <View style={styles.chartPlaceholder}>
              <Ionicons name="trending-up" size={40} color="#A3D139" />
              <Text style={{color: '#999'}}>Grafic Progres</Text>
           </View>
        </View>

        <Text style={styles.sectionTitle}>Realizări personale</Text>
        <View style={styles.row}>
          <View style={styles.miniCard}>
            <View style={[styles.miniIconBox, {backgroundColor: '#FBE4C9'}]}><Ionicons name="calendar" size={20} color="#E67E22" /></View>
            <Text style={{fontSize: 10, textAlign: 'center'}}>Cel mai lung streak</Text>
            <Text style={{fontWeight: 'bold'}}>1 Zile</Text>
          </View>
          <View style={styles.miniCard}>
            <View style={[styles.miniIconBox, {backgroundColor: '#FFF9C4'}]}><Ionicons name="stats-chart" size={20} color="#FBC02D" /></View>
            <Text style={{fontSize: 10, textAlign: 'center'}}>Nivel actual</Text>
            <Text style={{fontWeight: 'bold'}}>Nivel 2</Text>
          </View>
          <View style={styles.miniCard}>
            <View style={[styles.miniIconBox, {backgroundColor: '#E8F5E9'}]}><Ionicons name="ribbon" size={20} color="#4CAF50" /></View>
            <Text style={{fontSize: 10, textAlign: 'center'}}>Total puncte</Text>
            <Text style={{fontWeight: 'bold'}}>195</Text>
          </View>
        </View>

        <View style={styles.greenBanner}>
          <Text style={styles.bannerTitle}>Continui pe drumul cel bun!🌍</Text>
          <Text style={styles.bannerText}>Fiecare acțiune contează pentru un viitor mai sustenabil. Împreună putem face diferența.</Text>
        </View>
      </ScrollView>

      {/* ---- Navigația de Jos ---- */}
      <View style={styles.bottomNav}>
        {/* Acasă ne duce pe prima pagină */}
        <NavIcon icon="home" label="Acasă" onPress={() => router.push('/experience')} />
        
        {/* Progres e activ pe această pagină */}
        <NavIcon icon="chart-line" label="Progres" active={true} type="FontAwesome" onPress={() => {}} />
        
        <NavIcon icon="trophy" label="Realizări" onPress={() => router.push('/realizari')} type="FontAwesome" />
        <NavIcon icon="users" label="Clasament" onPress={() => router.push('/clasament')} type="FontAwesome" />
        <NavIcon icon="user" label="Profil" onPress={() => router.push('/profile')} type="Feather" />
      </View>

    </SafeAreaView>
  );
};

// Componenta meniului curat (fără fundal la starea activă, include onPress)
const NavIcon = ({ icon, label, active, type, onPress }) => {
  const iconColor = active ? '#76A342' : '#666';

  return (
    <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={onPress}>
      {type === "FontAwesome" ? (
        <FontAwesome5 name={icon} size={22} color={iconColor} />
      ) : type === "Feather" ? (
        <Feather name={icon} size={22} color={iconColor} />
      ) : (
        <Ionicons name={icon} size={24} color={iconColor} />
      )}
      
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ProgresScreen;