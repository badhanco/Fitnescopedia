import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Dumbellpullover = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('./assets/dumbellpullover.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Dumbell Pull Over
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Grasp a dumbbell with both hands and position yourself on a flat bench with your shoulder blades resting on the bench. </Text>
                                    <Text style={styles.textlist}>2. You should be at a 90 degree angle to the bench. Your back shoulder be straight, knees bent at 90 degrees, and feet firmly plated on the floor.</Text>
                                    <Text style={styles.textlist}>3. Holding the dumbbell in both hands, straighten your arms so that dumbbell is directly overhead. This is the starting position.</Text>
                                    <Text style={styles.textlist}>4. Bending at the shoulders only and keeping your arms straight, slowly lower the weight down behind your head until the dumbbell reaches the height of the bench. </Text>
                                    <Text style={styles.textlist}>5. Slowly raise the dumbbell back to the starting position.</Text>
                                    <Text style={styles.textlist}>6. Repeat for desired reps.</Text>
            


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



export default Dumbellpullover;





