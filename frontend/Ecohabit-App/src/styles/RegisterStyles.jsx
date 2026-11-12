import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E9D6',
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: width * 0.4, 
    height: width * 0.4,
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
  },
  mainCard: {
    backgroundColor: '#FFF',
    borderRadius: 25,       
    padding: 20,           
    width: '100%',
    elevation: 4,          
    shadowColor: '#000',   
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A6B32', 
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#F5F5F5', 
    height: 55,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ECECEC', 
  },
  buttonGreen: {
    backgroundColor: '#76A361', 
    width: '100%',
    height: 58,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  textWhite: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerButton: {
    marginTop: 20,
    padding: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
});