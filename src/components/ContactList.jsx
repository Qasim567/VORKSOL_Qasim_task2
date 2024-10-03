import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ContactList = ({ contact }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: contact.imageUrl }}
                style={styles.profileImage}
            />
            <Text style={styles.nametxt}>{contact.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',  
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,  
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,  
        marginRight: 15,   
    },
    nametxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default ContactList;
