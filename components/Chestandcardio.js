import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Chestandcardio = ({ navigation }) => {

  return (

    <View >
      <View style={{ marginTop: 50 }}>
        <AppBar title="Exercise" backgroundColor="#151718" />
      </View>
      <View style={{ backgroundColor: '#151718' }}>

        <View>
          <Image
            source={require('./assets/chest.jpg')}
            style={styles.imagestyle}
          />
        </View>

        <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30 , height:'100%' }}>
          <View style={{ marginTop: 10, marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
              Chest & Cardio
            </Text>
          </View>


        <Pressable onPress={() => navigation.navigate('Chest')}>
          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/chestexercise.jpg')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Chest </Text>
                <Text style={{ color: 'white', fontSize: 10 }}>Monday</Text>
              </View>

            </View>

          </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Cardio')}>
          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/cardio.jpg')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Cardio</Text>
                <Text style={{ color: 'white', fontSize: 10 }}>Monday</Text>
              </View>

            </View>

          </View>
          </Pressable>

        </View>
      </View>
    </View>



  );
};

const styles = StyleSheet.create({

  imagestyle: {

    width: '100%',
    height: 300,

  },

  exerciseview: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },




});



export default Chestandcardio;





