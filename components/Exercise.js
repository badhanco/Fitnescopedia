import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet,Pressable} from 'react-native';
import { AppBar } from "@react-native-material/core";

const Exercise = ({navigation}) => {
  return (

    <ScrollView>
     <View style={{ backgroundColor: "#ffffff", height: "100%" }}>
     <View style={{ marginTop: 50 }}>
          <AppBar title="Fitnescopedia" backgroundColor="#003cc0"/>
        </View>

        <View style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20
        }}>
          <Pressable onPress={() => navigation.navigate('Gym')}>
            <Image
              source={require('./assets/Gymworkout.jpg')}
              style={styles.imagestyle}
            />

            <View style={styles.imageview}>
              <Text style={styles.textstyle}>
              Gym workout
              </Text>
            </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Homeworkout')}>
            <Image
              source={require('./assets/Homeworkout.jpg')}
              style={styles.imagestyle}
            />

            <View style={styles.imageview}>
              <Text style={styles.textstyle}>
              Home workout
              </Text>
            </View>
            </Pressable>
     </View>
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
  imageview: {
    position: 'absolute',
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 15,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  textstyle: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagestyle: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 15,

  },
  imagebottom: {
    marginBottom: 20
  },
});

export default Exercise;