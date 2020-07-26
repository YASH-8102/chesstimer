import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, StatusBar, Animated } from "react-native";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import Back from "../Assets/back.svg";
import Line from "../Assets/Line.svg";
import Values from "../Assets/shortcut";
import Theme1 from "../Assets/theme1.svg";
import Theme2 from "../Assets/theme2.svg";
import Theme3 from "../Assets/theme3.svg";
import Theme4 from "../Assets/theme4.svg";
import Theme5 from "../Assets/theme5.svg";
import Theme6 from "../Assets/theme6.svg";
import Tick from "../Assets/tick.svg";
import AnimatedButton from "../Components/AnimatedButton";
const Pallet = (params) => {
  const tick = useRef(new Animated.Value(0)).current;
  if (params.activeid === params.id) {
    Animated.timing(tick, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(tick, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }
  return (
    <TouchableWithoutFeedback
      style={{ marginHorizontal: 20 }}
      onPress={() => {
        params.onclick(params.id);
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: 22,
          left: 22,
          zIndex: 1,
          transform: [{ scale: tick }],
        }}
      >
        <Tick width={36} height={36} />
      </Animated.View>
      {params.children}
    </TouchableWithoutFeedback>
  );
};

export default function Theme({ route, navigation }) {
  const fontsize = ((Values.windowHeight * 0.3) / 2) * 0.23;
  const [activecolor, setactivecolor] = useState(route.params.obj);
  const [activeid, setactiveid] = useState(activecolor.id);

  const mypallet = {
    Theme1: {
      topcolor: "#ADEFD1",
      bottomcolor: "#00203F",
      statuscolor: "rgba(173, 239, 209,0.7)",
      id: "Theme1",
    },
    Theme2: {
      topcolor: "#F9D342",
      bottomcolor: "#292826",
      statuscolor: "rgba(249, 211, 66,0.7)",
      id: "Theme2",
    },
    Theme3: {
      topcolor: "#1B1B1B",
      bottomcolor: "#E1E1E1",
      statuscolor: "rgba(27, 27, 27,0.7)",
      id: "Theme3",
    },
    Theme4: {
      topcolor: "#ff4040",
      bottomcolor: "#1a2228",
      statuscolor: "rgba(255, 64, 64,0.7)",
      id: "Theme4",
    },
    Theme5: {
      topcolor: "#FBF8BE",
      bottomcolor: "#234E70",
      statuscolor: "rgba(251, 248, 190,0.7)",
      id: "Theme5",
    },
    Theme6: {
      topcolor: "#F2EDD7",
      bottomcolor: "#755139",
      statuscolor: "rgba(242, 237, 215,0.7)",
      id: "Theme6",
    },
  };

  const themechecker = (id) => {
    setactiveid(id);
    setactivecolor(mypallet[id]);
  };

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
            <View style={styles.iconContainer}>
              <Back width={25} height={25} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.headertextcontainer}>
            <Text style={styles.headertext}>Themes</Text>
          </View>
        </View>

        <View style={styles.topcontainer}>
          <View style={styles.previewcontainer}>
            <View
              style={[
                styles.previewtopcontainer,
                { backgroundColor: activecolor.topcolor },
              ]}
            >
              <Text
                style={{
                  fontFamily: "yn",
                  fontSize: fontsize,
                  color: activecolor.bottomcolor,
                }}
              >
                10:00
              </Text>
            </View>
            <View
              style={[
                styles.previewbottomcontainer,
                { backgroundColor: activecolor.bottomcolor },
              ]}
            >
              <Text
                style={{
                  fontFamily: "yn",
                  fontSize: fontsize,
                  color: activecolor.topcolor,
                }}
              >
                10:00
              </Text>
            </View>
          </View>
          <View style={styles.linecontainer}>
            <Line width={"90%"} />
          </View>
        </View>

        <View style={{ height: "30%" }}>
          <ScrollView
            verticle={true}
            contentContainerStyle={{
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
          >
            <View
              style={{
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
              }}
            >
              <Pallet id={"Theme1"} onclick={themechecker} activeid={activeid}>
                <Theme1 width={80} height={80} />
              </Pallet>
              <Pallet id={"Theme2"} onclick={themechecker} activeid={activeid}>
                <Theme2 width={80} height={80} />
              </Pallet>
              <Pallet id={"Theme3"} onclick={themechecker} activeid={activeid}>
                <Theme3 width={80} height={80} />
              </Pallet>
            </View>

            <View
              style={{
                marginVertical: 20,
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
              }}
            >
              <Pallet id={"Theme4"} onclick={themechecker} activeid={activeid}>
                <Theme4 width={80} height={80} />
              </Pallet>
              <Pallet id={"Theme5"} onclick={themechecker} activeid={activeid}>
                <Theme5 width={80} height={80} />
              </Pallet>
              <Pallet id={"Theme6"} onclick={themechecker} activeid={activeid}>
                <Theme6 width={80} height={80} />
              </Pallet>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttoncontainer}>
          <AnimatedButton
            width={"80%"}
            title={"Apply"}
            ripple={activecolor.statuscolor}
            color={activecolor.bottomcolor}
            textcolor={activecolor.topcolor}
            click={() => {
              navigation.navigate("home", { obj: activecolor });
            }}
          />
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
  iconContainer: {
    width: 50,
    height: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  headertextcontainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  headertext: {
    fontFamily: "JosefinSans-Medium",
    fontSize: 18,
    color: "white",
    textAlignVertical: "center",
  },
  topcontainer: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  previewcontainer: {
    height: Values.windowHeight * 0.3,
    width: (Values.windowHeight * 0.3 * 9) / 16,
  },
  previewtopcontainer: {
    transform: [{ rotate: "180deg" }],
    height: "50.5%",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  previewbottomcontainer: {
    height: "50.5%",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  linecontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttoncontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "4%",
  },
});
