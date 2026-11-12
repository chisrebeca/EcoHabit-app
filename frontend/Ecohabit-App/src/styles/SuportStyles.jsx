import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Verdele pastel de fundal
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Buton Înapoi & Header
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
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#A3E4D7', // Verde-mentă pastel
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 25,
  },

  // Titluri Secțiuni
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15,
    marginTop: 10,
  },

  // Carduri Resurse (Albe, rotunjite)
  resourceCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  resourceIconBox: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  resourceTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  resourceSub: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },

  // Filtre FAQ
  filterScroll: {
    marginBottom: 15,
  },
  filterPill: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  filterPillActive: {
    backgroundColor: '#58D68D', // Verdele activ
    borderColor: '#58D68D',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },
  filterTextActive: {
    color: '#FFF',
  },

  // Carduri FAQ
  faqCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 12,
  },
  faqIconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1ABC9C', // Verdele din iconița de FAQ
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 2,
  },
  faqTextContainer: {
    flex: 1,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  faqBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  faqBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#444',
  },

  // Formular Contact
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  formIntroTitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  formIntroSub: {
    fontSize: 14,
    color: '#111',
    fontWeight: '500',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 13,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#FAFAFA',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Pentru Android, să înceapă textul de sus
  },
  submitButton: {
    backgroundColor: '#52BE80', // Verdele butonului
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Contact Rapid
  contactCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#58D68D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactLabel: {
    fontSize: 13,
    color: '#444',
  },
  contactValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  }
});