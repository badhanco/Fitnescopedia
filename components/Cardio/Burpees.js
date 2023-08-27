import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Burpees = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('../assets/burpees.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Burpees
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Begin in a standing position. Position your feet shoulder-width apart. Keep your back straight, your chest out and your arms at your sides. </Text>
                                    <Text style={styles.textlist}>2. Drop into a squat. Bend your knees, driving them out slightly past your toes, while bringing your butt down. Keep your feet flat on the floor. Place your hands on the floor (palms down) in front of your feet.</Text>
                                    <Text style={styles.textlist}>3. Kick your legs back into a high plank position. Your body should be in a straight line from shoulders to heels. Lock your arms in place. Keep your head straight, eyes looking slightly ahead. </Text>
                                    <Text style={styles.textlist}>4. Lower toward the ground. Bend your elbows and bring your body toward the floor. (Basically, the bottom part of a push-up.) Keep your body straight and your core tight.</Text>
                                    <Text style={styles.textlist}>5. Rise back to high plank. Focus on keeping your body straight.</Text>
                                    <Text style={styles.textlist}>6. Return to a squat position. Jump your legs forward. When you land, make sure your feet are flat on the floor. (Your positioning at the end of this move should be the same as in Step 2.)</Text>
                                    <Text style={styles.textlist}>7. Jump! Reach your arms up as you launch toward the ceiling. “It should be an explosive jump,”. Land in the original standing position and then go back to Step 1 and restart the process.</Text>



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



export default Burpees;





