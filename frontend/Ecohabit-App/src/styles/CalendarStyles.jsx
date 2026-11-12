import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Verdele de fundal
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Header & Înapoi
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#D4E7B6', // Verde pastel pentru calendar
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
    marginTop: 2,
  },

  // Notificări Toggle
  notificationCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationTexts: {
    marginLeft: 15,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  notificationSub: {
    fontSize: 12,
    color: '#666',
  },

  // Calendar Card
  calendarCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    fontSize: 12,
    color: '#888',
    width: 35,
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dayCell: {
    width: '14.28%', // 100% / 7 zile
    aspectRatio: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
  },
  dayText: {
    fontSize: 13,
    color: '#333',
  },
  dayTextEmpty: {
    color: 'transparent',
  },
  markerBar: {
    width: 20,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },

  // Secțiuni generale (Program, Următoarele)
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  addButtonText: {
    color: '#76A342',
    fontWeight: 'bold',
    fontSize: 12,
  },

  // Program Colectare Card
  programCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  programTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  programIcon: {
    marginLeft: 15,
    marginRight: 10,
  },
  programTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  programDay: {
    fontSize: 12,
    color: '#666',
  },
  dropdownLabel: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    marginBottom: 5,
  },
  dropdownBox: {
    backgroundColor: '#EAECEE',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 13,
    color: '#444',
  },

  // Următoarele Colectări Card
  nextCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  nextIconBox: {
    marginRight: 15,
  },
  nextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  nextDate: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  // Banner Info
  infoBanner: {
    backgroundColor: '#D6E4E1',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },
  infoText: {
    color: '#76A342',
    fontSize: 13,
    lineHeight: 18,
  },
  infoTextBold: {
    fontWeight: 'bold',
  },
});