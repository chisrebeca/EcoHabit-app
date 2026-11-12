import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Verde pastel de fundal
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Buton Înapoi
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginLeft: 5,
  },

  // Header
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E8DAEF', // Mov pastel deschis
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },

  // Card Limba Curentă (Sus)
  activeLanguageCard: {
    backgroundColor: '#E8DAEF', // Fundal mov deschis
    borderWidth: 1.5,
    borderColor: '#AF7AC5', // Bordură mov mai închis
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  flagCircleActive: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#D7BDE2', // Mov mediu pentru cerc
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  flagTextActive: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A235A', // Mov foarte închis
  },
  activeLanguageInfo: {
    flex: 1,
  },
  activeLanguageLabel: {
    fontSize: 12,
    color: '#8E44AD', // Mov pentru "Limba curentă"
    fontWeight: '600',
    marginBottom: 2,
  },
  activeLanguageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },

  // Titlu Secțiune Listă
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },

  // Carduri Limbă din Listă
  languageRow: {
    backgroundColor: '#FFF', // Fundal alb
    borderWidth: 1,
    borderColor: '#D5DBDB',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  languageRowSelected: {
    backgroundColor: '#E8DAEF', // Fundal mov
    borderColor: '#AF7AC5', // Bordură mov
  },
  flagCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#F2F3F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  flagText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  languageInfo: {
    flex: 1,
  },
  languageNamePrimary: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  languageNameSecondary: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  // Badge "În curând"
  soonBadge: {
    backgroundColor: '#EAEDED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  soonBadgeText: {
    fontSize: 11,
    color: '#7B7D7D',
    fontWeight: '600',
  },

  // Banner Notă
  noteBanner: {
    backgroundColor: '#EBE2D3', // Bej/Gri-Gălbui deschis
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
  },
  noteText: {
    fontSize: 12,
    color: '#2874A6', // Albastru
    lineHeight: 18,
  },
  noteBold: {
    fontWeight: 'bold',
    color: '#1A5276',
  }
});