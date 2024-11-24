import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        borderWidth: 1,
        borderColor: colors.blue[300],
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 54,
        marginBottom: 16,
        width: '88%'
    },
    input: {
        marginLeft: 18,
        fontSize: 14,
        fontFamily: 'Poppins-Light'
    },
});