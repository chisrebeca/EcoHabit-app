import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import { ExperienceStyles as styles } from '../styles/ExperienceStyles';
import { useRouter } from 'expo-router'; 

const ExperienceScreen = () => {
  const router = useRouter(); 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerSubtitle}>Obiceiuri sustenabile, zi de zi</Text>
          <Text style={styles.mainTitle}>Ecohabit</Text>
        </View>

        {/* Carduri Statistici */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#E08E45' }]}>
               <Ionicons name="star" size={14} color="white" />
               <Text style={styles.statLabel}>Nivel</Text>
            <Text style={styles.statValue}>2</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#D437A9' }]}>
            <MaterialCommunityIcons name="fire" size={16} color="white" />
            <Text style={styles.statLabel}>Streak</Text>
            <Text style={styles.statValue}>1</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#76A342' }]}>
            <Ionicons name="trophy" size={16} color="white" />
            <Text style={styles.statLabel}>Puncte</Text>
            <Text style={styles.statValue}>134</Text>
          </View>
        </View>

        {/* Bare de Progres */}
        <View style={styles.whiteCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progres Nivel 2</Text>
            <Text style={styles.progressSubtext}>65 puncte până la nivelul 3</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '40%' }]} />
          </View>
        </View>

        <View style={styles.whiteCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progresul zilei</Text>
            <View style={styles.badgeCount}><Text style={styles.badgeText}>3/6</Text></View>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '55%' }]} />
          </View>
          <Text style={styles.infoText}>Încă 3 task-uri de completat</Text>
        </View>

        <Text style={styles.sectionTitle}>Task-uri zilnice</Text>

        <TaskItem 
          title="Folosește transportul public" 
          desc="Mergi la serviciu/școală cu transportul în comun astăzi"
          points="+50" tags={['Transport', '-2.5kg CO2']}
          icon="check-circle" iconColor="#B8E6B8" isCompleted={true}
        />

        <TaskItem 
          title="Oprește aparatele din priză" 
          desc="Mergi la serviciu/școală cu transportul în comun astăzi"
          points="+30" tags={['Energie', '-0.8kg CO2']}
          icon="power-plug" iconColor="#E2E85E" isCompleted={false} showButton={true}
        />

        <TaskItem 
          title="Evită plasticul de unică folosință" 
          desc="Nu cumpăra produse ambalate în plastic astăzi"
          points="+40" tags={['Deșeuri', '-0.5kg CO2']}
          icon="check-circle" iconColor="#B8E6B8" isCompleted={true}
        />

        <TaskItem 
          title="Duș scurt ( sub 5 minute)" 
          desc="Economisește apă făcând un duș rapid"
          points="+25" tags={['Apă', '-0.3kg CO2', '-40L apă']}
          icon="water" iconColor="#ADD8E6" isCompleted={false} showButton={true}
        />

        <TaskItem 
          title="Masă vegetariană" 
          desc="Alege o masă fără carne astăzi"
          points="+45" tags={['Alimentație', '-3kg CO2']}
          icon="check-circle" iconColor="#B8E6B8" isCompleted={true}
        />

        <TaskItem 
          title="Reciclează corect" 
          desc="Sortează deșeurile și pune-le la reciclare"
          points="+35" tags={['Deșeuri', '-1.2kg CO2']}
          icon="delete" iconColor="#B8E6B8" isCompleted={false} showButton={true}
        />

        <TouchableOpacity style={styles.successButton}>
          <Text style={styles.successButtonTitle}>Lucrare excelentă!</Text>
          <Text style={styles.successButtonSub}>Ai contribuit la un viitor mai verde astăzi!</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navigația de Jos */}
      <View style={styles.bottomNav}>
        {/* Acasă e activ pe această pagină */}
        <NavIcon icon="home" label="Acasă" active={true} onPress={() => {}} />
        <NavIcon icon="chart-line" label="Progres" type="FontAwesome" onPress={() => router.push('/progres')} />
        <NavIcon icon="trophy" label="Realizări" onPress={() => router.push('/realizari')} type="FontAwesome" />
        <NavIcon icon="users" label="Clasament" onPress={() => router.push('/clasament')} type="FontAwesome" />
        <NavIcon icon="user" label="Profil" onPress={() => router.push('/profile')} type="Feather" />
      </View>
    </SafeAreaView>
  );
};

// Componentă pentru fiecare Task
const TaskItem = ({ title, desc, points, tags, icon, iconColor, isCompleted, showButton }) => (
  <View style={[styles.taskCard, isCompleted && styles.taskCompletedBorder]}>
    <View style={styles.taskTopRow}>
      <View style={[styles.iconCircle, { backgroundColor: iconColor }]}>
        <MaterialCommunityIcons name={isCompleted ? "check" : icon} size={22} color={isCompleted ? "white" : "#4A6B32"} />
      </View>
      <View style={styles.taskTextContent}>
        <Text style={[styles.taskTitle, isCompleted && styles.textStrike]}>{title}</Text>
        <Text style={styles.taskDesc}>{desc}</Text>
      </View>
      <View style={styles.pointsBadge}><Text style={styles.pointsText}>{points}</Text></View>
    </View>
    <View style={styles.taskBottomRow}>
      <View style={styles.tagsContainer}>
        {tags.map((tag, i) => (
          <View key={i} style={[styles.tagBadge, { backgroundColor: tag.includes('CO2') ? '#E8F5E9' : tag === 'Alimentație' ? '#FCE4EC' : '#F0F0F0' }]}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      {showButton && !isCompleted && (
        <TouchableOpacity style={styles.completeBtn} activeOpacity={0.7}>
          <Text style={styles.completeBtnText}>Completat</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

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

export default ExperienceScreen;