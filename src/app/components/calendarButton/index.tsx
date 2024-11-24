import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function CalendarButton() {
    const [showCalendar, setShowCalendar] = useState(false);

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCalendar}>
                <Feather name="calendar" size={16} color={colors.black} />
            </TouchableOpacity>
            {showCalendar && (
                <RNDateTimePicker
                value={new Date()}
                display="calendar"
                onChange={() => setShowCalendar(false)}
                />
            )}
        </View>
    )
}