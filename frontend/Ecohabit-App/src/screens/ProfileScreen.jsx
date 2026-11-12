import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 
import { styles } from '../styles/ProfileStyles'; 
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter(); 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Profilul meu</Text>
        <Text style={styles.headerSub}>Gestionează contul tău</Text>

        {/* Card Principal de Profil */}
        <View style={styles.profileCard}>
          <View style={styles.userInfoRow}>
            <View style={styles.avatarPlaceholder}>
              <Feather name="user" size={35} color="white" />
            </View>
            <View>
              <Text style={styles.userName}>Utilizator EcoHabit</Text>
              <Text style={styles.userDate}>Membru din 30 martie 2026</Text>
            </View>
          </View>

          <View style={styles.statsGrid}>
            <View style={[styles.statBox, { backgroundColor: '#F0F4B8' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="star" size={16} color="#444" />
                <Text style={styles.statLabel}>Nivel</Text>
              </View>
              <Text style={styles.statValue}>2</Text>
            </View>

            <View style={[styles.statBox, { backgroundColor: '#F0E0C0' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="flame" size={16} color="#444" />
                <Text style={styles.statLabel}>Streak actual</Text>
              </View>
              <Text style={styles.statValue}>1 zile</Text>
            </View>

            <View style={[styles.statBox, { backgroundColor: '#D8D0D8' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="trophy" size={16} color="#444" />
                <Text style={styles.statLabel}>Realizări</Text>
              </View>
              <Text style={styles.statValue}>1/8</Text>
            </View>

            <View style={[styles.statBox, { backgroundColor: '#C8E0B0' }]}>
              <View style={styles.statHeader}>
                <Ionicons name="checkmark-circle" size={16} color="#444" />
                <Text style={styles.statLabel}>Task-uri</Text>
              </View>
              <Text style={styles.statValue}>5</Text>
            </View>
          </View>
        </View>

        {/* Secțiunea Impact */}
        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Impactul tău total</Text>
          
          <ImpactItem 
            label="CO₂ Economisit" 
            sub="Echivalent cu plantarea a 0 copaci" 
            value="7.5 kg" 
            color="#D4E8B0" 
          />
          <ImpactItem 
            label="Apă Economisită" 
            sub="Echivalent cu 4 dușuri" 
            value="40 L" 
            color="#D0E0F0" 
          />
          <ImpactItem 
            label="Total Puncte" 
            sub="Cel mai lung streak: 1 zile" 
            value="195" 
            color="#F8F4D0" 
            isLast
          />
        </View>

        {/* Secțiunea Acțiuni */}
        <Text style={styles.sectionTitle}>Acțiuni</Text>
        
        {/* AICI ESTE LEGĂTURA CĂTRE SETĂRI 👇 */}
        <ActionButton 
          icon={<Feather name="settings" size={22} color="#444"/>} 
          label="Setări" 
          onPress={() => router.push('/setari')} 
        />
        
        <ActionButton 
          icon={<Feather name="bell" size={22} color="#444"/>} 
          label="Notificări" 
          onPress={() => Alert.alert('Notificări', 'Nu ai nicio notificare nouă.')}
        />
        
        <ActionButton 
          icon={<Feather name="share-2" size={22} color="#444"/>} 
          label="Distribuie progresul" 
          onPress={() => Alert.alert('Share', 'Aici se va deschide meniul de share.')}
        />
        
        {/* Buton Resetare Roșu */}
        <TouchableOpacity 
          style={[styles.actionButton, {backgroundColor: '#E8DED1', marginTop: 10}]}
          onPress={() => Alert.alert('Resetare', 'Ești sigur că vrei să resetezi task-urile?')}
        >
           <Feather name="rotate-ccw" size={22} color="#C0392B"/>
           <Text style={[styles.actionText, {color: '#C0392B', marginLeft: 15}]}>Resetează task-urile zilnice</Text>
        </TouchableOpacity>

        {/* Upgrade Premium */}
        <LinearGradient
          colors={['#8E44AD', '#673AB7']}
          style={styles.premiumCard}
        >
          <View style={styles.premiumHeader}>
            <Text style={styles.premiumTitle}>Upgrade la Premium</Text>
            <Ionicons name="star" color="white" size={24} />
          </View>
          <Text style={styles.premiumDesc}>
            Deblochează statistici avansate, task-uri personalizate și mult mai mult!
          </Text>
          <TouchableOpacity style={styles.premiumBtn} onPress={() => router.push('/premium')}>
            <Text style={styles.premiumBtnText}>Află mai multe</Text>
          </TouchableOpacity>
        </LinearGradient>

      </ScrollView>

      {/* ---- Navigația de Jos ---- */}
      <View style={styles.bottomNav}>
        <NavIcon icon="home" label="Acasă" onPress={() => router.push('/experience')} />
        <NavIcon icon="chart-line" label="Progres" type="FontAwesome" onPress={() => router.push('/progres')} />
        <NavIcon icon="trophy" label="Realizări" type="FontAwesome" onPress={() => router.push('/realizari')} />
        <NavIcon icon="users" label="Clasament" type="FontAwesome" onPress={() => router.push('/clasament')} />
        
        {/* PROFIL ESTE ACTIV AICI */}
        <NavIcon icon="user" label="Profil" active={true} type="Feather" onPress={() => {}} />
      </View>

    </SafeAreaView>
  );
};

// Componente ajutătoare (Sub-views)
const ImpactItem = ({ label, sub, value, color, isLast }) => (
  <View style={[styles.impactRow, isLast && { borderBottomWidth: 0 }]}>
    <View style={styles.impactInfo}>
      <Text style={styles.impactLabel}>{label}</Text>
      <Text style={styles.impactSub}>{sub}</Text>
    </View>
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  </View>
);

// 👇 AICI AM REPARAT ACTION BUTTON CA SĂ ACCEPTE ONPRESS 👇
const ActionButton = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.actionButton} onPress={onPress}>
    {icon}
    <Text style={[styles.actionText, {marginLeft: 15}]}>{label}</Text>
  </TouchableOpacity>
);

// Componenta meniului de jos
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

export default ProfileScreen;