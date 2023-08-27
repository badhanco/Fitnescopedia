import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Inclinedbenchpress = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('./assets/Inclinedbenchpress.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Inclined Bench Press
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Lie flat on an incline bench and set your hands just outside of shoulder width. </Text>
                                    <Text style={styles.textlist}>2. Set your shoulder blades by pinching them together and driving them into the bench.</Text>
                                    <Text style={styles.textlist}>3. Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.</Text>
                                    <Text style={styles.textlist}>4. Let the weight settle and ensure your upper back remains tight after lift off.</Text>
                                    <Text style={styles.textlist}>5. Inhale and allow the bar to descend slowly by unlocking the elbows.</Text>
                                    <Text style={styles.textlist}>6. Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.</Text>
                                    <Text style={styles.textlist}>7. Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.</Text>
                                    <Text style={styles.textlist}>8. Repeat for the desired number of repetitions.</Text>



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



export default Inclinedbenchpress;





