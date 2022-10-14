import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import Tabs from './src/components/navigation/tabs';
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
export default App;
