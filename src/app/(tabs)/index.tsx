import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '@/app/components/header';
import SearchBar from '@/app/components/searchBar';
import CreateButton from '@/app/components/createButton';
import RecordCard from '@/app/components/recordCard';
import { CalendarRangeButton } from '../components/calendarButton';
import { RecordContext } from '@/contexts/records';
import { RecordContextManager } from '@/domain/interfaces/record-props';

export default function AllRecordsScreen() {
  const { records } = useContext(RecordContext) as RecordContextManager;

  return (
    <View style={styles.container}>
      <View style={{ width: '85%' }}>
        <Header title="All Records" icon="heart-pulse" />
        <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <SearchBar placeholder="Search Hospitals" />
          <CalendarRangeButton />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <CreateButton text="Create new Record" />
        </View>
      </View>
      <FlatList
        style={{ width: '100%' }}
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecordCard
            name={item.name}
            lastReview={item.lastReview}
            reviews={item.totalReviews}
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
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
});
