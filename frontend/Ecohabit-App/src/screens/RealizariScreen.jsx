import React from 'react';
// Am adăugat TouchableOpacity de care are nevoie NavIcon
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
// Am adăugat seturile de iconițe de care are nevoie NavIcon
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { styles } from '../styles/RealizariStyles';
// Am adăugat routerul pentru navigație
import { useRouter } from 'expo-router';

const RealizariScreen = () => {
  const router = useRouter(); // Inițializăm routerul

  // Funcție pentru a randa o bară de progres reutilizabilă
  const ProgressBar = ({ current, total, color = '#566573' }) => {
    const percentage = Math.min((current / total) * 100, 100);
    return (
      <View style={{ width: '100%', marginTop: 5 }}>
        <View style={styles.progressLabels}>
          <Text style={styles.progressValue}>{current} / {total}</Text>
          <Text style={styles.progressValue}>{Math.round(percentage)}%</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${percentage}%`, backgroundColor: color }]} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Realizări</Text>
        <Text style={styles.subtitle}>Colectează toate badge-urile</Text>

        {/* Progres Total */}
        <View style={styles.totalCard}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14 }}>Progres total</Text>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#E74C3C' }}>1/8</Text>
            <ProgressBar current={1} total={8} color="#000" />
            <Text style={{ fontSize: 11, color: '#666', marginTop: 5 }}>Încă 7 realizări de deblocat</Text>
          </View>
          <Ionicons name="trophy" size={50} color="#F1C40F" style={{ marginLeft: 15 }} />
        </View>

        <Text style={styles.sectionTitle}>Începător</Text>
        <View style={[styles.card, styles.unlockedCard]}>
          <View style={[styles.iconCircle, styles.unlockedIcon]}>
            <Ionicons name="leaf" size={24} color="#F39C12" />
          </View>
          <View style={styles.cardInfo}>
            <View style={styles.badgeHeader}>
              <Text style={styles.badgeTitle}>Primii pași</Text>
              <View style={styles.statusTag}><Text style={styles.statusText}>Deblocat</Text></View>
            </View>
            <Text style={styles.badgeDesc}>Completează prima ta acțiune sustenabilă</Text>
            <ProgressBar current={1} total={1} color="#000" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Consistență</Text>
        <View style={styles.card}>
          <View style={styles.iconCircle}><Ionicons name="calendar-outline" size={24} color="#999" /></View>
          <View style={styles.cardInfo}>
            <Text style={styles.badgeTitle}>Săptămâna verde</Text>
            <Text style={styles.badgeDesc}>Menține un streak de 7 zile</Text>
            <ProgressBar current={1} total={7} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Progres</Text>
        <View style={styles.card}>
          <View style={styles.iconCircle}><Ionicons name="medal-outline" size={24} color="#999" /></View>
          <View style={styles.cardInfo}>
            <Text style={styles.badgeTitle}>Eco Warrior</Text>
            <Text style={styles.badgeDesc}>Completează 50 de task-uri</Text>
            <ProgressBar current={5} total={50} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Impact</Text>
        <View style={styles.card}>
          <View style={styles.iconCircle}><Ionicons name="earth-outline" size={24} color="#999" /></View>
          <View style={styles.cardInfo}>
            <Text style={styles.badgeTitle}>Salvator de carbon</Text>
            <Text style={styles.badgeDesc}>Economisește 100kg de CO2</Text>
            <ProgressBar current={7} total={100} />
          </View>
        </View>

        <View style={styles.purpleBanner}>
          <Text style={styles.bannerTitle}>Lucrare excelentă!</Text>
          <Text style={styles.bannerText}>Ai deblocat 1 realizări. Continuă să faci progrese și să colectezi toate badge-urile.</Text>
        </View>
      </ScrollView>

      {/* ---- Navigația de Jos ---- */}
      <View style={styles.bottomNav}>
        {/* Acasă ne duce pe prima pagină. Am lăsat '/experience' cum era în poza ta */}
        <NavIcon icon="home" label="Acasă" onPress={() => router.push('/experience')} />
        
        {/* Progres te duce pe pagina progres */}
        <NavIcon icon="chart-line" label="Progres" type="FontAwesome" onPress={() => router.push('/progres')} />
        
        {/* REALIZĂRI ESTE ACTIV PE ACEASTĂ PAGINĂ */}
        <NavIcon icon="trophy" label="Realizări" active={true} type="FontAwesome" onPress={() => router.push('/realizari')} />
        
        <NavIcon icon="users" label="Clasament" onPress={() => router.push('/clasament')} type="FontAwesome" />
        <NavIcon icon="user" label="Profil" onPress={() => router.push('/profile')} type="Feather" />
      </View>
    </SafeAreaView>
  );
};

// Componenta meniului a fost adăugată aici
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

export default RealizariScreen;