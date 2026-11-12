import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Buton Înapoi
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    marginBottom: 30,
  },
  headerIconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#7DCEA0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  // Card Principal
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  locationIconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#A9DFBF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },

  // Inputs
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#222',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputBox: {
    backgroundColor: '#F8F9F9',
    borderWidth: 1,
    borderColor: '#EAECEE',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 14,
    color: '#333',
  },
  inputTextPlaceholder: {
    color: '#AAA',
  },

  // Buton Salvare
  saveButton: {
    backgroundColor: '#7DCEA0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonDisabled: {
    backgroundColor: '#D5DBDB',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Sfat Banner
  infoBanner: {
    backgroundColor: '#D1E4E0',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#B2D0C6',
  },
  infoText: {
    color: '#5DADE2',
    fontSize: 13,
    lineHeight: 18,
  },
  infoTextBold: {
    fontWeight: 'bold',
  },

  // MODAL (Pentru selecție)
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: height * 0.6,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  }
});