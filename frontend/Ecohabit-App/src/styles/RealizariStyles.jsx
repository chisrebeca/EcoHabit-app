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
    marginBottom: 20 
},
  
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    marginTop: 20, 
    marginBottom: 10 
},

  // Card mare de progres total
  totalCard: {
    backgroundColor: '#F9E79F', // Galben pal
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1C40F',
  },

  // Card standard de realizare
  card: {
    backgroundColor: '#F4F9EC',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#D4E7B6',
  },
  unlockedCard: { 
    backgroundColor: '#FDEBD0', 
    borderColor: '#F5B041' 
}, // Portocaliu pentru deblocat

  iconCircle: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: '#D5DBDB', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
},
  unlockedIcon: { 
    backgroundColor: '#FAD7A0' 
},

  cardInfo: { 
    flex: 1 
},
  badgeHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
},
  badgeTitle: { 
    fontSize: 16, 
    fontWeight: 'bold' 
},
  badgeDesc: { 
    fontSize: 12, 
    color: '#666', 
    marginBottom: 8 
},
  
  statusTag: { 
    backgroundColor: '#F39C12', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 10 
},
  statusText: { 
    color: '#FFF', 
    fontSize: 10, 
    fontWeight: 'bold' 
},

  // Barele de progres
  progressContainer: { 
    height: 8, 
    backgroundColor: '#E5E8E8', 
    borderRadius: 4, 
    width: '100%', 
    overflow: 'hidden' 
},
  progressBar: { 
    height: '100%', 
    backgroundColor: '#566573', 
    borderRadius: 4 
}, // Gri închis pentru progres
  
  progressLabels: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 5 
},
  progressValue: { 
    fontSize: 12, 
    color: '#666' 
},

  // Banner Mov
  purpleBanner: { 
    marginTop: 20,
    borderRadius: 20, 
    padding: 25, 
    alignItems: 'center',
    backgroundColor: '#8E44AD', // Mov gradient placeholder
  },
  bannerTitle: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
},
  bannerText: { 
    color: '#D7BDE2', 
    fontSize: 12, 
    textAlign: 'center', 
    marginTop: 8 
},
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