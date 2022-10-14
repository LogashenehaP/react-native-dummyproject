import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import FeaturedScreen from '../screens/FeaturedScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Context} from '../common/context';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Context>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search1';
            } else if (route.name === 'Cart') {
              iconName = 'shoppingcart';
            } else if (route.name === 'Featured') {
              iconName = 'star';
            }
            return <AntDesign name={iconName} size={30} color={color} />;
          },

          tabBarActiveTintColor: 'darkblue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Featured" component={FeaturedScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        {/* <Tab.Screen name="Search" component={SearchScreen} /> */}
      </Tab.Navigator>
    </Context>
  );
};

export default Tabs;
