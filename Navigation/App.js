import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import CourseListScreen from './screens/CourseScreenList';
import SettingScreen from './screens/SettingScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import { StackNavigator } from './AppStack';

const Tab = createBottomTabNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: 'below-icon'
            }}>
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Ionicons name='person' size={22} color={color} />,
                        tabBarBadge: 3
                    }}>
                </Tab.Screen>
                <Tab.Screen
                    name='CourseList'
                    component={CourseListScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Ionicons name='book' size={22} color={color} />
                    }}>
                </Tab.Screen>
                <Tab.Screen
                    name='Settings'
                    component={SettingScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Ionicons name='settings' size={22} color={color} />
                    }}></Tab.Screen>
                <Tab.Screen
                    name='Stack'
                    component={StackNavigator}
                    options={{
                        tabBarIcon: ({ color }) => <Ionicons name='home' size={22} color={color} />
                    }}>
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    )
}