import { useEffect, useState } from "react";

import * as Font from 'expo-font';
import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

export default function TabsLayout() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Poppins-Black': require('../../../assets/fonts/Poppins-Black.ttf'),
                'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
                'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
                'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
                'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
            });
            setFontsLoaded(true);
        }

        loadFonts();
    }, []);

    return (
        <Tabs
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
                },
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "All Records",
                    tabBarLabelStyle: { fontFamily: 'Poppins-Light', width: '100%' },
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
                    ),
                }} 
            />
        </Tabs>
    );
}
