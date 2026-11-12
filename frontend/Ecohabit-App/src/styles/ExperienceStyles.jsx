import { StyleSheet, Platform } from 'react-native';

export const ExperienceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7',
  },
  scrollContent: {
    paddingBottom: 110, 
  },
  headerContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  
  headerSubtitle: { 
    fontSize: 13, 
    color: '#444' 
  },
  mainTitle: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#4A6B32'
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  statCard: {
    width: '30%',
    height: 85,
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-between',
  },
  statHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 4 
  },
  statLabel: { 
    color: 'white', 
    fontSize: 13, 
    fontWeight: '600' 
  },
  statValue: { 
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold' 
  },

  whiteCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  progressHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  progressTitle: { 
    fontSize: 15, 
    fontWeight: 'bold' 
  },
  progressSubtext: { 
    fontSize: 11, 
    color: '#888' 
  },
  progressBarBg: { 
    height: 10, 
    backgroundColor: '#EEE', 
    borderRadius: 5, 
    marginTop: 8, 
    overflow: 'hidden'
  },
  progressBarFill: { 
    height: '100%', 
    backgroundColor: '#000' 
  },
  badgeCount: { 
    backgroundColor: '#DDD', 
    paddingHorizontal: 6, 
    borderRadius: 8 
  },
  badgeText: { 
    fontSize: 11, 
    fontWeight: 'bold' 
  },
  infoText: { 
    fontSize: 11, 
    color: '#999', 
    marginTop: 5 
  },

  sectionTitle: { 
    fontSize: 17, 
    fontWeight: 'bold', 
    marginLeft: 25, 
    marginVertical: 12 
  },
  
  taskCard: {
    backgroundColor: '#F9FBF6',
    marginHorizontal: 15,
    borderRadius: 20,    
    padding: 20,        
    marginBottom: 15,
    borderWidth: 1.5,    
    borderColor: '#D0DBC2',
  },
  taskCompletedBorder: { 
    borderColor: '#76A342', 
    backgroundColor: '#F0F5E9' 
  },
  taskTopRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  iconCircle: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 10 
  },
  taskTextContent: { 
    flex: 1 
  },
  taskTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  textStrike: { 
    textDecorationLine: 'line-through', 
    color: '#999' 
  },
  taskDesc: { 
    fontSize: 10, 
    color: '#888' 
  },
  pointsBadge: { 
    backgroundColor: '#E0E0E0', 
    paddingHorizontal: 6, 
    borderRadius: 10,
    marginLeft: 5
  },
  pointsText: { 
    fontSize: 11, 
    fontWeight: 'bold' 
  },

  taskBottomRow: { 
    flexDirection: 'row', 
    marginTop: 10, 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  tagsContainer: { 
    flexDirection: 'row', 
    gap: 5 
  },
  tagBadge: { 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#DDD' 
  },
  tagText: { 
    fontSize: 9, 
    color: '#666', 
    fontWeight: '600' 
  },
  completeBtn: { 
    backgroundColor: '#76A342', 
    paddingHorizontal: 12, 
    paddingVertical: 5, 
    borderRadius: 8 
  },
  completeBtnText: { 
    color: 'white', 
    fontSize: 11, 
    fontWeight: 'bold' 
  },

  successButton: { 
    backgroundColor: '#76A342', 
    margin: 20, 
    padding: 15, 
    borderRadius: 12, 
    alignItems: 'center' 
  },
  successButtonTitle: { 
    color: 'white', 
    fontSize: 15, 
    fontWeight: 'bold' 
  },
  successButtonSub: { 
    color: 'white', 
    fontSize: 11, 
    opacity: 0.8 
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