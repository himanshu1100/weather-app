import { View, Text, StyleSheet } from "react-native";

function Header(props) {

  let x = new Date(props.stats.dt_txt.split(" ")[0]);

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log(x.getDay());
  // console.log(props)
  return (
    <View style={styles.container}>
      <View >
      <Text style={styles.main}>{weekday[x.getDay()]}</Text>
        <Text style={styles.main}>{props.stats.dt_txt.split(" ")[0]}</Text>
      </View>
      <View style={styles.temps}>
        <Text style={styles.date}>{parseInt(props.stats.main.temp-273)} C</Text>
        <View style={styles.minMax}>
          <Text style={{color:"white"}}>Min {parseInt(props.stats.main.temp_min-273) } C</Text>
          <Text style={{color:"white"}}>Max {parseInt(props.stats.main.temp_max-273) } C</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        
     
      

    },
    main:{
      marginTop:10,
      padding:4,
      fontSize:40,
      fontWeight:"700",
      color:"white"
    },
    temps:{
        
         flexDirection:'row',
         width:"100%",
        
         alignItems:"center",
         margin:10,
         padding:4

    },
    minMax:{
        margin:10,
        padding:4,
        color:"white",
        justifyContent:"center",
        // alignItems:""
    },
    date:{
        margin:5,
        padding:4,
        fontWeight:"800",
        fontSize:50,
        color:"white",
    },
    temp:{

    }
})


export default Header;
