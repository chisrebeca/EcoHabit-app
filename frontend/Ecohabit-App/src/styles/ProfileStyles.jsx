import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E1EAD2' // Fundalul verde deschis al aplicației
  },
  scrollContent: { 
    padding: 20, 
    paddingBottom: 110 // Spațiu gol la final ca să nu acopere meniul de jos ultimul buton
  },

  // Header
  headerTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#000',
    marginTop: 10
  },
  headerSub: { 
    fontSize: 15, 
    color: '#666', 
    marginBottom: 20 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 12,
    color: '#333'
  },

  // Cardul principal (Utilizator + Grid)
  profileCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 2, // Umbră pentru Android
    shadowColor: '#000', // Umbră pentru iOS
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#76A342', // Verde eco
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  userDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },

  // Grid-ul cu 4 statistici (Nivel, Streak etc.)
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%', // Ia aproape jumătate din lățime ca să încapă 2 pe rând
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#444',
    marginLeft: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  // Secțiunea Impact Total
  impactCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  impactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  impactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  impactInfo: {
    flex: 1,
  },
  impactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  impactSub: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },

  // Butoane Acțiuni (Setări, Notificări)
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444',
  },

  // Card Premium (Gradient)
  premiumCard: {
    padding: 20,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  premiumHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  premiumDesc: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 15,
    lineHeight: 18,
  },
  premiumBtn: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  premiumBtnText: {
    color: '#8E44AD',
    fontWeight: 'bold',
    fontSize: 14,
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
    color: '#76A342',
    fontWeight: 'bold', 
  },
});