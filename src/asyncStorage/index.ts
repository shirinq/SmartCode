import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEYBOARD_SETTING, LOCALE } from '../utils/Const';

/**
 * <culture>
 */
export const getLocale = async (): Promise<string> => {
  try {
    const data = await AsyncStorage.getItem(LOCALE);
    if (data !== null)
      return data;
    return 'fa';
  } catch (e) {
    return 'fa';
  }
};

export const setLocale = async (locale: string) => {
  try {
    await AsyncStorage.setItem(LOCALE, locale);
  } catch (e) {
  }
};
/**
 * <keyboard setting>
 */
export const getKeyboardSetting = async (): Promise<{ isRandom: boolean, isSystem: boolean }> => {
  try {
    let jsonValue = await AsyncStorage.getItem(KEYBOARD_SETTING);
    return jsonValue != null ? JSON.parse(jsonValue) : { isRandom: false, isSystem: false };
  } catch (e) {
    return { isRandom: false, isSystem: false };
  }
};

export const setKeyboardSetting = async (setting: { isRandom: boolean, isSystem: boolean }) => {
  try {
    const jsonValue = JSON.stringify(setting);
    await AsyncStorage.setItem(KEYBOARD_SETTING, jsonValue);
  } catch (e) {
  }
};
