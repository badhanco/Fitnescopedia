import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet,Pressable } from 'react-native';
import { AppBar } from "@react-native-material/core";

const ContentSelection = ({navigation}) => {
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

          
          <Pressable onPress={() => navigation.navigate('Exercise')}>
            <Image
              source={require('./assets/dumbbell.jpg')}
              style={styles.imagestyle}
            />

            <View style={styles.imageview}>
              <Text style={styles.textstyle}>
                Workout
              </Text>
            </View>
            </Pressable>
     
                
            <Pressable onPress={() => navigation.navigate('Meal')}>
            <Image
              source={require("./assets/meal.jpg")}
              style={styles.imagestyle}
            />
            <View style={styles.imageview}>
              <Text style={styles.textstyle}>
                Meal
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Yoga')}>
            <Image source={require("./assets/yoga.jpg")}
              style={styles.imagestyle}
            />
            <View style={styles.imageview}>
              <Text style={styles.textstyle}>
                Yoga
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Posing')}>
            <Image source={require("./assets/posing.jpg")}
              style={[styles.imagestyle, styles.imagebottom]}
            />
            <View style={styles.imageview}>
              <Text style={styles.textstyle}>
                Posing
              </Text>
            </View>
          </Pressable>

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  imagestyle: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 15,

  },
  imagebottom: {
    marginBottom: 20
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


});

export default ContentSelection;