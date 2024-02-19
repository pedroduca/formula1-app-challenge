import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome6 } from '@expo/vector-icons'

import Racing from '../screens/Racing/Racing'
import Standings from '../screens/Standings/Standings'

const Tab = createBottomTabNavigator()

const { Navigator, Screen } = Tab

export default function TabRoutes() {
  return (
    <Navigator
      initialRouteName='Standings'
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#11100F' },
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Poppins_400Regular',
        },
      }}>
      <Screen
        name='Standings'
        component={Standings}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='ranking-star' size={24} color={color} />
          ),
        }}
      />
      <Screen
        name='Racing'
        component={Racing}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='flag-checkered' size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
