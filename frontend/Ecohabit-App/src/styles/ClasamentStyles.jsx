import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Culoarea de fundal a aplicației
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 110, 
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  headerSub: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 25,
    marginBottom: 15,
  },

  // Card "Poziția ta"
  myPositionCard: {
    borderWidth: 1.5,
    borderColor: '#76A342',
    backgroundColor: '#E2E9D7', // transparent sau la fel ca fundalul
    borderRadius: 20,
    padding: 15,
  },
  myPositionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  myPositionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  myPositionBadge: {
    backgroundColor: '#76A342',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  myPositionBadgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 8,
  },
  levelBadge: {
    backgroundColor: '#D0DBC2',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  levelText: {
    fontSize: 10,
    color: '#555',
    fontWeight: '600',
  },
  pointsBadge: {
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  pointsText: {
    fontSize: 10,
    color: '#D4AC0D',
    fontWeight: 'bold',
  },

  // Carduri Liste (Top 3 și Clasament)
  rankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 25, // Formă de pilulă
    marginBottom: 10,
  },
  rankNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    width: 35,
    textAlign: 'center',
  },
  rankAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rankInfo: {
    flex: 1,
  },
  rankName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },

  // Banner Mov
  purpleBanner: {
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bannerText: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 18,
  },

  // Navigația de Jos
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