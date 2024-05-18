import { Text, View } from 'react-native'
import React from 'react'

const PillsOfTheDay = ({ selectedDay }) => {

    const PillsOfEachDay = [
        {
            day: 'D',
            pills: [
                {
                    name: 'Dipirona',
                    time: '08:00',
                    dose: '1 comprimido'
                },
                {
                    name: 'Paracetamol',
                    time: '12:00',
                    dose: '1 comprimido'
                }
            ]
        },
        {
            day: 'S',
            pills: [
                {
                    name: 'Dipirona',
                    time: '08:00',
                    dose: '1 comprimido'
                },
                {
                    name: 'Paracetamol',
                    time: '12:00',
                    dose: '1 comprimido'
                }
            ]
        },
        // Adicione os demais dias da semana aqui...
        {
            day: 'T',
            pills: [
                {
                    name: 'Dipirona',
                    time: '08:00',
                    dose: '1 comprimido'
                },
                {
                    name: 'Paracetamol',
                    time: '12:00',
                    dose: '1 comprimido'
                }
            ]
        },
        {
            day: 'Q',
            pills: [
                {
                    name: 'Dipirona',
                    time: '08:00',
                    dose: '1 comprimido'
                },
                {
                    name: 'Paracetamol',
                    time: '12:00',
                    dose: '1 comprimido'
                }
            ]
        },
        // Adicione os demais dias da semana aqui...
    ]

    // Encontra as informações do dia selecionado
    const selectedDayInfo = PillsOfEachDay.find((item) => item.day === selectedDay);

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{selectedDayInfo?.day}</Text>
            {selectedDayInfo?.pills.map((pill, index) => (
                <View key={index} style={{ marginBottom: 10 }}>
                    <Text>{pill.name}</Text>
                    <Text>{`Horário: ${pill.time}`}</Text>
                    <Text>{`Dose: ${pill.dose}`}</Text>
                </View>
            ))}
        </View>
    )
}

export default PillsOfTheDay;
