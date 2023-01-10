import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation';
import { Categories, Product, Products } from './screens';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/lato/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/lato/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/lato/Lato-Italic.ttf'),
    'Lato-Black': require('../assets/fonts/lato/Lato-Black.ttf'),
    'Lato-Light': require('../assets/fonts/lato/Lato-Light.ttf'),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
