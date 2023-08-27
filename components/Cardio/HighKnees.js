import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const HighKnees = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('../assets/HighKnees.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            High Knees
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Stand tall with your feet about hip-to-shoulder-width apart and your arms at your sides.</Text>
                                    <Text style={styles.textlist}>2. Looking straight ahead, open your chest, and engage your core muscles.</Text>
                                    <Text style={styles.textlist}>3. Begin by bringing your right knee toward your chest, slightly above waist level. Simultaneously, move your left hand up in a pumping motion.</Text>
                                    <Text style={styles.textlist}>4. Quickly lower your right leg and left hand.</Text>
                                    <Text style={styles.textlist}>5. Repeat with your left leg and right hand.</Text>
                                    <Text style={styles.textlist}>6. Alternate your right and left leg for the desired time.</Text>



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



export default HighKnees;





