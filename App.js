import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PlayerScreen } from './screens/Player'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
            <Text>I'm Home Screen!</Text>

            {['HomeScreen', 'DiscoverScreen', 'PlayerScreen'].map((item) => {
                return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => {
                            navigation.navigate(item)
                        }}
                    >
                        <Text>Podcast: {item}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
function DiscoverScreen() {
    return (
        <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
            <Text>I'm Discover Screen!</Text>
        </View>
    )
}

//=============================================

const PodcastsStack = createStackNavigator()

function PodcastsTabStack() {
    return (
        <PodcastsStack.Navigator>
            <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
            <PodcastsStack.Screen
                name="DiscoverScreen"
                component={DiscoverScreen}
            />
            <PodcastsStack.Screen
                name="PlayerScreen"
                component={PlayerScreen}
            />
        </PodcastsStack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={PodcastsTabStack} />
            <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
            <Tab.Screen name="PlayerScreen" component={PlayerScreen} />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

// export default function App() {
//     return <PlayerScreen />
// }
