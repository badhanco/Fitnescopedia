import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Button } from "react-native";
 


const SignIn = ({ navigation }) => {


    return (


        <View>
      

            <View style={{ flexDirection: "column", backgroundColor: "#ffffff", height: "100%" }}>


                <View style={{
                    marginTop: 150,
                    Textalign: "center",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <Text style={{
                        color: "#003cc0",
                        fontSize: 35,
                        fontWeight: "bold",

                    }}>
                        Welcome Back</Text>

                    <Text style={{ color: "#aab5e6" }}>Signin to Continue</Text>

                    <View style={{ marginTop: 60, width: '80%' }}>
                        <TextInput placeholder="Enter Your Name" style={styles.input}></TextInput>
                        <TextInput placeholder="Enter Your Password" style={styles.input}></TextInput>
                        <Pressable><Text onPress={() => navigation.navigate('Registration')} style={{
                            color: "#013ebf",
                            textAlign: "right",
                            marginRight: 10,
                            marginBottom: 10,
                            marginTop: 2
                        }}>Forgot Password?</Text></Pressable>
                        <View style={{
                            width: '100px',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 80,
                        }}>
                            <Button
                                style={styles.buttonstyle}
                                title="Sign In"
                                color="#003cc0"
                                onPress={() => navigation.navigate('ContentSelection')}

                            />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: "#aab5e6" }}>Don't have an account?</Text>
                            <Pressable><Text onPress={() => navigation.navigate('Registration')} style={{ color: "#013ebf", marginLeft: 5 }}>Register</Text></Pressable>
                        </View>
                    </View>

                </View>


            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#eceef3",
        padding: 10,
        borderRadius: 5,
    },
    buttonstyle: {
        marginTop: 20,
        width: 100,
        height: 50,
        backgroundColor: "#003cc0",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});

export default SignIn;