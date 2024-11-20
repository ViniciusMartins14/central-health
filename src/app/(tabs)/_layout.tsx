import { Tabs } from "expo-router"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors"

export default function TabsLayout() {
    return <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.blue[200],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.blue[100],
                height: 60,
                justifyContent: "center", 
                alignItems: "center",
            },
            tabBarIconStyle: {
                margin: 0,
            }
        }}
    >
        <Tabs.Screen 
            name="index" 
            options={{
                title: "All Records",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="heart-pulse" size={size} color={color} />
                ),
            }} 
        />
        <Tabs.Screen 
            name="profile" 
            options={{
                title: "My Profile",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="user" size={size} color={color} />
                )
            }} 
        />
    </Tabs>
}