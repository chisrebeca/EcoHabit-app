import React from 'react';
import LoginScreen from '../../src/screens/LoginScreen';
import { useRouter } from 'expo-router';

export default function LoginRoute() {
  const router = useRouter();
  return <LoginScreen/>;
}