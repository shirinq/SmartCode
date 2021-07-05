import React, { useState } from "react";
import { Icon, Input, InputProps } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { MainFont, MainFontBold, onNormalize } from "../style/Styles";
import { BLACK, WHITE } from "../style/Colors";

/*<View style={styles.container}>
  {props.label && <Text style={[props.labelStyle, styles.label]}>{props.label}</Text>}
  <Input {...props} label="" inputContainerStyle={[props.inputContainerStyle, styles.inputContainer]} containerStyle={{ paddingVertical: 0, paddingBottom: 0, padding: 0 }} />
</View>*/
const TextInput = (props: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  return   <Input {...props} inputContainerStyle={[styles.inputContainer, props.inputContainerStyle]} inputStyle={[{fontFamily:MainFont, fontSize:onNormalize(14)}, props.inputStyle]} containerStyle={[styles.container, props.containerStyle]} />;
};
export default TextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f4f5",
    marginVertical: 5,
    borderRadius: 8,
    height: onNormalize(55),
    paddingVertical:0
  },
  label: {
    fontFamily: MainFontBold,
    color: BLACK,
    fontSize: onNormalize(14),
    padding: 8
  },
  inputContainer: {
    borderBottomWidth:0,
  }
});
