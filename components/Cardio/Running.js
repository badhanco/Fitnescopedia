import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Running = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('../assets/Running.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Running
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Slightly lean forward from your waist while engaging your core.</Text>
                                    <Text style={styles.textlist}>2. Lift your chest, soften your shoulders, and draw them away from your ears.</Text>
                                    <Text style={styles.textlist}>3. Use short, fast strides to conserve energy.</Text>
                                    <Text style={styles.textlist}>4. To reduce your chance of injury, land softly and quietly with minimal impact.</Text>
                                    <Text style={styles.textlist}>5. Use a forefoot strike, and propel yourself forward from your toes. With each step, lift your thigh so it’s parallel to the ground.</Text>
                                    <Text style={styles.textlist}>6. Bend your elbows at a 90-degree angle and draw them straight back and forth, using an exaggerated movement and moving them through a wider range of motion than when you jog.</Text>
                                    <Text style={styles.textlist}>7. Raise your hands as high as your chin and back toward your low back.</Text>
                                    <Text style={styles.textlist}>8. Avoid rotating your torso and bringing your arms across the midline of your body.</Text>
 



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



export default Running;





