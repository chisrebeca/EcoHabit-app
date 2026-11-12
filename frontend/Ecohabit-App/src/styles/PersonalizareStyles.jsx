import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Verdele deschis de fundal
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  
  // Header
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 25,
  },

  // Carduri generice
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D4E7B6',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBoxTime: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#AED6F1', // Albastru deschis pastel
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconBoxDays: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#E8DAEF', // Mov deschis pastel
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  // Butoane pentru Timp (Selecție unică)
  timeOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E8E8',
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  timeOptionSelected: {
    borderColor: '#76A342', // Verdele principal
    backgroundColor: '#F4F9EC', // Un verde foarte deschis pe fundal
  },
  timeText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  timeTextSelected: {
    color: '#76A342',
    fontWeight: 'bold',
  },

  // Butoane pentru Zile (Selecție multiplă)
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCircleSelected: {
    backgroundColor: '#61C27B', // Verde solid pentru zile selectate
    borderColor: '#61C27B',
  },
  dayText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  dayTextSelected: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  // Butoane de Acțiune (Finalizează & Înapoi)
  finishButton: {
    backgroundColor: '#529759', // Verdele butonului principal
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  finishButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },

  // Banner-ul de Sfat (Info)
  infoBanner: {
    backgroundColor: '#FAEAFF', // Mov foarte deschis
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
  },
  infoText: {
    color: '#666',
    fontSize: 13,
    lineHeight: 18,
  },
  infoTextBold: {
    fontWeight: 'bold',
    color: '#444',
  },
  infoLink: {
    color: '#5DADE2', // Culoarea albastră pentru link
  }
});