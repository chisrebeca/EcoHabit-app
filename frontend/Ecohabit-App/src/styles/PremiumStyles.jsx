import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E9D7', // Verdele pastel specific aplicației
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Buton Înapoi
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginLeft: 5,
  },

  // Header (Coroană și Titlu)
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  crownBox: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFB300', // Galben/Auriu Premium
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFB300',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
  },

  // Titluri Secțiuni
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15,
    marginTop: 10,
  },

  // Lista de Beneficii (Carduri colorate)
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)', // O bordură foarte subtilă
  },
  benefitIconBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.4)', // Fundal semi-transparent alb peste culoarea cardului
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  benefitTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  benefitSub: {
    fontSize: 11,
    color: '#444',
    marginTop: 2,
    opacity: 0.8,
  },

  // Carduri pentru Planuri
  planCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    position: 'relative', // Pentru badge-ul "Popular"
  },
  planPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  planButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  planButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  savingsText: {
    color: '#2ECC71', // Verde pentru economie
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: -5,
  },

  // Badge "Cel mai popular"
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: 20,
    backgroundColor: '#FFB300',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  popularBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // Garanție
  guaranteeCard: {
    backgroundColor: '#7DCEA0', // Verde mentă
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#52BE80',
  },
  guaranteeTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  guaranteeSub: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 3,
  },

  // Link Continuă Gratuit
  continueFreeBtn: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  continueFreeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555',
  }
});