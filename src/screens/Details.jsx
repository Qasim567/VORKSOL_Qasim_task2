import {StyleSheet, Text, View, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import Seperaotor from '../components/Seperaotor';

export default function Details({route, navigation}) {
  const {contact} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: contact.imageUrl}} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phoneNumber}</Text>
      </View>
      <Pressable onPress={()=> navigation.navigate('Home')} 
        style={styles.btnconatiner}>
        <Text style={styles.btntxt}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40, 
  },
  image: {
    width: 180,  
    height: 180,
    borderRadius: 90, 
    borderColor: 'white', 
    borderWidth: 6,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,  
  },
  detailsContainer: {
    marginTop: 30,  
    paddingHorizontal: 30,  
  },
  name: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#333',  
    fontSize: 28,  
    textAlign: 'center',  
    marginBottom: 10,  
  },
  phone: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#666',  
    fontSize: 20,  
    textAlign: 'center',  
    marginTop: 5,
  },
  btnconatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'gray',
    paddingVertical: 8,
    marginHorizontal: 120,
    borderRadius: 30,
    marginTop: 15,
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  }
});
