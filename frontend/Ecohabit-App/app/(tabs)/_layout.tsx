import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#A3D139', // Verdele tău
        tabBarInactiveTintColor: '#333',   // Negru
        
        // --- PROPRIETATEA CRITICĂ PENTRU ANDROID ---
        // Aceasta elimină efectul de "pastilă" (indicatorul de fundal)
        tabBarHideOnKeyboard: true,
        
        tabBarItemStyle: {
          backgroundColor: 'white', // Forțăm fundalul alb pe fiecare tab
        },

        tabBarStyle: {
          height: 70,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#EEEEEE',
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Acasă',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          ),
        }}
      />
      {/* Repetă pentru restul tab-urilor... */}
      <Tabs.Screen
        name="progres"
        options={{
          title: 'Progres',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="realizari"
        options={{
          title: 'Realizări',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "trophy" : "trophy-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}