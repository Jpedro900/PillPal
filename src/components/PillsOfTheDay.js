import { Text, View } from 'react-native';
import React from 'react';

const PillsOfTheDay = ({ selectedDay }) => {
    const PillsOfEachDay = [
    { 
        day: 'Domingo',
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
        day: 'Segunda-feira',
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
        day: 'Terça-feira',
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
        day: 'Quarta-feira',
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
        day: 'Quinta-feira',
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
        day: 'Sexta-feira',
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
        day: 'Sábado',
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
    }
    ];

  // Encontra as informações do dia selecionado
  const selectedDayInfo = PillsOfEachDay.find((item) => item.day === selectedDay) || PillsOfEachDay[0];

  return (
    <View>
      {selectedDayInfo ? (
        <>
          <Text className=" text-center font-bold text-3xl">{selectedDayInfo.day}</Text>
          {selectedDayInfo.pills.map((pill, index) => (
            index%2 === 0 ? (
            <View key={index} className=" flex-row justify-between w-[90%] self-center bg-[#04996C] mt-4 p-3 rounded-md">
              <Text className= " text-white font-bold text-md">{pill.time}</Text>  
              <Text className= " text-white font-bold text-md">{pill.name}</Text>
              <Text className= " text-white font-bold text-md">{pill.dose}</Text>
            </View>
            )
            :
            (
            <View key={index} className=" flex-row justify-between w-[90%] self-center bg-[#0BDA9B] mt-4 p-3 rounded-md">
              <Text className= " text-white font-bold text-md">{pill.time}</Text>  
              <Text className= " text-white font-bold text-md">{pill.name}</Text>
              <Text className= " text-white font-bold text-md">{pill.dose}</Text>
            </View>
            )))}
        </>

      ) : (
        <Text className=" text-center font-bold text-3xl">Nenhum dia selecionado</Text>
      )}
    </View>
  );
};

export default PillsOfTheDay;