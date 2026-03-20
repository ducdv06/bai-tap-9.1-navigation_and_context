import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeTab from './HomeTab';
import { AuthContext } from '../context/AuthContext';

export default function AppNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeTab /> : <AuthStack />}
    </NavigationContainer>
  );
}