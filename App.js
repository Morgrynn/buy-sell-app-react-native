import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigaator';
import MainStackNavigator from './navigators/MainStackNavigator';
import AllStackNavigator from './navigators/AllStackNavigator';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import SplashScreen from './screens/auth/SplashScreen';
import useAuth from './hooks/useAuth';

const RootStack = createStackNavigator();

export default function App() {
  const { authContext, state } = useAuth();

  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <>
        <RootStack.Screen name={'AllStack'} component={AllStackNavigator} />
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
