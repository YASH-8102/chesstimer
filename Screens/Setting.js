import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import Back from "../Assets/back.svg";

export default function Setting({ navigation }) {
  return (
    <>
      <StatusBar
        backgroundColor={"rgba(59,59,59,1)"}
        translucent={false}
        barStyle={"light-content"}
        animated={true}
      />
      <View style={styles.screen}>
        <View style={styles.headercontainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("home");
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Back width={25} height={25} />
            </View>
          </TouchableWithoutFeedback>
          <View style={{ marginLeft: 10, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "yn",
                fontSize: 18,
                color: "white",
                textAlignVertical: "center",
              }}
            >
              Setting
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Setting karvi dyo</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headercontainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    flexDirection: "row",
  },
});
