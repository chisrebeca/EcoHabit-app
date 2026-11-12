import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert, Modal, FlatList, ActivityIndicator } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/LocationStyles';

// Baza de date locală (Toate județele + Orașele principale)
const romaniaData = {
  "Alba": ["Alba Iulia", "Aiud", "Blaj", "Câmpeni", "Cugir", "Sebeș"],
  "Arad": ["Arad", "Chișineu-Criș", "Curtici", "Ineu", "Lipova", "Pâncota"],
  "Argeș": ["Pitești", "Câmpulung", "Curtea de Argeș", "Mioveni", "Topoloveni"],
  "Bacău": ["Bacău", "Onești", "Buhuși", "Comănești", "Dărmănești", "Moinești"],
  "Bihor": ["Oradea", "Salonta", "Marghita", "Săcueni", "Beiuș", "Aleșd"],
  "Bistrița-Năsăud": ["Bistrița", "Beclean", "Năsăud", "Sângeorz-Băi"],
  "Botoșani": ["Botoșani", "Dorohoi", "Darabani", "Săveni"],
  "Brașov": ["Brașov", "Codlea", "Făgăraș", "Săcele", "Zărnești", "Râșnov"],
  "Brăila": ["Brăila", "Faurei", "Ianca", "Însurăței"],
  "București": ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6"],
  "Buzău": ["Buzău", "Râmnicu Sărat", "Nehoiu", "Pogoanele"],
  "Caraș-Severin": ["Reșița", "Caransebeș", "Bocșa", "Oravița"],
  "Călărași": ["Călărași", "Oltenița", "Budești", "Fundulea"],
  "Cluj": ["Cluj-Napoca", "Turda", "Câmpia Turzii", "Dej", "Gherla", "Huedin"],
  "Constanța": ["Constanța", "Mangalia", "Medgidia", "Cernavodă", "Eforie"],
  "Covasna": ["Sfântu Gheorghe", "Târgu Secuiesc", "Covasna", "Întorsura Buzăului"],
  "Dâmbovița": ["Târgoviște", "Moreni", "Găești", "Pucioasa"],
  "Dolj": ["Craiova", "Băilești", "Calafat", "Filiași"],
  "Galați": ["Galați", "Tecuci", "Târgu Bujor", "Berești"],
  "Giurgiu": ["Giurgiu", "Bolintin-Vale", "Mihăilești"],
  "Gorj": ["Târgu Jiu", "Motru", "Rovinari", "Bumbești-Jiu"],
  "Harghita": ["Miercurea Ciuc", "Odorheiu Secuiesc", "Gheorgheni", "Toplița"],
  "Hunedoara": ["Deva", "Hunedoara", "Brad", "Lupeni", "Orăștie", "Petroșani"],
  "Ialomița": ["Slobozia", "Fetești", "Urziceni", "Țăndărei"],
  "Iași": ["Iași", "Pașcani", "Hârlău", "Târgu Frumos"],
  "Ilfov": ["Voluntari", "Pantelimon", "Buftea", "Popești-Leordeni", "Otopeni"],
  "Maramureș": ["Baia Mare", "Sighetu Marmației", "Borșa", "Vișeu de Sus"],
  "Mehedinți": ["Drobeta-Turnu Severin", "Orșova", "Baia de Aramă"],
  "Mureș": ["Târgu Mureș", "Reghin", "Sighișoara", "Târnăveni"],
  "Neamț": ["Piatra Neamț", "Roman", "Târgu Neamț", "Bicaz"],
  "Olt": ["Slatina", "Caracal", "Balș", "Corabia"],
  "Prahova": ["Ploiești", "Câmpina", "Băicoi", "Breaza", "Sinaia"],
  "Satu Mare": ["Satu Mare", "Carei", "Negrești-Oaș", "Tășnad"],
  "Sălaj": ["Zalău", "Șimleu Silvaniei", "Jibou", "Cehu Silvaniei"],
  "Sibiu": ["Sibiu", "Mediaș", "Cisnădie", "Agnita", "Avrig"],
  "Suceava": ["Suceava", "Fălticeni", "Rădăuți", "Câmpulung Moldovenesc", "Vatra Dornei"],
  "Teleorman": ["Alexandria", "Roșiorii de Vede", "Turnu Măgurele", "Zimnicea"],
  "Timiș": ["Timișoara", "Lugoj", "Sânnicolau Mare", "Jimbolia", "Buziaș"],
  "Tulcea": ["Tulcea", "Babadag", "Măcin", "Sulina"],
  "Vaslui": ["Vaslui", "Bârlad", "Huși", "Murgeni"],
  "Vâlcea": ["Râmnicu Vâlcea", "Drăgășani", "Băbeni", "Călimănești"],
  "Vrancea": ["Focșani", "Adjud", "Mărășești", "Odobești", "Panciu"]
};

