import React from 'react';
import { StatusBar } from 'react-native'; 
import Routes from "./src/routes";
import COLORS from './src/styles/Color';
import Header from './src/components/Header';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.grey} barStyle="light-content" /> 
      <Header />
      <Routes />
    </>
  );
}

