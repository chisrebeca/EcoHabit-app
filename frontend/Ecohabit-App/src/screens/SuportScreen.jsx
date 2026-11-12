import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/SuportStyles';

const SuportScreen = () => {
  const router = useRouter();

  // Starea pentru filtrul FAQ activ
  const [activeFilter, setActiveFilter] = useState('Toate');

  // Categorii pentru meniul derulant (Filtre)
  const filters = ['Toate', 'Început', 'Gamificare', 'Calendar', 'Securitate'];

  // Baza de date cu întrebări frecvente
  const faqs = [
    { id: 1, question: "Cum completez un task?", category: "Început" },
    { id: 2, question: "Ce înseamnă streak?", category: "Gamificare" },
    { id: 3, question: "Cum funcționează notificările pentru gunoi?", category: "Început" },
    { id: 4, question: "Cum schimb programul de colectare?", category: "Calendar" },
    { id: 5, question: "Datele mele sunt sigure?", category: "Securitate" },
    { id: 6, question: "Cum cresc în nivel?", category: "Gamificare" },
    { id: 7, question: "Ce este Premium?", category: "Premium" },
    { id: 8, question: "Pot șterge contul?", category: "Cont" },
  ];

  // Logică de filtrare
  const filteredFaqs = activeFilter === 'Toate' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFilter);

  // Trimitere formular
  const handleSendMessage = () => {
    Alert.alert("Trimis!", "Mesajul tău a ajuns la noi. Îți vom răspunde în scurt timp pe email.");
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
            <FontAwesome5 name="question" size={20} color="#0E6251" />
          </View>
          <View>
            <Text style={styles.title}>Ajutor & Suport</Text>
            <Text style={styles.subtitle}>Găsește răspunsuri și contactează echipa</Text>
          </View>
        </View>

        {/* --- RESURSE UTILE --- */}
        <Text style={styles.sectionTitle}>Resurse utile</Text>
        
        <TouchableOpacity style={styles.resourceCard} activeOpacity={0.7}>
          <View style={[styles.resourceIconBox, { backgroundColor: '#D4E6F1' }]}>
            <Feather name="book-open" size={20} color="#2874A6" />
          </View>
          <View>
            <Text style={styles.resourceTitle}>Ghid Utilizare</Text>
            <Text style={styles.resourceSub}>Manual complet în română</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resourceCard} activeOpacity={0.7}>
          <View style={[styles.resourceIconBox, { backgroundColor: '#D1F2EB' }]}>
            <Feather name="video" size={20} color="#117A65" />
          </View>
          <View>
            <Text style={styles.resourceTitle}>Video Tutoriale</Text>
            <Text style={styles.resourceSub}>Învață vizual cum funcționează</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resourceCard} activeOpacity={0.7}>
          <View style={[styles.resourceIconBox, { backgroundColor: '#D5F5E3' }]}>
            <Feather name="globe" size={20} color="#239B56" />
          </View>
          <View>
            <Text style={styles.resourceTitle}>Blog Eco</Text>
            <Text style={styles.resourceSub}>Articole despre sustenabilitate</Text>
          </View>
        </TouchableOpacity>

        {/* --- ÎNTREBĂRI FRECVENTE --- */}
        <Text style={styles.sectionTitle}>Întrebări frecvente(FAQ)</Text>

        {/* Filtre Orizontale */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {filters.map((filter, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.filterPill, activeFilter === filter && styles.filterPillActive]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Lista FAQ (Filtrată) */}
        {filteredFaqs.map((faq) => (
          <TouchableOpacity key={faq.id} style={styles.faqCard} activeOpacity={0.7}>
            <View style={styles.faqIconBox}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>?</Text>
            </View>
            <View style={styles.faqTextContainer}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <View style={styles.faqBadge}>
                <Text style={styles.faqBadgeText}>{faq.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* --- FORMULAR DE CONTACT --- */}
        <Text style={[styles.formIntroTitle, {marginTop: 20}]}>Nu ai găsit răspunsul?</Text>
        <Text style={styles.formIntroSub}>Trimite-ne întrebarea ta</Text>

        <View style={styles.formCard}>
          <Text style={styles.inputLabel}>Nume</Text>
          <TextInput style={styles.input} placeholder="Value" placeholderTextColor="#AAA" />

          <Text style={styles.inputLabel}>Prenume</Text>
          <TextInput style={styles.input} placeholder="Value" placeholderTextColor="#AAA" />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} placeholder="Value" keyboardType="email-address" placeholderTextColor="#AAA" />

          <Text style={styles.inputLabel}>Ce vrei să aflii?</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Value" 
            multiline={true} 
            numberOfLines={4}
            placeholderTextColor="#AAA"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSendMessage}>
            <Text style={styles.submitButtonText}>Trimite-ne întrebarea ta</Text>
          </TouchableOpacity>
        </View>

        {/* --- ALTE MODALITĂȚI DE CONTACT --- */}
        <Text style={styles.sectionTitle}>Alte modalități de contact</Text>
        
        <TouchableOpacity style={styles.contactCard} activeOpacity={0.8}>
          <View style={styles.contactIconBox}>
            <Feather name="mail" size={18} color="#FFF" />
          </View>
          <View>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>@support.ecohabit.app</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard} activeOpacity={0.8}>
          <View style={styles.contactIconBox}>
            <Feather name="phone" size={18} color="#FFF" />
          </View>
          <View>
            <Text style={styles.contactLabel}>Telefon(L-V, 9-17)</Text>
            <Text style={styles.contactValue}>+40 123 456 789</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SuportScreen;