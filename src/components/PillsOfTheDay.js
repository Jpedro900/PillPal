import { Text, View } from 'react-native';
import React from 'react';

const PillsOfTheDay = ({ selectedDay, pills }) => {
  // Encontra as informações do dia selecionado na lista de remédios fornecida
  const selectedDayInfo = pills.find((item) => item.day === selectedDay);

  return (
    <View>
      {selectedDay ? (
        selectedDayInfo ? (
          <>
            <Text className="text-center font-bold text-3xl">{selectedDayInfo.day}</Text>
            {selectedDayInfo.pills.map((pill, index) => (
              <View
                key={index}
                className={`flex-row justify-between w-[90%] self-center ${
                  index % 2 === 0 ? 'bg-[#04996C]' : 'bg-[#0BDA9B]'
                } mt-4 p-3 rounded-md`}
              >
                <Text className="text-white font-bold text-md">{pill.time}</Text>
                <Text className="text-white font-bold text-md">{pill.name}</Text>
                <Text className="text-white font-bold text-md">{pill.dose}</Text>
              </View>
            ))}
          </>
        ) : (
          <Text className="text-center font-bold text-3xl">Nenhum remédio para o dia selecionado</Text>
        )
      ) : (
        <Text className="text-center font-bold text-3xl">Nenhum dia selecionado</Text>
      )}
    </View>
  );
};

export default PillsOfTheDay;
