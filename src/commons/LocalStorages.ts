import { AsyncStorage } from "react-native";

import Helpers from "./Helpers";

/**
 * LocalStorages.ts
 *
 * Support for get/set data in AsyncStorage.
 */
const LocalStorages = {

    // debugLog: __DEV__,
    debugLog: false,

    /**
     * Remove data stored in AsyncStorage by key.
     *
     * @param {string} key Key
     */
    remove: async (key: string) => {
        if (LocalStorages.debugLog) {
            console.log(`LocalStorages#remove(key): key=${key}`);
        }
        return await AsyncStorage.removeItem(key);
    },

    /**
     * Get data stored in AsyncStorage by key.
     *
     * @param {string} key Key
     * @param {string} defaultValue Value return if null
     * @returns {string} String data, if not exist return null
     */
    getString: async (key: string, defaultValue?: string) => {
        let result: any = null;
        try {
            result = await AsyncStorage.getItem(key);
            if (Helpers.isNullOrEmpty(result) && !Helpers.isNullOrEmpty(defaultValue)) {
                result = defaultValue;
            }
        } catch (error) {
            if (__DEV__) {
                console.log("LocalStorages#getString", error);
            }
        }
        if (LocalStorages.debugLog) {
            console.log(`LocalStorages#getString(key): key=${key}, result=${result}`);
        }
        return result;
    },

    /**
     * Set data to AsyncStorage.
     *
     * @param {string} key Key
     * @param {string} str String data
     */
    setString: async (key: string, str: string) => {
        if (LocalStorages.debugLog) {
            console.log(`LocalStorages#setString(key, str): key=${key}, str=${str}`);
        }
        try {
            return await AsyncStorage.setItem(key, str);
        } catch (error) {
            if (__DEV__) {
                console.log("LocalStorages#setString", error);
            }
        }
    },

    /**
     * Get data stored in AsyncStorage by key.
     *
     * @param {string} key Key
     * @param {string} defaultValue Value return if null
     * @returns {object} Object data, if not exist return null
     */
    getObject: async (key: string, defaultValue?: any) => {
        let result: any = null;
        try {
            const jsonStr = await AsyncStorage.getItem(key);
            if (jsonStr != null) {
                result = JSON.parse(jsonStr);
            } else if (!Helpers.isNullOrEmpty(defaultValue)) {
                result = defaultValue;
            }
        } catch (error) {
            if (__DEV__) {
                console.log("LocalStorages#getObject", error);
            }
        }
        if (LocalStorages.debugLog) {
            console.log(`LocalStorages#getObject(key): key=${key}, result=`, result);
        }
        return result;
    },

    /**
     * Set data to AsyncStorage.
     *
     * @param {string} key Key
     * @param {any} obj Object data
     */
    setObject: async (key: string, obj: any) => {
        if (LocalStorages.debugLog) {
            console.log(`LocalStorages#setObject(key, obj): key=${key}, obj=`, obj);
        }
        const jsonStr = JSON.stringify(obj);
        return await LocalStorages.setString(key, jsonStr);
    },
};

export default LocalStorages;
