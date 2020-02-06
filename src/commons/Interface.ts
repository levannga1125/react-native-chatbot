export interface IResult {
    data: any;
    response: any;
}

export interface IError {
    code?: any;
    message?: string;
    extras?: any;
}

export interface ILoginErrorInfo {
    module?: string;
    p_error_code?: string;
    p_error_message?: string;
}

export interface IAlertButton {
    text: string;
    onPress?: () => void;
    uppercase?: boolean;
    style?: "cancel";
}

export interface IAlertOption {
    cancelable?: boolean;
    onDismiss?: () => void;
    customContain?: any;
    messageStyle?: any;
}

export interface ILanguage {
    value: string;
    label: string;
}

export interface ISetting {
    useMeterPerSecond?: boolean;
    receiveMockLocation?: boolean;
    language?: string;
}

export interface IRadioButton {
    label: string,
    value: string
}

// https://developers.google.com/android/reference/com/google/android/gms/location/DetectedActivity
export type TDetectedActivity = 0 | 1 | 2 | 3 | 4 | 5 | 7 | 8;

export type TLanguage = "en" | "vi";