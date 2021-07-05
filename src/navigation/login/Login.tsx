import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Props } from "../index";
import { BLACK, WHITE } from "../../style/Colors";
import { ButtonStyle, MainFont, MainFontBold, onNormalize } from "../../style/Styles";
import Footer from "./Footer";
import { LOGIN_UP } from "../../utils/Const";

const Login = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <Avatar source={require("../../assets/images/logoBlack.png")} size={150} containerStyle={{ marginBottom: 40 }} />
      <Text style={styles.welcome}>خوش آمدید</Text>
      <Text style={styles.subtitle}>برای ورود میتوانید از یکی از روش های زیر استفاده کنید.</Text>
      <View style={{ flexDirection: "row", marginTop: 80, alignSelf: "stretch", alignItems: "center", justifyContent: "space-evenly" }}>
        <Button titleStyle={styles.btnTitle} buttonStyle={[ButtonStyle]} containerStyle={{ width: "45%" }} title="ورود با نام کاربری" onPress={() => navigation.navigate(LOGIN_UP)} />
        <Button titleStyle={styles.btnTitle} buttonStyle={[ButtonStyle]} containerStyle={{ width: "45%" }} title="QR Code" />
      </View>
      <Footer />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  lottie: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    top: 10,
    flexDirection: "row",
    left: 0,
    right: 0
  },
  welcome: {
    marginTop: 20,
    alignSelf: "flex-end",
    color: BLACK,
    fontSize: 20,
    fontFamily: MainFontBold
  },
  container: {
    alignItems: "center",
    backgroundColor: WHITE,
    padding: 16,
    flex: 1
  },
  btnTitle: {
    fontFamily: MainFont,
    fontSize: onNormalize(14)
  },
  subtitle: {
    alignSelf: "flex-end",
    fontFamily: MainFont,
    fontSize: onNormalize(14),
    color: "#4b4b4b",
    marginTop: 20
  }
});
