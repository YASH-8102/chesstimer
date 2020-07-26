import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  StatusBar,
  Easing,
} from "react-native";
import Values from "../Assets/shortcut";
import Pause from "../Assets/pause.svg";
import Reset from "../Assets/reset.svg";
import Theme from "../Assets/theme.svg";
import Setting from "../Assets/settings.svg";

const top20 = Math.floor(Values.windowHeight * 0.2);
const top40 = Math.floor(Values.windowHeight * 0.4);
const top45 = Math.floor(Values.windowHeight * 0.45);
const top25 = Math.floor(Values.windowHeight * 0.25);
const top50 = Math.floor(Values.windowHeight * 0.5);
const top55 = Math.floor(Values.windowHeight * 0.55);
const top35 = Math.floor(Values.windowHeight * 0.35);
const top15 = Math.floor(Values.windowHeight * 0.15);
const top30 = Math.floor(Values.windowHeight * 0.3);
const top70 = Math.floor(Values.windowHeight * 0.7);
export default function Chess({ route, navigation }) {
  const activetheme = route.params
    ? route.params.obj
    : {
        topcolor: "#ADEFD1",
        bottomcolor: "#00203F",
        statuscolor: "rgba(173, 239, 209,0.5)",
        id: "Theme1",
      };
  const topcolor = activetheme.topcolor;
  const bottomcolor = activetheme.bottomcolor;
  const statuscolor = activetheme.statuscolor;

  const [mystat, setmystat] = useState(0);
  const [topCount, settopCount] = useState(0);
  const [bottomCount, setbottomCount] = useState(0);

  const [timer, settimer] = useState(0);
  const [isPause, setisPause] = useState(false);

  const [topText, settopText] = useState("Tap to start");
  const [bottomtext, setbottomText] = useState("Tap to start");

  const [topsecond, settopsecond] = useState("00");
  const [topminut, settopminut] = useState("10");
  const [bottomsecond, setbottomsecond] = useState("00");
  const [bottomminut, setbottomminut] = useState("10");

  const [pausevisible, setpausevisible] = useState(false);
  const [resetvisible, setresetvisible] = useState(false);
  const [themevisible, setthemevisible] = useState(true);
  const [settingvisible, setsettingvisible] = useState(true);

  const up = useRef(new Animated.Value(-top20)).current;
  const down = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const textup = useRef(new Animated.Value(Math.floor(top45 - 80))).current;
  const textdown = useRef(new Animated.Value(Math.floor(top25 - 80))).current;

  const pause = useRef(new Animated.Value(top50 - 45)).current;

  let timerup = null;
  let timerdown = null;

  const timehandler = (minut, second, setminut, setsecond) => {
    minut = parseInt(minut);
    second = parseInt(second);

    if (second == 0 && minut > 0) {
      minut = minut - 1;
      if (minut < 10) {
        minut = "0" + minut;
      }

      setminut(minut);
      setsecond(59);
    } else if (minut >= 0 && second > 0) {
      second = second - 1;
      if (second < 10) {
        second = "0" + second;
      }
      setsecond(second);
    }
  };

  useEffect(() => {
    if (timer === 1 && !isPause) {
      timerup = setTimeout(() => {
        timehandler(topminut, topsecond, settopminut, settopsecond);
      }, 1000);
    }
    if (timer === 2 && !isPause) {
      timerdown = setTimeout(() => {
        timehandler(bottomminut, bottomsecond, setbottomminut, setbottomsecond);
      }, 1000);
    }

    return () => {
      clearTimeout(timerup);
      clearTimeout(timerdown);
    };
  }, [mystat, bottomminut, topminut, topsecond, bottomsecond, timer, isPause]);

  const HideTextAnim = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.exp),
    }).start(() => {
      setbottomText("");
      settopText("");
    });
  };
  const ShowTextAnim = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.exp),
    }).start();
  };

  const bottomBigAnimation = () => {
    Animated.parallel([
      Animated.timing(up, {
        toValue: -top40,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(down, {
        toValue: -top20,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(textup, {
        toValue: top55 - 80,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(textdown, {
        toValue: top35 - 80,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(pause, {
        toValue: top30 - 40,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start();
  };
  const topBigAnimation = () => {
    Animated.parallel([
      Animated.timing(up, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(down, {
        toValue: top20,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(textup, {
        toValue: top35 - 80,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(textdown, {
        toValue: top15 - 80,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(pause, {
        toValue: top70 - 40,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start();
  };
  const initialAnimation = () => {
    Animated.parallel([
      Animated.timing(up, {
        toValue: -top20,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(down, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(textup, {
        toValue: top45 - 80,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(textdown, {
        toValue: top25 - 80,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(pause, {
        toValue: top50 - 40,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start();
  };

  const topEvents = () => {
    if (mystat === 0) {
      topBigAnimation();
      setmystat(1);
      settimer(1);
      setpausevisible(true);
      HideTextAnim();
      setthemevisible(false);
      setsettingvisible(false);
    } else if (mystat === 1 && isPause) {
      setisPause(false);
      HideTextAnim();
      setresetvisible(false);
      setpausevisible(true);
      setthemevisible(false);
      setsettingvisible(false);
    } else if (mystat === 1) {
      clearTimeout(timerup);
      settimer(2);
      bottomBigAnimation();
      setmystat(2);
      settopCount(topCount + 1);
    }
  };
  const bottomEvent = () => {
    if (mystat === 0) {
      bottomBigAnimation();
      setmystat(2);
      settimer(2);
      HideTextAnim();
      setpausevisible(true);
      setthemevisible(false);
      setsettingvisible(false);
    } else if (mystat === 2 && isPause) {
      HideTextAnim();
      setisPause(false);
      setresetvisible(false);
      setpausevisible(true);
      setthemevisible(false);
      setsettingvisible(false);
    } else if (mystat == 2) {
      clearTimeout(timerdown);
      settimer(1);
      topBigAnimation();
      setmystat(1);
      setbottomCount(bottomCount + 1);
    }
  };
  const middlebuttonEvent = () => {
    if (pausevisible) {
      setisPause(true);
      setpausevisible(false);
      setresetvisible(true);
      mystat == 1
        ? settopText("Tap to resume")
        : setbottomText("Tap to resume");
      ShowTextAnim();
      clearTimeout(timerup);
      clearTimeout(timerdown);
      setthemevisible(true);
      setsettingvisible(true);
    }
    if (resetvisible) {
      setisPause(false);
      setmystat(0);

      settimer(0);
      settopCount(0);
      setbottomCount(0);
      setbottomText("Tap to start");
      settopText("Tap to start");

      settopminut("10");
      settopsecond("00");
      setbottomminut("10");
      setbottomsecond("00");
      setresetvisible(false);
      setthemevisible(true);
      setsettingvisible(true);
      ShowTextAnim();

      initialAnimation();
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={statuscolor}
        translucent={false}
        animated={true}
      />
      <Animated.View
        style={[
          styles.upperpart,
          {
            backgroundColor: topcolor,
            transform: [{ translateY: up }],
          },
        ]}
      >
        <TouchableWithoutFeedback onPress={topEvents}>
          <View style={styles.subcontainer}>
            <Animated.View
              style={[
                styles.uppertextContainer,
                {
                  transform: [{ translateY: textup }, { rotate: "180deg" }],
                },
              ]}
            >
              <Text
                style={[styles.timeText, { color: bottomcolor }]}
              >{`${topminut}:${topsecond}`}</Text>
              <Animated.View
                style={[styles.temporarytextcontainer, { opacity: fadeAnim }]}
              >
                <Text style={[styles.temporarytext, { color: bottomcolor }]}>
                  {topText}
                </Text>
              </Animated.View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
      <Animated.View
        style={[
          styles.bottempart,
          {
            backgroundColor: bottomcolor,
            transform: [{ translateY: down }],
          },
        ]}
      >
        <TouchableWithoutFeedback onPress={bottomEvent}>
          <View style={styles.subcontainer}>
            <Animated.View
              style={[
                styles.bottomtextcontainer,
                { transform: [{ translateY: textdown }] },
              ]}
            >
              <Text style={[styles.timeText, { color: topcolor }]}>
                {`${bottomminut}:${bottomsecond}`}
              </Text>
              <Animated.View
                style={[styles.temporarytextcontainer, { opacity: fadeAnim }]}
              >
                <Text style={[styles.temporarytext, { color: topcolor }]}>
                  {bottomtext}
                </Text>
              </Animated.View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>

      <View style={styles.topcount}>
        <Text style={[styles.counttext, { color: bottomcolor }]}>
          {topCount}
        </Text>
      </View>
      <View style={styles.bottomcount}>
        <Text style={[styles.counttext, { color: topcolor }]}>
          {bottomCount}
        </Text>
      </View>

      <Animated.View
        style={[styles.middlecontainer, { transform: [{ translateY: pause }] }]}
      >
        <View
          style={{
            borderRadius: 40,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("setting");
              if (mystat != 0) {
                setisPause(true);
                setpausevisible(false);
                setresetvisible(true);
                mystat == 1
                  ? settopText("Tap to resume")
                  : setbottomText("Tap to resume");
                ShowTextAnim();
                clearTimeout(timerup);
                clearTimeout(timerdown);
              }
            }}
          >
            <View style={styles.themesubcontainer}>
              {settingvisible ? <Setting width={75} height={75} /> : <></>}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            borderRadius: 40,
          }}
        >
          <TouchableWithoutFeedback onPress={middlebuttonEvent}>
            <View style={styles.pausesubcontainer}>
              {pausevisible ? <Pause width={80} height={80} /> : <></>}
              {resetvisible ? <Reset width={80} height={80} /> : <></>}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            borderRadius: 40,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("theme", {
                obj: activetheme,
              });
              if (mystat != 0) {
                setisPause(true);
                setpausevisible(false);
                setresetvisible(true);
                mystat == 1
                  ? settopText("Tap to resume")
                  : setbottomText("Tap to resume");
                ShowTextAnim();
                clearTimeout(timerup);
                clearTimeout(timerdown);
              }
            }}
          >
            <View style={styles.settingsubcontainer}>
              {themevisible ? <Theme width={75} height={75} /> : <></>}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  upperpart: {
    backgroundColor: "#F68F7C",
    position: "absolute",
    width: "100%",
    height: top70,
  },
  subcontainer: {
    width: "100%",
    height: "100%",
  },
  uppertextContainer: {
    position: "absolute",
    top: 0,
    alignItems: "center",

    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: "100%",
  },
  timeText: {
    fontSize: 85,
    fontFamily: "yn",

    lineHeight: 100,
  },
  temporarytextcontainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  temporarytext: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "yn",
    color: "#E6E5E6",
  },

  bottempart: {
    backgroundColor: "#2E3A52",
    position: "absolute",
    width: "100%",
    height: top70,
    top: top50,
  },
  bottomtextcontainer: {
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: "100%",
  },
  topcount: { position: "absolute", top: 0, left: 0, margin: 20 },
  counttext: {
    fontFamily: "yn",
    fontSize: 28,
    color: "white",
  },
  bottomcount: { position: "absolute", bottom: 0, right: 0, margin: 20 },
  middlecontainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  pausesubcontainer: { width: 80, height: 80 },
  themesubcontainer: { width: 75, height: 75 },
  settingsubcontainer: { width: 75, height: 75 },
});
