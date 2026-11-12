import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Fundalul verde pastel
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Header & Buton Înapoi
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
    borderRadius: 12,
    backgroundColor: '#D6EAF8', // Albastru deschis pastel
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

  // Butonul de Export (Albastru)
  exportButton: {
    backgroundColor: '#4A85F6', // Albastru vibrant
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 2,
    shadowColor: '#4A85F6',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  exportButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  // Carduri pentru Date
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555',
  },

  // Rânduri cu Date (Cheie - Valoare)
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  dataLabel: {
    fontSize: 13,
    color: '#666',
    flex: 1,
  },
  dataValue: {
    fontSize: 13,
    color: '#333',
    textAlign: 'right',
    flex: 1.5,
  },

  // Bannere Info
  blueBanner: {
    backgroundColor: '#D1E4E0', // Verde-Albăstrui pastel
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#C0D6D0',
  },
  blueBannerText: {
    fontSize: 12,
    color: '#4A85F6',
    lineHeight: 18,
  },
  tanBanner: {
    backgroundColor: '#EBE2D3', // Bej/Maro pastel
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D8CBB6',
  },
  tanBannerText: {
    fontSize: 11,
    color: '#6E5D4A',
    textAlign: 'center',
    lineHeight: 16,
  },
});