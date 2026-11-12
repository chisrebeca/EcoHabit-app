import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/ClasamentStyles';
import { useRouter } from 'expo-router';

const ClasamentScreen = () => {
  const router = useRouter();

  // Componentă reutilizabilă pentru elementele din clasament
  const RankItem = ({ rank, name, level, points, gradientColors, textColor = '#333', rankColor = '#FFF', isUser = false }) => (
    <LinearGradient colors={gradientColors} style={styles.rankCard} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <Text style={[styles.rankNumber, { color: rankColor }]}>#{rank}</Text>
      <View style={styles.rankAvatar}>
        <Ionicons name="person" size={24} color="#CCC" />
      </View>
      <View style={styles.rankInfo}>
        <Text style={[styles.rankName, { color: textColor }]}>{name}</Text>
        <View style={styles.badgesRow}>
          {/* Pe cardurile Top 3 și cel evidențiat, stilizăm badge-urile subtil diferit */}
          <View style={[styles.levelBadge, isUser ? {backgroundColor: 'rgba(255,255,255,0.3)'} : {backgroundColor: 'rgba(0,0,0,0.1)'}]}>
            <Text style={[styles.levelText, isUser && {color: '#FFF'}]}>Nivel {level}</Text>
          </View>
          <Text style={[styles.pointsText, { alignSelf: 'center', color: isUser ? '#FFF' : '#555' }]}>{points} puncte</Text>
        </View>
      </View>
      {/* Adăugăm cupa doar pentru locul 1 */}
      {rank === 1 && <Ionicons name="trophy" size={24} color="#D4AC0D" style={{ marginRight: 10 }} />}
    </LinearGradient>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.headerTitle}>Clasament</Text>
        <Text style={styles.headerSub}>Compară-te cu alți utilizatori</Text>

        {/* Card Poziția Ta */}
        <View style={styles.myPositionCard}>
          <View style={styles.myPositionHeader}>
            <Text style={styles.myPositionTitle}>Poziția ta</Text>
            <View style={styles.myPositionBadge}>
              <Text style={styles.myPositionBadgeText}>#8</Text>
            </View>
          </View>
          <View style={styles.userRow}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={30} color="#CCC" />
            </View>
            <View>
              <Text style={styles.userName}>Tu</Text>
              <View style={styles.badgesRow}>
                <View style={styles.levelBadge}><Text style={styles.levelText}>Nivel 2</Text></View>
                <View style={styles.pointsBadge}><Text style={styles.pointsText}>195 puncte</Text></View>
              </View>
            </View>
          </View>
        </View>

        {/* TOP 3 */}
        <Text style={styles.sectionTitle}>Top 3</Text>
        <RankItem rank={1} name="Ana Maria" level={14} points="3250" gradientColors={['#F9E79F', '#D4AC0D']} />
        <RankItem rank={2} name="Mihai Ionescu" level={12} points="2780" gradientColors={['#E5E8E8', '#7F8C8D']} />
        <RankItem rank={3} name="Elena Popescu" level={10} points="1950" gradientColors={['#F5CBA7', '#A04000']} textColor="#FFF" />

        {/* CLASAMENT COMPLET */}
        <Text style={styles.sectionTitle}>Clasament complet</Text>
        <RankItem rank={4} name="Andrei Dumitrescu" level={9} points="1720" gradientColors={['#D5DBDB', '#B2BABB']} rankColor="#888" />
        <RankItem rank={5} name="Cristina Stancu" level={8} points="1240" gradientColors={['#D5DBDB', '#B2BABB']} rankColor="#888" />
        <RankItem rank={6} name="Vlad Marin" level={5} points="940" gradientColors={['#D5DBDB', '#B2BABB']} rankColor="#888" />
        <RankItem rank={7} name="Diana Radu" level={4} points="520" gradientColors={['#D5DBDB', '#B2BABB']} rankColor="#888" />
        
        {/* Utilizatorul curent evidențiat */}
        <RankItem rank={8} name="Tu" level={2} points="195" gradientColors={['#A9DFBF', '#27AE60']} textColor="#FFF" isUser={true} />

        {/* Banner Mov */}
        <LinearGradient colors={['#9B59B6', '#8E44AD']} style={styles.purpleBanner}>
          <Text style={styles.bannerTitle}>Urcă în clasament! 🚀</Text>
          <Text style={styles.bannerText}>
            Completează task-uri zilnice și urcă în topul utilizatorilor eco!
          </Text>
        </LinearGradient>

      </ScrollView>

      {/* ---- Navigația de Jos ---- */}
      <View style={styles.bottomNav}>
        <NavIcon icon="home" label="Acasă" onPress={() => router.push('/experience')} />
        <NavIcon icon="chart-line" label="Progres" type="FontAwesome" onPress={() => router.push('/progres')} />
        <NavIcon icon="trophy" label="Realizări" type="FontAwesome" onPress={() => router.push('/realizari')} />
        
        {/* CLASAMENT ESTE ACTIV AICI */}
        <NavIcon icon="users" label="Clasament" active={true} type="FontAwesome" onPress={() => {}} />
        
        <NavIcon icon="user" label="Profil" type="Feather" onPress={() => router.push('/profile')} />
      </View>
    </SafeAreaView>
  );
};

// Componenta meniului
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

export default ClasamentScreen;