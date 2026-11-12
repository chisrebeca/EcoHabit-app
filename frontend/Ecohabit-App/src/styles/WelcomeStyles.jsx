import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const welcomeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E1E9D6',
  },
  scrollContainer: {
    paddingHorizontal: 25,
    paddingBottom: 40, 
    alignItems: 'center',
    paddingTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logoImage: {
    width: width * 0.5, 
    height: width * 0.5,
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(115, 200, 44, 0.2)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1, 
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: '600',
    color: '#1A1A1A'
  },
  cardDesc: { 
    fontSize: 13, 
    fontWeight: '400',
    color: '#666',
    lineHeight: 18, 
  },
  buttonGreen: {
    backgroundColor: '#76A361', 
    width: '100%',
    height: 58,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonOutline: {
    backgroundColor: 'white',
    width: '100%',
    height: 58,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#76A361',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textWhite: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  textGreen: { 
    color: '#76A361', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});