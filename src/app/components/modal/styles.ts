import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      width: "50%",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "flex-start",
      gap: 8
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    editText: {
      marginLeft: 10,
      fontSize: 16,
      color: colors.blue[700],
      fontWeight: "bold",
      fontFamily: 'Poppins-Medium'
    },
    deleteText: {
      marginLeft: 10,
      fontSize: 16,
      color: colors.red[300],
      fontWeight: "bold",
      fontFamily: 'Poppins-Medium'
    },
    closeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: colors.green[200],
      borderRadius: 5,
    },
    closeText: {
      fontSize: 14,
      color: colors.black,
    },
  });