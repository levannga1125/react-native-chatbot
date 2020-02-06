// react
// react-native
import React, { PureComponent } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ViewProps,
} from "react-native";

// ../commons
// ../constants
import {
    Helpers,
    Styles,
} from "../commons";
import { Constants } from "../constants";

import ControlText from "./ControlText";
import ControlImage from "./ControlImage";
// import { ControlSvg } from ".";

/**
 * ControlHeader.tsx
 * 
 * Common component using to display list item list
 */
export default class ControlHeader extends PureComponent {

    props: any;

    constructor(props: any) {
        super(props);
        // if (Helpers.isNullOrEmpty(props.navigation)) {
        //     console.error("ControlHeader#constructor: Attribute 'navigation' is required");
        // }
    }

    /**
     * Handle for back button press
     */
    onBackPress = () => {
        if (__DEV__) {
            console.log("ControlHeader#onBackPress");
        }
        const { navigation } = this.props;
        const { onBackPress } = this.props;
        if (Helpers.isFunction(onBackPress)) {
            onBackPress();
        } else if (navigation && Helpers.isFunction(navigation.goBack)) {
            navigation.goBack();
        }
    }

    /**
     * Handle for left button press
     */
    onLeftButtonPress = () => {
        if (__DEV__) {
            console.log("ControlHeader#onLeftButtonPress");
        }
        const { onLeftButtonPress } = this.props;
        if (Helpers.isFunction(onLeftButtonPress)) {
            onLeftButtonPress();
        }
    }

    /**
     * Handle for right button press
     */
    // onRightButtonPress = () => {
    //     if (__DEV__) {
    //         console.log("ControlHeader#onRightButtonPress");
    //     }
    //     const { onRightButtonPress } = this.props;
    //     if (Helpers.isFunction(onRightButtonPress)) {
    //         onRightButtonPress();
    //     }
    // }

    // _renderIcon() {
    //     const rightIcon = this.props.rightIcon || Resources.Images.HISTORY;
    //     const rightIconStyle = this.props.rightIconStyle;
    //     const resizeMode = this.props.resizeMode;
    //     if (this.props.isSvg) {
    //         return (
    //             <ControlSvg source={rightIcon}
    //                 style={[localStyles.buttonSize, rightIconStyle]}>
    //             </ControlSvg>
    //         );
    //     }
    //     return (
    //         <ControlImage
    //             source={rightIcon}
    //             style={[localStyles.buttonSize, rightIconStyle]}
    //             resizeMode={resizeMode}
    //         />
    //     );
    // }

    // _renderRight() {
    //     if (this.props.isShowRightButton === false) {
    //         return (
    //             <View style={[Styles.justifyCenter, Styles.alignEnd, localStyles.right]}></View>
    //         );
    //     }
    //     return (
    //         <View style={[Styles.justifyCenter, Styles.alignEnd, localStyles.right]}>
    //             <TouchableOpacity
    //                 activeOpacity={Constants.Styles.TOUCH_OPACITY}
    //                 onPress={this.onRightButtonPress}
    //                 style={[Styles.space, Styles.justifyCenter, localStyles.buttonIcon]}>
    //                 {this._renderIcon()}
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    render() {
        const flexTitle: number = this.props.flexTitle;
        const showElevation: boolean = this.props.showElevation || false;
        const title: string = this.props.title;

        // set elevation for header
        const wrapperStyle: any = { elevation: (showElevation === false) ? 0 : 1 };

        // set width for title
        const centerStyle = { flex: Helpers.isNumber(flexTitle) ? flexTitle : 4 };

        return (
            <View style={localStyles.headerWrapper}>
                {/* <StatusBar
                    animated={true}
                    backgroundColor={Constants.Styles.STATUS_BAR_TRANSPARENT_COLOR}
                    barStyle={"dark-content"}
                    translucent={true}
                /> */}
                <View style={[Styles.horizontal, localStyles.itemWrapper, wrapperStyle]}>
                    <View style={localStyles.left}>
                        <TouchableOpacity
                            activeOpacity={Constants.Styles.TOUCH_OPACITY}
                            onPress={this.onBackPress}
                            style={[Styles.space, Styles.justifyCenter, localStyles.buttonIcon]}>
                            <ControlImage
                                source={require("../assets/images/Back.png")}
                                style={localStyles.buttonSize}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[Styles.center, centerStyle]}>
                        <ControlText fontStyle={ControlText.FontStyle.BOLD}
                            numberOfLines={1}
                            fontSize={Constants.Styles.FONT_SIZE_MEDIUM}>
                            {Helpers.ensureString(title)}
                        </ControlText>
                    </View>
                    {/* {this._renderRight()} */}
                </View>
            </View>
        );
    }
}

/**
 * Local stylesheet for this component.
 */
const localStyles = StyleSheet.create({
    headerWrapper: {
        // paddingTop: Constants.Styles.STATUS_BAR_HEIGHT,
        backgroundColor: "#ADD8E6",
        width: "100%",
    },
    itemWrapper: {
        height: Constants.Styles.HEADER_HEIGHT,
        overflow: "hidden",
        paddingHorizontal: Constants.Styles.HORIZONTAL_SPACE_SIZE,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1
    },
    buttonIcon: {
        maxWidth: Constants.Styles.HEADER_HEIGHT,
    },
    buttonSize: {
        width: Constants.Styles.FONT_SIZE_XLARGE,
        height: Constants.Styles.FONT_SIZE_XLARGE
    }
});
