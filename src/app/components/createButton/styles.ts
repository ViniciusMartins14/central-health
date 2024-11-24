import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue[100],
        borderColor: colors.blue[200],
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        marginBottom: 20,
        width: 200
    },
    text: {
        color: colors.blue[200],
        marginLeft: 8,
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold'
    },
});