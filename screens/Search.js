import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import Artical from '../components/Artical'
import axios from 'axios'

const Search = () => {
const [searchText, setSearchText] = useState('')
const [articles, setArticles] = useState([])


const searchArticles = () =>{
  axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=831846f66f4b400b89377c58dbde7dda',{
    params: {
        category: 'technology',
        q:searchText
    }
})
.then((response) =>{
// handle success
setArticles(response.data.articles);
})
.catch(function (error) {
// handle error
console.log(error);
})
.then(function () {
// always executed
});
}
  return (
    <View style={styles.container}>
      <SearchBar
      searchText={searchText}
      setSearchText={setSearchText}
      onSubmit={searchArticles}
      />
      <FlatList
      data={articles}
      renderItem={
        ({item})=>
        <Artical
        urlToImage = {item.urlToImage}
        title={item.title}
        description={item.description}
        author={item.author}
        publishedAt={item.publishedAt}
        sourceName = {item.source.name}
    />
      }
      keyExtractor={(item)=>item.title}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  }
})