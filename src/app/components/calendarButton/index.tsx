import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { styles } from './styles';
import { ptBR } from './pt-br';

dayjs.locale('pt-br');
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export function CalendarRangeButton() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    startDate?: string;
    endDate?: string;
  }>({});
  const [markedDates, setMarkedDates] = useState<{
    [key: string]: {
      startingDay?: boolean;
      endingDay?: boolean;
      color?: string;
      textColor?: string;
    };
  }>({});

  const minimumDate = dayjs().subtract(25, 'years').format('YYYY-MM-DD');
  const maximumDate = dayjs().format('YYYY-MM-DD');

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const handleDayPress = (day: { dateString: string }) => {
    const { dateString } = day;

    if (!selectedDates.startDate) {
      setSelectedDates({ startDate: dateString });
      setMarkedDates({
        [dateString]: {
          startingDay: true,
          color: '#5E81AC',
          textColor: 'white',
        },
      });
    } else if (!selectedDates.endDate) {
      if (dayjs(dateString).isAfter(selectedDates.startDate)) {
        const newMarkedDates = { ...markedDates };

        const range = dayjs(dateString).diff(
          dayjs(selectedDates.startDate),
          'day',
        );
        for (let i = 1; i <= range; i++) {
          const rangeDate = dayjs(selectedDates.startDate)
            .add(i, 'day')
            .format('YYYY-MM-DD');
          newMarkedDates[rangeDate] = { color: '#A5C5E3', textColor: 'white' };
        }

        newMarkedDates[dateString] = {
          endingDay: true,
          color: '#5E81AC',
          textColor: 'white',
        };

        setSelectedDates({ ...selectedDates, endDate: dateString });
        setMarkedDates(newMarkedDates);
      } else {
        setSelectedDates({ startDate: dateString });
        setMarkedDates({
          [dateString]: {
            startingDay: true,
            color: '#5E81AC',
            textColor: 'white',
          },
        });
      }
    } else {
      setSelectedDates({ startDate: dateString });
      setMarkedDates({
        [dateString]: {
          startingDay: true,
          color: '#5E81AC',
          textColor: 'white',
        },
      });
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleCalendar} style={styles.container}>
        <Feather name="calendar" size={24} color={colors.black} />
      </TouchableOpacity>
      {showCalendar && (
        <Modal transparent animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 20,
                width: '90%',
              }}
            >
              <Calendar
                markingType="period"
                markedDates={markedDates}
                minDate={minimumDate}
                maxDate={maximumDate}
                onDayPress={handleDayPress}
                monthFormat="MMMM yyyy"
                renderHeader={(date: Date) => (
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {dayjs(date.toISOString()).format('MMMM [de] YYYY')}
                  </Text>
                )}
                theme={{
                  calendarBackground: 'white',
                  textSectionTitleColor: colors.black,
                  selectedDayBackgroundColor: colors.blue[700],
                  selectedDayTextColor: 'white',
                  todayTextColor: colors.blue[700],
                  dayTextColor: colors.black,
                  arrowColor: colors.blue[700],
                  monthTextColor: colors.black,
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '500',
                  textDayFontSize: 16,
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 14,
                }}
              />

              <TouchableOpacity
                onPress={toggleCalendar}
                style={{
                  marginTop: 10,
                  backgroundColor: '#5E81AC',
                  padding: 10,
                  borderRadius: 5,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white' }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
