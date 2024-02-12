import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import { api } from "./apicall";
import * as Location from "expo-location";

export default function App() {
  const [mdlState, changeMdlState] = useState(false);
  const [data, setData] = useState(null);
  const [modalData, setModalData] = useState();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("here")
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      console.log("jhi");
      let location = await Location.getCurrentPositionAsync({});
      console.log("not here")
      console.log(location);
      fetchData(location);
    })();
  }, []);

  const fetchData = async (location) => {
    try {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      const data = await api(lat, lon);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (data == null) {
    return <ActivityIndicator />;
  }
  function Mdl() {
    return (
      <Modal animationType="slide" transparent={false} visible={mdlState}>
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => {
              changeMdlState(false);
            }}
          >
            <Text style={styles.cross}>X</Text>
          </Pressable>
          <Cards stats={data[modalData]} />
        </View>
      </Modal>
    );
  }

  return (
    <ScrollView >
      <View style={styles.container}>
      <Mdl />

      <Image
        style={styles.img}
        width={200}
        height={200}
        source={{
          uri: "https://play-lh.googleusercontent.com/Ckq9sqp1avVJnARXtlvipHBTVCBmhZCUC5Iakr_59k2ceSmFWWITHL1_YaORmIAKxw=w240-h480-rw",
        }}
      />
      <Pressable
        onPress={() => {
          setModalData(0);
          changeMdlState(true), console.log("hi");
        }}
      >
        <Header stats={data[0]} />
      </Pressable>

      <FlatList
        data={data}
        renderItem={()=>{<Text>This is good</Text>}}
        keyExtractor={item => item.id}
       
      />
        <FlatList
          data={data}
          
          renderItem={({ item, index }) => (
            <Pressable
            
              onPress={() => {
                setModalData(index);
                changeMdlState(true);
              }}
            >
              <List
                title={item.dt_txt.split(" ")[0]}
                minTemp={item.main.temp_min}
                maxTemp={item.main.temp_max}
              />
            </Pressable>
          )}
          keyExtractor={(item) => item.dt}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   alignItems:"center",
    backgroundColor: "#0c44a2",
  },
  img: {
    borderRadius: 20,
    marginTop: 60,
  },
  cross: {
    fontSize: 30,
    fontWeight: "800",
    color: "black",
    marginRight: 10,
  },

  container: {
    alignItems: "center",
    backgroundColor: "#0c44a2",
  },
  img: {
    borderRadius: 20,
    marginTop: 60,
  },
  modalContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: "#0096c7",
    paddingTop: 20,
  },
  cross: {
    fontSize: 30,
    fontWeight: "800",
    color: "black",
    marginRight: 10,
  },
});
