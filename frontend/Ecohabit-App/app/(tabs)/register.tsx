import React from 'react';
import RegisterScreen from '../../src/screens/RegisterScreen';
import { useRouter } from 'expo-router';

export default function RegisterRoute() {
  const router = useRouter();
  return <RegisterScreen navigation={router} />;
}