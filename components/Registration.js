import React from 'react';
import { View, Text, Image, Pressable, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Registration = ({ navigation }) => {
  return (

    <View style={{ flexDirection: "column", backgroundColor: "#ffffff", height: "100%" }}>
      <Pressable>
        <View >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("./assets/Arrow.png")} onPress={() => navigation.navigate('SignIn')}
              style={{ marginLeft: 20, marginTop: 50, marginBottom: 20, width: '7%', height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </Pressable>
      <View style={{
        Textalign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
          color: "#003cc0",
          fontSize: 30,
          fontWeight: "bold",
        }}
        >Create Account</Text>
        <Text style={{ color: "#aab5e6" }}>Create A New Account</Text>
      </View>
      <View style={{
        marginTop: 60,
        width: '80%',
        marginLeft: 35,
      }}>
        <TextInput placeholder="Enter Your Name" style={styles.input}></TextInput>
        <TextInput placeholder="Enter Your Email" style={styles.input}></TextInput>
        <TextInput placeholder="Enter Your Password" style={styles.input}></TextInput>
        <TextInput placeholder="Confirm Password " style={styles.input}></TextInput>
        <View style={{
          width: '100px',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 60,
        }}>
          <Button
            title="Create Account"
            color="#003cc0"
            onPress={() => navigation.navigate('ContentSelection')}

          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: "#aab5e6" }}>Already have an account?</Text>
 
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#013ebf", marginLeft: 5 }}>SignIn</Text> 
            </TouchableOpacity>
       
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#eceef3",
    padding: 10,
    borderRadius: 5,
  },

});

export default Registration;