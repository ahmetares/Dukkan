import React from "react";
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import useFetch from "./useFetch";
import Loading from './Loading'
import Error from './Error'


const ProductsDetails = ({route}) => {

    const id = route.params.id

    const {err,loading,data} = useFetch('https://fakestoreapi.com/products/' + id )

    if(loading) return ( <Loading/>)
    if(err) return ( <Error/>)
    
    return(
        <View  style={styles.container}>
            <Image style={styles.image} source={{uri: data.image}} />

            <View style={styles.inner_container}>
            <Text style={styles.title}> {data.title} </Text>
            <Text style={styles.description}> {data.description} </Text>
            <Text style={styles.price}>{data.price} TL</Text>

            </View>
        </View>
    )
}


export default ProductsDetails

const styles = StyleSheet.create({
    container: {
     
    },

    image: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/3,
        resizeMode:'contain',
        backgroundColor:'white'
    },

    inner_container: {
        padding:10,
    },

    title: {
        fontWeight:'bold',
        fontSize:20,
    },

    description: {
        fontSize:15,
        fontStyle:'italic',
        marginVertical:5
    },

    price: {
        textAlign:'right',
        fontSize:25
    },
  });
