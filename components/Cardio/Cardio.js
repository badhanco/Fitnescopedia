import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Cardio = ({ navigation }) => {

    return (

        <ScrollView>
            <View style={{ marginTop: 50 }}>
                <AppBar title="Exercise" backgroundColor="#151718" />
            </View>
            <View style={{ backgroundColor: '#151718' }}>

                <View>
                    <Image
                        source={require('../assets/cardio.jpg')}
                        style={styles.imagestyle}
                    />
                </View>

                <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30 }}>
                    <View style={{ marginTop: 10, marginBottom: 8 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Cardio
                        </Text>
                    </View>



                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Battelingropes')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('../assets/BattlingRopes.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Battling Ropes </Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('MountainClimbers')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('../assets/MountainClimbers.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Mountain Climbers</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Running')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('../assets/Running.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Running</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('JumpingJacks')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('../assets/JumpingJacks.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Jumping Jacks</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Burpees')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('../assets/burpees.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Burpees</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('HighKnees')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('../assets/HighKnees.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>High Knees</Text>

                                </View>

                            </View>
                        </Pressable>

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



export default Cardio;





