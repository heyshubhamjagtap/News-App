import {StyleSheet, Text, Pressable, Image, View, Linking} from 'react-native';
import React from 'react';
import moment from 'moment/moment';



const Artical = (props) => {

  const goToSource = () => {
    Linking.openURL(props.url)
  }

  return (
    <Pressable style={styles.container} onPress={goToSource}>
      {/* Image */}
      <Image
        source={{
          uri: props.urlToImage
        }}
        style={styles.image}
      />
      <View style={{padding:20}}>
      {/* Title */}
      <Text style={styles.title}>{props.title}</Text>

      {/* Description */}
      <Text style={styles.desc} numberOfLines={3}>
       {props.description}
      </Text>

      <View style={styles.data}>
        <Text style={styles.heading}>
          by:<Text style={styles.author}>{props.author}</Text>
        </Text>
        <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
      </View>

      {/* Source */}
      <View style={{marginTop:10}}>
      <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
      </View>
      </View>
    </Pressable>
  );
};

export default Artical;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius:40,
    shadowOpacity: 0.5,
    shadowColor:'#1d3557',
    shadowOffset: {
        height: 10,
        width: 10
    },
    backgroundColor:'#fff',
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  heading: {},
  author: {
    fontWeight:'bold',
    fontSize: 15
  },
  date: {
    fontWeight:'bold',
    color:'#e63946',
    fontSize: 15
  },
  source:{
    color:'#e63946',
    fontWeight:'bold',
    fontSize:18
  }
});
