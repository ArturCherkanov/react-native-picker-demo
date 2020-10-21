import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function App () {
	return (
		<View style={styles.container}>
			<RNPickerSelect
				items={[
					{ label: "Football", value: "football" },
					{ label: "Baseball", value: "baseball" },
					{ label: "Hockey", value: "hockey" },
				]}
			/>
			<Text>Hello world</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : "#fff",
		alignItems      : "center",
		justifyContent  : "center",
	},
});
