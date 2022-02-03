import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TextInput
          placeholder="Enter your goal..."
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "80%"
          }}
        ></TextInput>
        <Button title="ADD" style={{ padding: 10 }}></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
