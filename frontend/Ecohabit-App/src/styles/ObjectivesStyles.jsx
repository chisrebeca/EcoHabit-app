import { StyleSheet } from 'react-native';

export const objectivesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E9D6',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },

  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
  },
  multiSelectHint: {
    fontSize: 13,
    color: '#4A6B32',
    fontWeight: '600',
  },

  optionsList: {
    gap: 14,
    marginBottom: 30,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: 'transparent',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  iconImage: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },

  optionTextContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  optionDescription: {
    fontSize: 12,
    color: '#666',
  },

  continueButton: {
    backgroundColor: '#5BAD2A',
    width: '100%',
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#3A8C1A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  continueButtonDisabled: {
    backgroundColor: '#A8C890',
    elevation: 0,
    shadowOpacity: 0,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },

  backButton: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  backButtonText: {
    fontSize: 15,
    color: '#555',
  },
});