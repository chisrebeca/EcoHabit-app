import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/ConfidentialitateStyles';

const ConfidentialitateScreen = () => {
  const router = useRouter();

  // Stările pentru setările de confidențialitate
  const [toggles, setToggles] = useState({
    colectare: true,
    analytics: true,
    personalizare: true,
    terti: false,
  });

  const toggleSwitch = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Sub-componentă pentru rândurile cu Switch
  const ToggleItem = ({ title, subtitle, value, onValueChange, isLast }) => (
    <View style={[styles.toggleRow, isLast && { borderBottomWidth: 0 }]}>
      <View style={styles.toggleTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      <Switch
        trackColor={{ false: '#D1D1D6', true: '#000000' }} // Gri / Negru
        thumbColor="#FFFFFF"
        ios_backgroundColor="#D1D1D6"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );

  // Sub-componentă pentru rândurile de Acțiuni
  const ActionItem = ({ iconName, iconColor, iconBg, title, subtitle, isLast, onPress }) => (
    <TouchableOpacity 
      style={[styles.actionRow, isLast && { borderBottomWidth: 0 }]} 
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[styles.actionIconBox, { backgroundColor: iconBg }]}>
        <Feather name={iconName} size={20} color={iconColor} />
      </View>
      <View style={styles.toggleTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  // Acțiune pentru Ștergere Cont
  const handleDeleteAccount = () => {
    Alert.alert(
      "Ștergere Cont",
      "Ești sigur că vrei să îți ștergi permanent contul și toate datele? Această acțiune este ireversibilă.",
      [
        { text: "Anulează", style: "cancel" },
        { text: "Șterge", style: "destructive", onPress: () => router.replace('/login') }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Buton Înapoi */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setari')}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>

        {/* Header Pagină */}
        <View style={styles.headerRow}>
          <View style={styles.headerIconBox}>
            <Feather name="shield" size={22} color="#E74C3C" />
          </View>
          <Text style={styles.title}>Confidențialitate & Date</Text>
        </View>
        <Text style={styles.subtitle}>Gestionează-ți datele personale</Text>

        {/* Banner GDPR */}
        <View style={styles.gdprBanner}>
          <View style={styles.gdprHeader}>
            <Feather name="unlock" size={16} color="#2874A6" />
            <Text style={styles.gdprTitle}>Conformitate GDPR</Text>
          </View>
          <Text style={styles.gdprText}>
            Ecohabit respectă regulamentul GDPR și îți oferă control complet asupra datelor tale. 
            Poți accesa, descărca sau șterge datele oricând.
          </Text>
        </View>

        {/* --- SETĂRI CONFIDENȚIALITATE --- */}
        <Text style={styles.sectionHeader}>SETĂRI CONFIDENȚIALITATE</Text>
        <View style={styles.card}>
          <ToggleItem 
            title="Colectare date" subtitle="Permite colectarea datelor pentru îmbunătățirea serviciului"
            value={toggles.colectare} onValueChange={() => toggleSwitch('colectare')} 
          />
          <ToggleItem 
            title="Analytics" subtitle="Analizează modul în care folosești aplicația"
            value={toggles.analytics} onValueChange={() => toggleSwitch('analytics')} 
          />
          <ToggleItem 
            title="Personalizare" subtitle="Folosește datele pentru recomandări personalizate"
            value={toggles.personalizare} onValueChange={() => toggleSwitch('personalizare')} 
          />
          <ToggleItem 
            title="Partajare cu terți" subtitle="Permite partajarea datelor cu parteneri"
            value={toggles.terti} onValueChange={() => toggleSwitch('terti')} isLast 
          />
        </View>

        {/* --- ACȚIUNI DATE --- */}
        <Text style={styles.sectionHeader}>ACȚIUNI DATE</Text>
        <View style={styles.card}>
          <ActionItem 
            iconName="eye" iconColor="#5DADE2" iconBg="#EBF5FB" 
            title="Vezi datele" subtitle="Accesează toate datele stocate" 
            onPress={() => router.push('/dateletale')}
          />
          <ActionItem 
            iconName="download" iconColor="#529759" iconBg="#D4E7B6" 
            title="Descarcă datele" subtitle="Primește o copie a datelor tale" isLast
            onPress={() => Alert.alert('Succes', 'Datele tale se descarcă...')}
          />
        </View>

        {/* --- ZONĂ PERICULOASĂ --- */}
        <Text style={[styles.sectionHeader, styles.sectionHeaderDanger]}>ZONĂ PERICULOASĂ</Text>
        <TouchableOpacity style={styles.dangerCard} onPress={handleDeleteAccount} activeOpacity={0.8}>
          <View style={styles.dangerIconBox}>
            <Feather name="trash-2" size={20} color="#C0392B" />
          </View>
          <View style={styles.dangerTextContainer}>
            <Text style={styles.dangerTitle}>Șterge contul</Text>
            <Text style={styles.dangerSubtitle}>Șterge permanent toate datele</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#E74C3C" />
        </TouchableOpacity>

        {/* --- FOOTER LINK-URI --- */}
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => Alert.alert('Politica')}>
            <Text style={styles.footerText}>Politica de confidențialitate</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>  •  </Text>
          <TouchableOpacity onPress={() => Alert.alert('Termeni')}>
            <Text style={styles.footerText}>Termeni și condiții</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfidentialitateScreen;