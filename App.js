import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import Navigator from "./Screens/Navigator";

const App = () => {
  StatusBar.setBackgroundColor("rgba(255,255,255,0.2)");
  StatusBar.setTranslucent(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
