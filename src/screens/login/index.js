import axios from "axios"
import React, { useEffect, useState, Suspense } from "react"
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
	Dimensions,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import Icon from "react-native-vector-icons/AntDesign"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = ({ navigation }) => {
	const [data, setData] = useState()
	const [showPass, setShowPass] = useState(true)

	const handleSubmit = () => {
		console.info(data)

		axios
			.post("http://localhost:3000/login", {
				email: data.email,
				password: data.password,
			})
			.then((res) => {
				if (res.data.accessToken) {
					alert("login berhasil")
					AsyncStorage.setItem("_fadliapp", res.data.accessToken)
					navigation.navigate("Home")
				}
			})
			.catch((err) => {
				alert(err.response.data)
				console.error(err.response.data)
			})
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<KeyboardAwareScrollView>
				<View style={styles.container}>
					<Text style={styles.label}>email</Text>
					<TextInput
						style={styles.input}
						placeholder="masukan email"
						autoCapitalize="none"
						autoComplete="email"
						onChangeText={(val) => {
							setData(
								(prev) =>
									(prev = {
										...prev,
										email: val,
									})
							)
						}}
					/>

					<Text style={styles.label}>password</Text>

					<View
						style={{
							flexDirection: "row",
							width: "100%",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							activeOpacity={0.5}
							style={{
								position: "absolute",
								right: 0,
								padding: 10,
								zIndex: 100,
							}}
							onPress={() => {
								setShowPass(!showPass)
							}}
						>
							<Icon name={!showPass ? "eye" : "eyeo"} style={{ fontSize: 16 }} />
						</TouchableOpacity>
						<TextInput
							secureTextEntry={showPass}
							style={styles.input}
							placeholder="masukan password"
							autoCapitalize="none"
							onChangeText={(val) => {
								setData(
									(prev) =>
										(prev = {
											...prev,
											password: val,
										})
								)
							}}
						/>
					</View>
					<TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
						<Text>Submit</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	)
}

export default Login

const styles = StyleSheet.create({
	input: {
		borderWidth: 0.5,
		borderColor: "gray",
		height: 50,
		padding: 10,
		fontSize: 14,
		color: "gray",
		marginVertical: 10,
		width: "100%",
	},
	label: {
		fontSize: 12,
	},
	container: {
		justifyContent: "center",
		height: Dimensions.get("window").height,
		padding: 20,
	},
	formButton: {
		width: "100%",
		height: 50,
		backgroundColor: "gray",
		justifyContent: "center",
		alignItems: "center",
	},
})
