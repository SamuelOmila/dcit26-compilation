import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, ActivityIndicator, TouchableOpacity, Image} from 'react-native';


const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);




  return (

    <View style={styles.container}>
       {isLoading ? (
        <ActivityIndicator size="small" color="#009dff" />
      ) : (
      <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}
      style={styles.touchable}
      >
        <Image source={{ uri: data.picture.large}}
        style={{width: 150, height: 150, borderRadius: 90}} />
        <Text style = {{marginTop: 20,fontSize: 20, fontWeight: 'bold' }}>
            {data.name.first} {data.name.last}
        </Text>
      </TouchableOpacity> 
      )}

      <View style={styles.button}>
        <Button color= '#009dff' title= "RANDOM USER" onPress = {() => fetchRandomData()}
        style={styles.Button}
        />
      </View>
    </View>


  );

}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1F0F7',
    height: '100%'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-60%', 
    padding: 8,
  },
  touchable: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
