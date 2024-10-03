import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function Details({ route }) {
  const { contact } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={{ uri: contact.imageUrl }} 
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phoneNumber}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,   // Rounded image
    borderColor: '#dcdcdc',
    borderWidth: 2,
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    // alignItems: 'center',
  },
  name: {
    // textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    fontSize: 24,
    marginTop: 10,
  },
  phone: {
    // textAlign: 'center',
    color: '#666',
    fontSize: 18,
    marginTop: 5,
  },
});
