/* eslint-disable react-native/no-raw-text, no-console */
// https://github.com/Intellicode/eslint-plugin-react-native/issues/271

import {
  Button,
  StyleSheet,
  View,
} from 'react-native'

import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

// import StorybookUIRoot from '../.storybook/Storybook'

if (__DEV__) {
  import('../ReactotronConfig')
    .then(() => {
     // console.log('Reactotron Configured')
    })
    .catch(() => console.error)
}

export const App = () => {
  const width = useSharedValue(100);
  const height = useSharedValue(100);

  const handlePressMinor = () => {
    width.value = withSpring(width.value + 50);
    height.value = withSpring(height.value + 50);
  }

  const handlePressMinus = () => {
    width.value = withSpring(width.value - 50);
    height.value = withSpring(height.value - 50);
  }

  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      }}>
    <Animated.View style={{
      width,
      height,
      borderRadius: 50,
      backgroundColor: 'violet'
    }}
    />
    <Button onPress={handlePressMinor} title='Click to minor' />
    <Button onPress={handlePressMinus} title='Click to minus' />
    </View>
  );
}

const styles = StyleSheet.create({})

export default App