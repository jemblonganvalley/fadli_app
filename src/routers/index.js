import { View, Text } from "react-native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Login, SplashScreen } from "../screens"

const Stack = createNativeStackNavigator()

const Router = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Splash"
				component={SplashScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	)
}

export default Router
