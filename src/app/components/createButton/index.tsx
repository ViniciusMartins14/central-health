import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface CreateButtonProps {
    text: string;
}

export default function CreateButton({ text }: CreateButtonProps) {
    return (
        <TouchableOpacity style={styles.button}>
            <Feather name="plus" size={16} color="#007BFF" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
