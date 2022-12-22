import axios from "axios";
import React, {useState,useEffect} from "react";
import { StyleSheet, Text, View,Button,FlatList,  } from 'react-native';
import ProductsDetails from './ProductsDetail'
import ProductsCard from './ProductsCard'
import useFetch from './useFetch'
import Loading from './Loading'
import Error from './Error'

const Products = ({navigation}) => {  //navı nası aldık
    
    const {err,loading,data} = useFetch('https://fakestoreapi.com/products')

    const handleSelectedProduct = (id) => navigation.navigate('ProductsDetails', {id} )

    const renderProduct = ({item}) => <ProductsCard product={item} onSelect={() => handleSelectedProduct(item.id)}/>

    if(loading){
        return ( <Loading/>)
    }

    if(err){
        return ( 
    
         <Error/>  
        )
    }

    return(
        <View>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}


export default Products

const styles = StyleSheet.create({
    container: {
     
    },
  });
