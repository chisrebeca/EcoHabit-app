import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
// Folosim Feather pentru iconițe, se potrivește cel mai bine cu designul minimalist
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { styles } from '../styles/SetariStyles'; // Asigură-te că drumul e corect
import { useRouter } from 'expo-router';

const SetariScreen = () => {
  const router = useRouter(); 

  // Componentă reutilizabilă pentru o setare
  const SettingsItem = ({ iconName, iconColor, iconBg, title, subtitle, onPress }) => (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
        <Feather name={iconName} size={22} color={iconColor} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#CCC" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Setări</Text>
        <Text style={styles.subtitle}>Personalizează aplicația</Text>

        {/* --- SECȚIUNEA PREFERINȚE --- */}
        <Text style={styles.sectionHeader}>Preferințe</Text>
        <SettingsItem 
          iconName="bell" 
          iconColor="#1A5276" // Albastru închis
          iconBg="#AED6F1" // Albastru pastel
          title="Notificări" 
          subtitle="Gestionază notificările" 
          onPress={() => router.push('/notificari')}
        />
        <SettingsItem 
          iconName="clock" 
          iconColor="#5B2C6F" // Mov închis
          iconBg="#E8DAEF" // Mov pastel
          title="Preferințe task-uri" 
          subtitle="Ore și zile active" 
          onPress={() => router.push('/preferinte')} // Am legat-o de pagina pe care ai făcut-o
        />
        <SettingsItem 
          iconName="calendar" 
          iconColor="#1D8348" // Verde închis
          iconBg="#D4E7B6" // Verde pastel specific
          title="Calendar ridicare gunoi" 
          subtitle="Programează evenimente" 
          onPress={() => router.push('/calendar')}
        />

        {/* --- SECȚIUNEA CONT --- */}
        <Text style={styles.sectionHeader}>Cont</Text>
        <SettingsItem 
          iconName="mail" 
          iconColor="#2874A6" // Alt albastru
          iconBg="#D6EAF8" // Alt albastru pastel
          title="Email" 
          subtitle="luca@gmail.com" 
        />
        <SettingsItem 
          iconName="lock" 
          iconColor="#A93226" // Roz/Roșu închis
          iconBg="#FADBD8" // Roz pastel
          title="Confidențialitate și date" 
          subtitle="GDPR & securitate" 
          onPress={() => router.push('/confidentialitate')}
        />

        {/* --- SECȚIUNEA GENERAL --- */}
        <Text style={styles.sectionHeader}>General</Text>
        <SettingsItem 
          iconName="globe" 
          iconColor="#512E5F" // Mov foarte închis
          iconBg="#D7BDE2" // Mov pastel
          title="Limbă" 
          subtitle="Română" 
          onPress={() => router.push('/limba')}
        />
        <SettingsItem 
          iconName="award" 
          iconColor="#9A7D0A" // Galben închis
          iconBg="#FCF3CF" // Galben pastel
          title="Premium" 
          subtitle="Upgrade contului tău" 
          onPress={() => router.push('/premium')}
        />
        <SettingsItem 
          iconName="headphones" 
          iconColor="#138D75" // Teal închis
          iconBg="#D1F2EB" // Teal pastel
          title="Ajutor & Suport" 
          subtitle="Programează evenimente" 
          onPress={() => router.push('/suport')}
        />

        {/* BUTON DECONECTARE (JOS) */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/login')}>
          <Feather name="log-out" size={24} color="#C0392B" />
          <View style={styles.logoutTextContainer}>
            <Text style={styles.logoutTitle}>Deconectare</Text>
            <Text style={styles.logoutSubtitle}>Ieși din contul tău</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#C0392B" />
        </TouchableOpacity>

      </ScrollView>

      {/* ---- Navigația de Jos ---- */}
      <View style={styles.bottomNav}>
        <NavIcon icon="home" label="Acasă" onPress={() => router.push('/experience')} />
        <NavIcon icon="chart-line" label="Progres" type="FontAwesome" onPress={() => router.push('/progres')} />
        <NavIcon icon="trophy" label="Realizări" type="FontAwesome" onPress={() => router.push('/realizari')} />
        <NavIcon icon="users" label="Clasament" type="FontAwesome" onPress={() => router.push('/clasament')} />
        
        {/* PROFIL ESTE ACTIV PE ACEASTĂ PAGINĂ (Deși e în Setări, ține de Profil) */}
        <NavIcon icon="user" label="Profil" active={true} type="Feather" onPress={() => router.push('/profile')} />
      </View>
    </SafeAreaView>
  );
};

// Componenta meniului (Aceeași ca pe toate paginile)
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

export default SetariScreen;