import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E9D6',
  },
  scrollContent: {
    flexGrow: 1, 
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: 'center', 
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 160,    
    height: 160,   
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
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  mainCard: {
    backgroundColor: '#FFF',
    borderRadius: 25,       
    padding: 20,           
    width: '100%',
    elevation: 4,          
    shadowColor: '#000',   
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    backgroundColor: 'rgba(123, 114, 114, 0.05)',
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0', 
    color: '#000',
  },
  buttonGreen: {
    backgroundColor: '#76A361', 
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textWhite: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerButton: {
    marginTop: 20,
    paddingBottom: 20,
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  }
});