import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Home() {
	const getAsync = async () => {
		let token = await AsyncStorage.getItem("_fadliapp")
		return token
	}

	useEffect(() => {
		getAsync().then((token) => console.log(token))
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ color: "white" }}>fadliselaz</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "orange",
		alignItems: "center",
		justifyContent: "center",
	},
})
