import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Homeworkout = ({ navigation }) => {

  return (

    <ScrollView>
      <View style={{ marginTop: 50 }}>
          <AppBar title="Exercise" backgroundColor="#151718" />
        </View>
      <View style={{ backgroundColor:'#151718'}}>

        <View>
          <Image
            source={require('./assets/Homeworkout.jpg')}
            style={styles.imagestyle}
          />
        </View>

        <View style={{marginTop:-60 , backgroundColor:'#151718' , borderRadius:30}}>
          <View style={{ marginTop: 10, marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 , color:'white' }}>
              Full Body Home Workout
            </Text>
          </View>



          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('../components/assets/chest1.gif')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold' ,color:'white' , fontSize:20}}>Chest & Cardio</Text>
                <Text style={{color:'white' , fontSize:10}}>Monday</Text>
              </View>

            </View>

          </View>

          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/back1.gif')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold' ,color:'white' , fontSize:20 }}>Back</Text>
                <Text style={{color:'white' , fontSize:10}}>Tuesday</Text>
              </View>

            </View>

          </View>
          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/biceps.gif')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold'  ,color:'white' , fontSize:20}}>Biceps & Triceps</Text>
                <Text style={{color:'white' , fontSize:10}}>Wednesday</Text>
              </View>

            </View>

          </View>
          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/shoulder1.gif')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold' ,color:'white' , fontSize:20 }}>Shoulders </Text>
                <Text style={{color:'white' , fontSize:10}}>Thursday</Text>
              </View>

            </View>

          </View>
          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/thighs1.gif')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold'  ,color:'white' , fontSize:20}}>Glutes and quads</Text>
                <Text style={{color:'white' , fontSize:10}}>Friday</Text>
              </View>

            </View>

          </View>
          <View style={{ margin: 10 }}>

            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

              <Image
                source={require('./assets/abs.gif')}
                style={styles.exerciseview}
              />
              <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold' ,color:'white' , fontSize:20 }}>Abs/Abdominal</Text>
                <Text style={{color:'white' , fontSize:10}}>Saturday</Text>
              </View>

            </View>

          </View>
        </View>
      </View>
    </ScrollView>


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



export default Homeworkout;





