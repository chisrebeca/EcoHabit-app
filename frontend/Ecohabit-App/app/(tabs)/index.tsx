import React from 'react';
import WelcomeScreen from '../../src/screens/WelcomeScreen';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return <WelcomeScreen navigation={router} />;
}