import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E1EAD2' // Fundalul verde deschis specific aplicației
  },
  scrollContent: { 
    padding: 20, 
    paddingBottom: 110 // Spațiu gol la final ca să nu acopere meniul de jos
  },

  // Back Button & Header
  backButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10,
    marginBottom: 20
  },
  backText: { 
    fontSize: 15, 
    color: '#333',
    marginLeft: 5,
    fontWeight: '500'
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  subtitle: { 
    fontSize: 15, 
    color: '#666', 
    marginBottom: 25 
  },

  // Secțiuni (Text gri)
  sectionHeader: { 
    fontSize: 13, 
    color: '#888', 
    fontWeight: 'bold', 
    textTransform: 'uppercase', // Face textul cu litere mari automatically
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 10
  },

  // Card generic pentru o setare
  settingsItem: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2, // Spațiu mic între carduri, ele fiind lipite vizual
  },
  // Stiluri specifice pentru iconițe (Box-uri pastel)
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  
  // Informația setării (Titlu + Subtitlu)
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },

  // Butonul mare de Deconectare (Jos)
  logoutButton: {
    marginTop: 25,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#C0392B', // Culoare roșiatică pentru alertă
    backgroundColor: '#E8DED1', // Culoare pământie descrisă în design
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  logoutTitle: {
    color: '#C0392B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutSubtitle: {
    color: '#C0392B',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 3,
  },

  // ---- NAVIGAȚIA DE JOS (Identică cu celelalte pagini) ----
  bottomNav: {
    position: 'absolute', 
    bottom: 0, 
    flexDirection: 'row', 
    backgroundColor: 'white',
    paddingVertical: 10, 
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25, 
    justifyContent: 'space-around',
    width: '100%',
    elevation: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.1,
  },
  navItem: { 
    alignItems: 'center', 
    padding: 5,
    width: 65, 
  },
  navLabel: { 
    fontSize: 10, 
    color: '#666', 
    marginTop: 4 
  },
  navLabelActive: { 
    color: '#76A342', // Verdele de accent
    fontWeight: 'bold', 
  },
});