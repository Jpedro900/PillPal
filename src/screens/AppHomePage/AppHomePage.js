import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import RadioButtonsUi from '../../components/RadioButtonsUi'
import PillsOfTheDay from '../../components/PillsOfTheDay'

const AppHomePage = () =>{

    const [selectedDay, setSelectedDay] = useState(null);

    const handleSelectDay = (day) => {
        setSelectedDay(day);
    };

    return (
        <View className=" px-2 bg-white h-full">
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
            <View className=" absolute self-center bottom-16">
                <Image className="w-[240px] " source={require('../../assets/logoComSlogan.png')} />
            </View>
            <Image className=" absolute bottom-0 right-0 h-[150px] w-[150px]" source={require('../../assets/Doctor.png')} />
            <View className=" absolute bottom-[110px] right-[60px] ">
                <Image className=" h-[100px] w-[100px]" source={require('../../assets/BalaoDeFala.png')} />
                <Text className=" absolute top-[17px] text-center left-[15px]">Bem-vindo nome do usuario</Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', bottom: 50, left: 16 }}>
                <View style={{ width: 55, height: 55, borderRadius: 9999, backgroundColor: '#04996C', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight:"bold" }}>+</Text>
                </View>
            </TouchableOpacity>
            <View className= " absolute bottom-0 bg-gray-300 w-[110%] h-6 z-[-1] self-center"></View>
        </View>
    )
}

export default AppHomePage;
