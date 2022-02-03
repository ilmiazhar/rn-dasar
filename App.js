import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal..."
          style={styles.inputText}
        ></TextInput>
        <Button title="ADD" style={{ padding: 10 }}></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});