const CalendarGunoiScreen = () => {
  const router = useRouter();

  // Stările pentru formular
  const [judet, setJudet] = useState('');
  const [oras, setOras] = useState('');
  const [adresa, setAdresa] = useState('');

  // Stările pentru Pop-up-uri (Modale)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('judet'); // 'judet' sau 'oras'
  
  // Starea pentru butonul de salvare
  const [isVerifying, setIsVerifying] = useState(false);

  const judeteList = Object.keys(romaniaData).sort();
  const oraseList = judet ? romaniaData[judet].sort() : [];

  // Deschide modalul
  const openModal = (type) => {
    if (type === 'oras' && !judet) {
      Alert.alert("Atenție", "Te rugăm să selectezi mai întâi județul.");
      return;
    }
    setModalType(type);
    setModalVisible(true);
  };

  // Selectează elementul din listă
  const handleSelect = (item) => {
    if (modalType === 'judet') {
      setJudet(item);
      setOras(''); // Resetăm orașul când schimbăm județul
    } else {
      setOras(item);
    }
    setModalVisible(false);
  };

  // Simularea validării adresei
  const handleSaveLocation = () => {
    if (!judet || !oras || adresa.trim().length < 5) {
      Alert.alert("Eroare", "Te rugăm să completezi o adresă validă completă.");
      return;
    }

    setIsVerifying(true);

    // Simulăm că aplicația caută pe Google Maps dacă adresa există (durează 1.5 secunde)
    setTimeout(() => {
      setIsVerifying(false);

      // Verificare falsă: dacă utilizatorul scrie "Test" sau ceva prea scurt, dă eroare
      if (adresa.toLowerCase().includes('strada') || adresa.toLowerCase().includes('str.')) {
        Alert.alert(
          "Succes!", 
          `Locația a fost confirmată și salvată:\n${adresa}, ${oras}, Jud. ${judet}`,
          [{ text: "OK", onPress: () => router.push('/calendar') }]
        );
      } else {
        Alert.alert(
          "Adresă invalidă", 
          "Sistemul nu a putut găsi această adresă pe hartă. Asigură-te că ai inclus strada și numărul (ex: Str. Florilor, Nr. 5)."
        );
      }
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Buton Înapoi */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/calendar')}>
          <Feather name="arrow-left" size={20} color="#333" />
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerIconBox}>
            <Feather name="calendar" size={24} color="#000" />
          </View>
          <Text style={styles.title}>Calendar ridicare gunoi</Text>
        </View>

        {/* Card Formular */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.locationIconBox}>
              <Ionicons name="location" size={24} color="#FFF" />
            </View>
            <View>
              <Text style={styles.cardTitle}>Selectează locația</Text>
              <Text style={styles.cardSubtitle}>Pentru programul corect de colectare</Text>
            </View>
          </View>

          {/* Input Județ */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Selectează județul</Text>
            <TouchableOpacity style={styles.inputBox} onPress={() => openModal('judet')} activeOpacity={0.8}>
              <Text style={[styles.inputText, !judet && styles.inputTextPlaceholder]}>
                {judet || "Alege județul..."}
              </Text>
              <Feather name="chevron-down" size={20} color="#888" />
            </TouchableOpacity>
          </View>

          {/* Input Oraș/Sat */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Selectează orașul/satul</Text>
            <TouchableOpacity style={styles.inputBox} onPress={() => openModal('oras')} activeOpacity={0.8}>
              <Text style={[styles.inputText, !oras && styles.inputTextPlaceholder]}>
                {oras || "Alege orașul..."}
              </Text>
              <Feather name="chevron-down" size={20} color="#888" />
            </TouchableOpacity>
          </View>

          {/* Input Adresa */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Adresa exactă:</Text>
            <View style={[styles.inputBox, { paddingVertical: 0 }]}>
              <TextInput 
                style={[styles.inputText, { flex: 1, paddingVertical: 14 }]}
                placeholder="Ex: Str. Primaverii, Nr. 10"
                placeholderTextColor="#AAA"
                value={adresa}
                onChangeText={setAdresa}
                editable={!!oras} // Permite scrierea doar după ce s-a ales orașul
              />
            </View>
          </View>

          {/* Buton Salvare */}
          <TouchableOpacity 
            style={[styles.saveButton, (!judet || !oras || !adresa) && styles.saveButtonDisabled]}
            disabled={!judet || !oras || !adresa || isVerifying}
            onPress={handleSaveLocation}
          >
            {isVerifying ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.saveButtonText}>Salvează locația</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Banner Info */}
        <View style={styles.infoBanner}>
          <Text style={styles.infoText}>
            <Text style={styles.infoTextBold}>💡 Sfat: </Text> 
            Pentru cea mai bună experiență, recomandăm să activezi cel puțin reminder-ul zilnic și notificările pentru colectarea gunoiului.
          </Text>
        </View>

      </ScrollView>

      {/* MODAL PENTRU SELECȚIE JUDEȚ/ORAȘ */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {modalType === 'judet' ? 'Alege Județul' : 'Alege Orașul'}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Feather name="x" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            <FlatList 
              data={modalType === 'judet' ? judeteList : oraseList}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => handleSelect(item)}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default CalendarGunoiScreen;