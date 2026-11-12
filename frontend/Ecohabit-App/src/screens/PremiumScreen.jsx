import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/PremiumStyles';

const PremiumScreen = () => {
  const router = useRouter();

  const handlePurchase = (plan) => {
    Alert.alert('Procesare plată', `Ai selectat planul ${plan}. Aici se va deschide Apple Pay / Google Pay.`);
  };

  // Sub-componentă curată pentru lista de beneficii
  const BenefitItem = ({ iconName, iconLib, bgColor, title, subtitle }) => (
    <View style={[styles.benefitCard, { backgroundColor: bgColor }]}>
      <View style={styles.benefitIconBox}>
        {iconLib === 'Material' ? (
          <MaterialCommunityIcons name={iconName} size={22} color="#222" />
        ) : (
          <Feather name={iconName} size={20} color="#222" />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.benefitTitle}>{title}</Text>
        <Text style={styles.benefitSub}>{subtitle}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Buton Înapoi */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setari')}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>

        {/* Header Premium */}
        <View style={styles.headerContainer}>
          <View style={styles.crownBox}>
            <MaterialCommunityIcons name="crown" size={40} color="#FFF" />
          </View>
          <Text style={styles.title}>EcoHabit Premium</Text>
          <Text style={styles.subtitle}>Deblochează potențialul complet al călătoriei tale eco</Text>
        </View>

        {/* Lista de Beneficii */}
        <Text style={styles.sectionTitle}>Ce obții cu Premium</Text>
        
        <BenefitItem 
          iconName="target" iconLib="Feather" bgColor="#E8DAEF"
          title="Task-uri Personalizate" subtitle="Creează task-uri custom adaptate stilului tău de viață" 
        />
        <BenefitItem 
          iconName="trending-up" iconLib="Feather" bgColor="#AED6F1" // Albastru pastel
          title="Rapoarte Avansate" subtitle="Statistici detaliate și rapoarte PDF exportabile" 
        />
        <BenefitItem 
          iconName="calendar" iconLib="Feather" bgColor="#D4E7B6" // Verde pastel
          title="Calendar Avansat" subtitle="Sincronizare cu Google Calendar și reminder-uri multiple" 
        />
        <BenefitItem 
          iconName="users" iconLib="Feather" bgColor="#f5b04163" // Portocaliu pastel
          title="Echipe & Provocări" subtitle="Competiții de grup și challenge-uri săptămânale" 
        />
        <BenefitItem 
          iconName="award" iconLib="Feather" bgColor="#f1c40f80" // Galben pastel
          title="Badge-uri Exclusive" subtitle="20+ achievements premium și recompense speciale" 
        />
        <BenefitItem 
          iconName="zap" iconLib="Feather" bgColor="#f8aea7" // Roșu pastel
          title="Fără Reclame" subtitle="Experiență fără reclame, pentru o concentrare maximă" 
        />

        {/* Planuri Tarifare */}
        <Text style={styles.sectionTitle}>Alege un Plan</Text>

        {/* Plan Lunar */}
        <View style={[styles.planCard, { borderColor: '#CCC', borderWidth: 1.5 }]}>
          <Text style={styles.planPrice}>29 RON / lună</Text>
          <TouchableOpacity 
            style={[styles.planButton, { backgroundColor: '#666' }]} 
            onPress={() => handlePurchase('Lunar')}
            activeOpacity={0.8}
          >
            <Text style={styles.planButtonText}>Upgradează la lunar</Text>
          </TouchableOpacity>
        </View>

        {/* Plan Anual (Evidențiat) */}
        <View style={[styles.planCard, { borderColor: '#FFB300', borderWidth: 2.5 }]}>
          <View style={styles.popularBadge}>
            <Text style={styles.popularBadgeText}>Cel mai popular</Text>
          </View>
          
          <Text style={styles.planPrice}>249 RON / an</Text>
          <Text style={styles.savingsText}>Economisește 30%</Text>
          
          <TouchableOpacity 
            style={[styles.planButton, { backgroundColor: '#FFB300' }]} 
            onPress={() => handlePurchase('Anual')}
            activeOpacity={0.8}
          >
            <Text style={styles.planButtonText}>Upgradează la anual</Text>
          </TouchableOpacity>
        </View>

        {/* Garanție */}
        <View style={styles.guaranteeCard}>
          <Text style={styles.guaranteeTitle}>Garanție 30 de zile</Text>
          <Text style={styles.guaranteeSub}>Dacă nu ești mulțumit, îți returnăm banii integral</Text>
        </View>

        {/* Link Gratuit */}
        <TouchableOpacity style={styles.continueFreeBtn} onPress={() => router.push('/experience')}>
          <Text style={styles.continueFreeText}>Continuă cu versiunea gratuită</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PremiumScreen;