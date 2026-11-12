import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E1EAD2' 
  },
  scrollContent: { 
    padding: 20, 
    paddingBottom: 100 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 25 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginBottom: 15, 
    marginTop: 10 
  },
  
  // Cardurile de sus
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  iconCircle: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
  },
  cardTitle: { 
    fontSize: 14, 
    color: '#666' 
  },
  cardValue: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  cardSub: { 
    fontSize: 12, 
    color: '#999' 
  },

  // Grafic
  chartCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 20, 
    padding: 20, 
    marginBottom: 20 
  },
  chartPlaceholder: { 
    height: 150, 
    width: '100%', 
    borderLeftWidth: 1, 
    borderBottomWidth: 1, 
    borderColor: '#DDD', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  // Realizări (cele 3 mici)
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  miniCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    padding: 10, 
    width: '31%', 
    alignItems: 'center' 
  },
  miniIconBox: { 
    width: '100%', 
    height: 35, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 8 
  },

  // Banner verde jos
  greenBanner: { 
    backgroundColor: '#4A8C54', 
    borderRadius: 20, 
    padding: 20, 
    alignItems: 'center' 
  },
  bannerTitle: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  bannerText: { 
    color: '#E1EAD2', 
    fontSize: 13, 
    textAlign: 'center', 
    marginTop: 5 
  },

  /* ---- NAVIGAȚIA DE JOS ---- */
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
    color: '#76A342',
    fontWeight: 'bold', 
  },
});