import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { AppBar } from "@react-native-material/core";


const Chest = ({ navigation }) => {

    return (

        <ScrollView>
            <View style={{ marginTop: 50 }}>
                <AppBar title="Exercise" backgroundColor="#151718" />
            </View>
            <View style={{ backgroundColor: '#151718' }}>

                <View>
                    <Image
                        source={require('./assets/chestexercise.jpg')}
                        style={styles.imagestyle}
                    />
                </View>

                <View style={{ marginTop: -60, backgroundColor: '#151718', borderRadius: 30 }}>
                    <View style={{ marginTop: 10, marginBottom: 8 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20, color: 'white' }}>
                            Chest
                        </Text>
                    </View>



                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Flatbenchpress')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('./assets/flatbenchpress.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Flat BenchPress</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Inclinedbenchpress')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('./assets/Inclinedbenchpress.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Inclined bench Press</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Declinedbenchpress')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('./assets/declinedbenchpress.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Declined bench Press</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Dumbellfly')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('./assets/Dumbellfly.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Dumbell fly</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Cablecrossover')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('./assets/Cablecrossover.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Cable cross Over</Text>

                                </View>

                            </View>
                        </Pressable>

                    </View>

                    <View style={{ margin: 10 }}>

                        <Pressable onPress={() => navigation.navigate('Dumbellpullover')}>
                            <View style={{ width: '100%', height: 80, flexDirection: 'row', backgroundColor: '#1e2021', paddingTop: 15, paddingLeft: 15, borderRadius: 10 }}>

                                <Image
                                    source={require('./assets/dumbellpullover.gif')}
                                    style={styles.exerciseview}
                                />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Dumbell Pull Over</Text>

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



export default Chest;





