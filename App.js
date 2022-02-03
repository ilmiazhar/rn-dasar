import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 10, flexDirection: "row", }}>
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>A</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>B</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

{
  /* <View style={{ padding: 50 }}>
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
    </View> */
}
