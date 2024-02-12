
 import Header from "./Header";




import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Block from './Blocks';



function Cards(props) {
  return (
    <View >
      <View style={{marginTop:60, paddingLeft:20}}>
      <Header stats={props.stats} />
      </View>
      <View  style={styles.info}>
        <Block label="Humidity" value={props.stats.main.humidity} unit="%" style={styles.blocks}/>
        <Block label="Pressure" value={props.stats.main.pressure} unit="psi" style={styles.blocks}/>
        <Block label="Wind Speed" value={props.stats.wind.speed} unit="%" style={styles.blocks}/>
        <Block label="Visibility" value={props.stats.visibility} unit="%" style={styles.blocks}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    flexWrap:"wrap",
    margin:10
  }
  ,
  blocks:{
    margin:10,
    padding:5
  }
})

export default Cards;
