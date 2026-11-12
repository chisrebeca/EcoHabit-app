import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Verdele de fundal
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  
  // Header și Buton Înapoi
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D1E0E0', // Fundalul pentru clopoțelul mare
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 25,
  },

  // Secțiuni
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#D4E7B6', // Verde pastel pentru mini-iconițe
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },

  // Carduri albe care conțin rândurile cu setări
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden', // Pentru ca rândurile să nu depășească colțurile rotunjite
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  toggleTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 3,
  },

  // Butonul de Salvare
  saveButton: {
    backgroundColor: '#529759', // Verde principal
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Banner Sfat
  infoBanner: {
    backgroundColor: '#D6E4E1', // Albastru-gri deschis
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
  },
  infoText: {
    color: '#5DADE2', // Albastru pentru text
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },
  infoTextBold: {
    fontWeight: 'bold',
  },
});