import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { CONTACT_LIST } from '../data/contacts'
import Seperaotor from '../components/Seperaotor'
import ConatctList from '../components/ContactList'

export default function Home({navigation}) {
  return (
    <View style={styles.conatiner}>
      <FlatList
      data={CONTACT_LIST}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Seperaotor}
      renderItem={({item})=>(
        <Pressable onPress={()=> navigation.navigate('Details', {
          contact: item
        })}>
          <ConatctList contact={item}/>
        </Pressable>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        margin:8
    }
})