import { View, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import FormAddPill from './FormAddPill';
import { LinearGradient } from 'expo-linear-gradient';

const ModalAddPill = ({ visible, onClose, addPill }) => {
return (
    <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={onClose}

    >
        <View className="h-full">
            <View className="z-50 h-[7px]">
                <LinearGradient
                    colors={['#8c8888', '#fff']}
                    
                    style={{ flex: 1 }}
                />
            </View>
            <LinearGradient
                className=" absolute top-0 left-0 w-full h-full"
                colors={['#fff', '#b6e2d2' , '#2bb183']}
                start={{ x: 0.5, y: 0.4 }}
                style={{ flex: 1 }}
            />
            <TouchableOpacity className="absolute top-2 right-2 z-50" onPress={onClose}>
                <Ionicons name="close-circle-outline" size={28} color="black" />
            </TouchableOpacity>
            <FormAddPill addPill={addPill} />
        </View>
    </Modal>
    
);
};

export default ModalAddPill;

