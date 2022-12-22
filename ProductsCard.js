import React from "react";
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback } from 'react-native';


const ProductsCard = ({product, onSelect}) => {

     console.log(onSelect)

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
                <Image style={styles.image} source={{uri: product.image}} />

                <View style={styles.text_container}>
                    <Text style={styles.title} > {product.title} </Text>
                    <Text style={styles.price} > {product.price} TL </Text>

                </View>

        </View>
        </TouchableWithoutFeedback>
    )
}


export default ProductsCard

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        margin:10,
        backgroundColor:'lightgray',
        borderColor:'#bdbdbd',
        borderWidth:1
    },

    image: {
        minHeight:100,
        width:100,
        resizeMode:'contain',
        backgroundColor:'white'
    },

    text_container: {
        flex:1,
        justifyContent:'space-between'
    },

    title: {
        fontSize:17,
        fontWeight:'bold'
     
    },

    price: {
        textAlign:"right",
        fontStyle:'italic',
        fontSize:16
    },
  });
