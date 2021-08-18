import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainFont, onNormalize } from '../style/Styles';
import { BLACK, LIGHT, MEDIUM } from '../style/Colors';


interface Props {
  label: String,
  desc?: String,
  icon?: ReactNode,
  rowDirection?: 'row' | 'row-reverse'
  onPress: () => void,
  disable?: boolean,
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined
}

const BottomSheetItem = ({ label, desc, icon, disable = false, rowDirection = 'row-reverse', textAlign, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, { flexDirection: rowDirection }]} onPress={onPress} disabled={disable}>
      {icon}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[styles.label, { color: disable ? MEDIUM : styles.label.color, textAlign }]}>{label}</Text>
        {desc && <Text style={[styles.desc, { textAlign }]}>{desc}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row-reverse',
    alignSelf: 'stretch'
  },
  label: {
    fontSize: onNormalize(18),
    fontFamily: MainFont,
    color: BLACK,
    marginBottom: onNormalize(8)
  },
  desc: {
    fontFamily: MainFont,
    color: MEDIUM,
    fontSize: onNormalize(13)
  }
});

export default BottomSheetItem;
