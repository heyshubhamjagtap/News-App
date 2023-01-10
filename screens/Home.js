import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React, {useEffect, useState}from 'react'
import Artical from '../components/Artical'
import axios from 'axios'

const Home =() => {
    const [articals, setArticals] = useState([])
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=831846f66f4b400b89377c58dbde7dda',{
            params: {
                category: 'technology'
            }
        })
  .then((response) =>{
    // handle success
    setArticals(response.data.articles);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }

    useEffect(()=>{
        getNews()
    },[])

  return (
   <SafeAreaView>
    <FlatList
    data={articals}
    renderItem={({item})=>
    <Artical
        urlToImage = {item.urlToImage}
        title={item.title}
        description={item.description}
        author={item.author}
        publishedAt={item.publishedAt}
        sourceName = {item.source.name}
        url={item.url}
    />
    }
    keyExtractor={(item)=>item.title}
/>
   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
   
})