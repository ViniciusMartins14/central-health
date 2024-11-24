import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

interface HeaderProps {
    title: string;
    icon: string;
}

export default function Header({ title, icon }: HeaderProps) {
    return (
        <View style={styles.header}>
            <MaterialCommunityIcons name={icon as any} size={24} color={colors.blue[800]} />
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}