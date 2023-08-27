import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Dumbellfly = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('./assets/Dumbellfly.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Dumbell Fly
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Start with your back flat on an incline bench, which is lowered to 30 degrees. Hold 1 dumbbell in each hand. </Text>
                                    <Text style={styles.textlist}>2. Start with your arms at chest level at your sides, elbows bent and pointing out.</Text>
                                    <Text style={styles.textlist}>3. Slowly exhale and lift your arms above your chest.</Text>
                                    <Text style={styles.textlist}>4. Inhale and slowly lower your arms to your sides to the starting position.</Text>
                                    <Text style={styles.textlist}>5. Continue to press up.</Text>
                                    <Text style={styles.textlist}>6. Repeat for the desired number of repetitions.</Text>



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



export default Dumbellfly;





