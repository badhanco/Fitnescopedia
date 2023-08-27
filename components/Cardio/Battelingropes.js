import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Battelingropes = ({ navigation }) => {

    return (
        <ScrollView>
     
                <View style={{ marginTop: 50 }}>
                    <AppBar title="Exercise" backgroundColor="#151718" />
                </View>
                <View style={{ backgroundColor: '#151718' }}>

                    <View>
                        <Image
                            source={require('../assets/BattlingRopes.gif')}
                            style={styles.imagestyle}
                        />
                    </View>

                    <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30, height: '100%' , marginBottom:50}}>
                        <View style={{ marginTop: 10, marginBottom: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Batteling Ropes
                            </Text>
                        </View>



                        <View style={{ margin: 10 }}>

                            <View style={{ width: '100%', height: '100%', flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>


                                <View style={{ marginLeft: 10, flexDirection: 'column', color: 'white' }}>

                                    <Text style={styles.textlist}>1. Stand facing the anchor, with one rope in each hand, palm facing in. </Text>
                                    <Text style={styles.textlist}>2. Bend your knees and lean forward slightly, then “whip” the first rope with one arm to create a wave pattern that reaches all the way to the anchor.</Text>
                                    <Text style={styles.textlist}>3. Follow the same movement with the second rope almost immediately after beginning it with the first. The two waves should follow closely one after the other.</Text>
                                    <Text style={styles.textlist}>4. Alternate the waves rapidly and continuously.</Text>
 
                 



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



export default Battelingropes;





