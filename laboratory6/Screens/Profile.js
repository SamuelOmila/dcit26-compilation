import React from 'react';
import { View, StyleSheet, Button, ScrollView, Text, ImageBackground, Image } from 'react-native';


const Profile = ({route}) => {
  const data = route.params;


  return (

  <View style = {styles.container}>
    <View style = {styles.Viewimageandname}>
      <Image source={{ uri: data.picture.large}}
        style={styles.imageandname} />
        <Text style = {{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>
            {data.name.title}. {data.name.first} {data.name.last}
        </Text>
    </View>
    <View style={styles.Info}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Personal Information
        </Text>
        <Text>Age: {data.dob. age} Years Old</Text>
        <Text>Gender: {data.gender}</Text>
        <Text>Birthday: {data.dob.date}</Text>
        <Text>
          Address: {data.location.street. number} {data.location.name}
          {data.location.city}, {data.location.state}, {data.location.country}
          {data.location.postcode}
        </Text>
        <Text>===================================</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Contact Information
        </Text>
        <Text>Phone #: {data.phone}</Text>
        <Text>Cell #: {data.cell}</Text>
        <Text>Email: {data.email}</Text>
        <Text>===================================</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Others
        </Text>
        <Text>Registered Date: {data.registered.date}</Text>
     </View>
  </View>


  );

}

export default Profile ;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E1F0F7',
    height: '100%',
  },
  Info: {
    flex: 1,
    padding: 8,
    width: '90%',
    marginLeft: '10%',
  },
  imageandname: {
    width: 150, 
    height: 150, 
    borderRadius: 90,
  },
  Viewimageandname:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: '2%'
  },
});
