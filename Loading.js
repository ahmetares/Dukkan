import { View } from "react-native";
import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
    return (<Lottie source={require('./loading.json')} autoPlay loop />
    )
}


export default Loading