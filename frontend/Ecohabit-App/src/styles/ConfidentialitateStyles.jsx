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
    backgroundColor: '#FADBD8', // Roz/Piersică pastel
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

  // Banner GDPR
  gdprBanner: {
    backgroundColor: '#D6EAF8', // Albastru deschis
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },
  gdprHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  gdprTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2874A6', // Albastru închis
    marginLeft: 8,
  },
  gdprText: {
    fontSize: 12,
    color: '#2874A6',
    lineHeight: 18,
    opacity: 0.9,
  },

  // Titluri Secțiuni
  sectionHeader: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  sectionHeaderDanger: {
    color: '#E74C3C', // Roșu pentru zona periculoasă
  },

  // Carduri albe (pentru setări și acțiuni)
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  
  // Rând cu Switch (Comutator)
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  // Rând pentru Acțiuni (Vezi date, Descarcă)
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  actionIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  // Zona Periculoasă (Șterge contul)
  dangerCard: {
    backgroundColor: '#F2D7D5', // Fundal roșiatic
    borderWidth: 1.5,
    borderColor: '#C0392B',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  dangerIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#E6B0AA', // Roșu un pic mai închis pentru box
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dangerTextContainer: {
    flex: 1,
  },
  dangerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#C0392B',
  },
  dangerSubtitle: {
    fontSize: 12,
    color: '#C0392B',
    opacity: 0.8,
    marginTop: 2,
  },

  // Footer Link-uri
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#529759', // Verdele aplicației
    textAlign: 'center',
  }
});