import { WHITE, BLACK } from './Colors';
import { Platform, Dimensions, PixelRatio, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export const MainFontBold = 'samimBold';
export const MainFont = 'samim';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

export const onNormalize = (size: number): number => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const onHeaderBasicStyle = (title: string): any => {
  return ({
      title,
      headerStyle: {
        backgroundColor: WHITE,
        elevation: 0,
        shadowColor: 'transparent'
      },
      headerTintColor: BLACK,
      headerTitleStyle: {
        fontFamily: MainFontBold,
        fontSize: onNormalize(16),
        fontWeight: '500',
        alignSelf: 'center'
      },
      headerTitleAlign: 'center'
    }
  );
};

export const Container: ViewStyle = {
  flex: 1,
  padding: onNormalize(16),
  alignItems: 'stretch',
  backgroundColor: WHITE
};

export const RowContainer: ViewStyle = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export const ButtonStyle: ViewStyle | TextStyle | ImageStyle = {
  backgroundColor: BLACK,
  width: 'auto',
  height: onNormalize(48),
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center'
};

export const ButtonOutStyle: ViewStyle | TextStyle | ImageStyle = {
  width: 'auto',
  height: onNormalize(48),
  borderRadius: 25,
  borderWidth:2,
  borderColor:BLACK,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center'
};

export const Shadow1 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.00,

  elevation: 1
};

export const Shadow3 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3
};

export const Shadow5 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5
};

export const Shadow7 = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 7
};

