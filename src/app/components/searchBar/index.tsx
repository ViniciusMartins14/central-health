import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

interface SearchBarProps {
    placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
    return (
        <View style={styles.container}>
            <Feather name="search" size={30} color={colors.blue[500]} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.blue[500]}
            />
        </View>
    );
}
