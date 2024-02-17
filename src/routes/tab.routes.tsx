import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome6 } from '@expo/vector-icons'

import Racing from '../screens/Racing/Racing'
import Standings from '../screens/Standings/Standings'

const Tab = createBottomTabNavigator()

const { Navigator, Screen } = Tab

export default function TabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='Racing'
        component={Racing}
        options={{
          tabBarIcon: () => <FontAwesome6 name='flag-checkered' size={24} />,
        }}
      />
      <Screen
        name='Standings'
        component={Standings}
        options={{
          tabBarIcon: () => <FontAwesome6 name='ranking-star' size={24} />,
        }}
      />
    </Navigator>
  )
}
