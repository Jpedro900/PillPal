import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import RadioButtonsUi from '../../components/RadioButtonsUi'
import PillsOfTheDay from '../../components/PillsOfTheDay'

const AppHomePage = () =>{

    const [selectedDay, setSelectedDay] = useState(null);

    const handleSelectDay = (day) => {
        setSelectedDay(day);
    };

    return (
        <View className=" px-2 pt-20 bg-white h-full">
            <View className=" self-center">
                <Image className=" w-36 h-36 self-center" source={require('../../assets/AvatarPic.png')} />
                <Text className=" self-center text-xl font-semibold">Nome do usuario</Text>
            </View>
            <View className=" mt-2 flex-row justify-around">
                <RadioButtonsUi onSelectedDay={handleSelectDay}/>
            </View>
            <View className=" mt-4">
                <PillsOfTheDay selectedDay={selectedDay}/>
            </View>
        </View>
    )
}

export default AppHomePage;
