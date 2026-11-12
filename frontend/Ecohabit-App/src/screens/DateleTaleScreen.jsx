import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/DateleTaleStyles';

const DateleTaleScreen = () => {
  const router = useRouter();

  // Funcția care simulează exportul JSON-ului
  const handleExport = () => {
    Alert.alert(
      "Export Date",
      "Datele tale au fost împachetate în format JSON și sunt gata de salvare/partajare.",
      [{ text: "OK" }]
    );
  };

  // Componentă reutilizabilă pentru a desena un card cu date
  const DataCard = ({ icon, iconType, title, headerBg, badgeBg, data }) => {
    const fieldsCount = data.length;
    
    return (
      <View style={styles.card}>
        <View style={[styles.cardHeader, { backgroundColor: headerBg }]}>
          <View style={styles.cardHeaderLeft}>
            {iconType === 'Material' ? (
              <MaterialCommunityIcons name={icon} size={22} color="#444" />
            ) : (
              <Feather name={icon} size={20} color="#444" />
            )}
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: badgeBg }]}>
            <Text style={styles.badgeText}>{fieldsCount} câmpuri</Text>
          </View>
        </View>

        {/* Generăm automat rândurile de date */}
        {data.map((item, index) => (
          <View 
            key={index} 
            style={[styles.dataRow, index === data.length - 1 && { borderBottomWidth: 0 }]}
          >
            <Text style={styles.dataLabel}>{item.label}</Text>
            <Text style={styles.dataValue} numberOfLines={1} ellipsizeMode="tail">
              {item.value}
            </Text>
          </View>
        ))}
      </View>
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
            <Feather name="eye" size={20} color="#2874A6" />
          </View>
          <Text style={styles.title}>Datele tale</Text>
        </View>
        <Text style={styles.subtitle}>Vizualizează și exportă toate datele personale</Text>

        {/* Buton Export JSON */}
        <TouchableOpacity style={styles.exportButton} onPress={handleExport} activeOpacity={0.8}>
          <Feather name="download" size={18} color="#FFF" />
          <Text style={styles.exportButtonText}>Exportă toate datele (JSON)</Text>
        </TouchableOpacity>

        {/* Card 1: Informații Cont */}
        <DataCard 
          icon="user" 
          title="Informații cont" 
          headerBg="#F4F6F8" // Gri-albastru foarte deschis
          badgeBg="#E1E8EE" 
          data={[
            { label: 'Email', value: 'luca@gmail.com' },
            { label: 'Nume', value: 'luca' },
            { label: 'Membru din', value: '2026-03-23T16:46:07:655Z' },
            { label: 'Locație', value: 'Cluj-Napoca' },
          ]}
        />

        {/* Card 2: Preferințe */}
        <DataCard 
          icon="sliders" 
          title="Preferințe" 
          headerBg="#F5EEF8" // Mov foarte deschis
          badgeBg="#E8DAEF" 
          data={[
            { label: 'Obiective', value: 'plastic, energie, apă, transport, mâncare' },
            { label: 'Nivel experiență', value: 'medium' },
            { label: 'Ora preferată', value: '21:00' },
            { label: 'Zile active', value: 'Cluj-Napoca' }, // Din poza ta
          ]}
        />

        {/* Card 3: Statistici */}
        <DataCard 
          icon="trophy-outline" 
          iconType="Material"
          title="Statistici" 
          headerBg="#E8F6F3" // Verde foarte deschis
          badgeBg="#D1F2EB" 
          data={[
            { label: 'Nivel curent', value: '2' },
            { label: 'Total puncte', value: '120' },
            { label: 'Streak curent', value: '2 zile' },
            { label: 'Best streak', value: '2 zile' },
            { label: 'Task-uri complete', value: '3' },
            { label: 'CO economisit', value: '3.8kg' },
            { label: 'Apă economisită', value: '0 L' },
          ]}
        />

        {/* Card 4: Activitate */}
        <DataCard 
          icon="calendar" 
          title="Activitate" 
          headerBg="#FEF5E7" // Portocaliu/Piersică foarte deschis
          badgeBg="#FDEBD0" 
          data={[
            { label: 'Task-uri active', value: '6' },
            { label: 'Task-uri completate azi', value: '3' },
            { label: 'Achievements deblocate', value: '1/8' },
            { label: 'Calendar evenimente', value: '5 programe' },
          ]}
        />

        {/* Bannere Informaționale */}
        <View style={styles.blueBanner}>
          <Text style={styles.blueBannerText}>
            <Text style={{fontWeight: 'bold'}}>💡 Confidențialitate: </Text>
            Toate datele tale sunt stocate local pe dispozitivul tău. Nu trimitem informații către servere externe.
          </Text>
        </View>

        <View style={styles.tanBanner}>
          <Text style={styles.tanBannerText}>
            Conform GDPR, ai dreptul să accesezi, modifici sau ștergi datele tale personale. 
            Poți exporta datele în format JSON folosind butonul de mai sus.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DateleTaleScreen;