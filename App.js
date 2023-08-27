import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import ContentSelection from "./components/ContentSelection";
import Exercise from "./components/Exercise";
import Posing from "./components/Posing";
import Meal from "./components/Meal";
import Yoga from "./components/Yoga";
import Gym from "./components/Gym";
import Homeworkout from './components/Homeworkout';
import Chestandcardio from './components/Chestandcardio';
import Chest from './components/Chest';
import Flatbenchpress from './components/Flatbenchpress';
import Inclinedbenchpress from './components/Inclinedbenchpress';
import Declinedbenchpress from './components/Declinedbenchpress';
import Dumbellfly from './components/Dumbellfly';
import Dumbellpullover from './components/Dumbellpullover';
import Cablecrossover from './components/Cablecrossover';
import Cardio from './components/Cardio/Cardio';
import MountainClimbers from './components/Cardio/MountainClimbers';
import Burpees from './components/Cardio/Burpees';
import JumpingJacks from './components/Cardio/JumpingJacks';
import HighKnees from './components/Cardio/HighKnees';
import JumpingRope from './components/Cardio/JumpingRope';
import Running from './components/Cardio/Running';
import Battelingropes from './components/Cardio/Battelingropes';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ContentSelection" component={ContentSelection} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="Posing" component={Posing} />
        <Stack.Screen name="Meal" component={Meal} />
        <Stack.Screen name="Yoga" component={Yoga} />
        <Stack.Screen name="Gym" component={Gym} />
        <Stack.Screen name="Homeworkout" component={Homeworkout} />
        <Stack.Screen name="Chestandcardio" component={Chestandcardio} />
        <Stack.Screen name="Chest" component={Chest} />
        <Stack.Screen name="Flatbenchpress" component={Flatbenchpress} />
        <Stack.Screen name="Inclinedbenchpress" component={Inclinedbenchpress} />
        <Stack.Screen name="Declinedbenchpress" component={Declinedbenchpress} />
        <Stack.Screen name="Dumbellfly" component={Dumbellfly} />
        <Stack.Screen name="Dumbellpullover" component={Dumbellpullover} />
        <Stack.Screen name="Cablecrossover" component={Cablecrossover} />
        <Stack.Screen name="Cardio" component={Cardio} />
        <Stack.Screen name="MountainClimbers" component={MountainClimbers} />
        <Stack.Screen name="Burpees" component={Burpees} />
        <Stack.Screen name="JumpingJacks" component={JumpingJacks} />
        <Stack.Screen name="HighKnees" component={HighKnees} />
        <Stack.Screen name="JumpingRope" component={JumpingRope} />
        <Stack.Screen name="Running" component={Running} />
        <Stack.Screen name="Battelingropes" component={Battelingropes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
