import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";
 


const JumpingJacks = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('../assets/JumpingJacks.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Jumping Jacks
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Stand in a straight position with your feet together, arms fully extended, hands by your sides, and toes pointed forward. This athletic position is the starting step.  </Text>
                                    <Text style={styles.textlist}>2. Next, slightly bend your knee in a rapid movement, jump your feet out to your body’s sides, swing your arms out to either side and raise them above your head. Make sure to do all of these things simultaneously. </Text>
                                    <Text style={styles.textlist}>3. After landing on the ground, reverse the pattern and return to your starting position with arms by your side and feet together. </Text>
                                    <Text style={styles.textlist}>4. Repeat the entire process, performing between 10 to 100 reps for about six sets. Remember to maintain your posture and avoid slouching or twisting your toes outward.</Text>
                                   



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



export default JumpingJacks;





