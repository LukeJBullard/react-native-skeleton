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
  Dimensions
} from 'react-native';

function getDimensions(screen=Dimensions.get('screen'))
{
  return {
    width: screen.width,
    height: screen.height,
    vw: Math.round(screen.width / 100),
    vh: Math.round(screen.height / 100)
  };
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [dimensions, setDimensions] = useState(getDimensions());
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions(getDimensions(screen));
      }
    );
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
  };

  const styles = () => StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    loadingWheel: {
      display: (loading ? 'flex' : 'none')
    }
  });

  const loading = true;

  return (
    <SafeAreaView style={[backgroundStyle, styles().container]}>
      <Text style={styles().horizontal}>React Native Skeleton</Text>
      <ActivityIndicator style={styles().loadingWheel} size="large" animating={loading} color="#3535c1" />
      <Text style={styles().horizontal}>Test</Text>
    </SafeAreaView>
  );
}

export default App;
