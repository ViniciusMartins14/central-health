import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "@/app/components/header";
import SearchBar from "@/app/components/searchBar";
import CreateButton from "@/app/components/createButton";
import RecordCard from "@/app/components/recordCard";
import { CalendarButton } from "../components/calendarButton";

const data = [
    { id: "1", name: "Hospital Albert Einstein", lastReview: "sun oct 20. 12PM", reviews: 4 },
    { id: "2", name: "Hospital Sírio Libanês", lastReview: "sun oct 20. 12PM", reviews: 4 },
    { id: "3", name: "Hospital São Luiz", lastReview: "sun oct 20. 12PM", reviews: 4 },
    { id: "4", name: "Hospital Santa Isabel", lastReview: "sun oct 20. 12PM", reviews: 4 },
];

export default function AllRecordsScreen() {
    return (
        <View style={styles.container}>
            <View style={{ width: '85%' }}>
                <Header title="All Records" icon="heart-pulse" />
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <SearchBar placeholder="Search Hospitals" />
                    <CalendarButton />
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <CreateButton text="Create new Record" />
                </View>
            </View>
            <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <RecordCard
                            name={item.name}
                            lastReview={item.lastReview}
                            reviews={item.reviews}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingTop: 30,
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 16
    },
});
