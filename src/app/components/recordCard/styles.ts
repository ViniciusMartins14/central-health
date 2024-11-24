import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 16,
        width: 350
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        padding: 16
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
        fontFamily: 'Poppins-Bold'
    },
    lastReview: {
        fontSize: 14,
        color: colors.blue[500],
        fontFamily: 'Poppins-Medium'
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewButton: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue[200],
        paddingVertical: 6,
        paddingHorizontal: 16,
        height: 50,
        width: 175,
        borderBottomLeftRadius: 10
    },
    viewText: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "regular",
        fontFamily: 'Poppins-Regular'
    },
    reviewButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 6,
        paddingHorizontal: 16,
        height: 50,
        width: 175,
        borderBottomRightRadius: 10
    },
    reviewText: {
        color: colors.blue[800],
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "regular",
        fontFamily: 'Poppins-Regular'
    }
});
