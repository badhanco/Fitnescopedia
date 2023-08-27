import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const MountainClimbers = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('../assets/MountainClimbers.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Mountain Climbers
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Put both hands and knees on the floor. </Text>
                                    <Text style={styles.textlist}>2. Place your right foot near your right hand and extend your left leg behind you. </Text>
                                    <Text style={styles.textlist}>3. In one smooth motion, switch your legs, keeping your arms in the same position. </Text>
                                    <Text style={styles.textlist}>4. Switch your legs back and forth twice, such that your right leg is again close to your right hand. </Text>




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

    textlist: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,

    },
    exerciseview: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },




});



export default MountainClimbers;





