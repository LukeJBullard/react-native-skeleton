/**
 * React Native Skeleton
 * https://github.com/lukejbullard/react-native-skeleton
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  useColorScheme,
  Text,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {fontScale} = useWindowDimensions();


  const styles = () => StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? "black" : "white"
    },
    text: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      color: !isDarkMode ? "black" : "white",
      fontSize: 25 / fontScale
    },
    loadingWheel: {
      display: (loading ? 'flex' : 'none')
    }
  });

  const loading = true;

  return (
    <SafeAreaView style={styles().body}>
      <Text style={styles().horizontal}>React Native Skeleton</Text>
      <ActivityIndicator style={styles().loadingWheel} size="large" animating={loading} color="#3535c1" />
      <Text style={styles().horizontal}>Test</Text>
    </SafeAreaView>
  );
}

export default App;
