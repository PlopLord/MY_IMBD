import React from 'react';
import {StyleSheet,View ,Text, Image, TouchableOpacity} from 'react-native';
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component{
  render(){
    const {film, displayDetailForFilm}= this.props;
    return(
      <TouchableOpacity
      style={styles.main_container}
      onPress={()=>displayDetailForFilm(film.id)}>
          <Image style={styles.image}source={{uri:getImageFromApi(film.poster_path)}}/>
        <View style={styles.content}>
          <View style={{flexDirection:'row',flex:1,alignItems:'flex-end',justifyContent:'center'}}><Text style={{flex:4,marginRight:5,flexWrap:'wrap',fontWeight: 'bold', fontSize:20,}}>{film.title}</Text><Text style={{flex:2,fontWeight: 'bold',fontSize:26,color: '#666666'}}>{film.vote_average}</Text></View>
          <View style={{flex:4,marginTop:5,marginBottom:5,alignItems:'flex-start',justifyContent:'center'}}><Text style={{flexWrap: 'wrap',fontStyle: 'italic',color: '#666666'}} numberOfLines={6}>{film.overview}</Text></View>
          <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}><Text>{film.release_date}</Text></View>
        </View>
      </TouchableOpacity>
    );
  }

}
const styles= StyleSheet.create({
  main_container:{
    height:190,
    flexDirection:'row',
    padding:5,

  },
  content:{
    flex:2,
    flexDirection:"column",
    padding:5,

  }, image: {
    width: 120,
    height: 180,
    margin: 5,
  },

})
export default FilmItem
