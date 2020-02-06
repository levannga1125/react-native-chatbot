// react
// react-native
import React, { PureComponent } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

// ../commons
// ../constants
import {
    Helpers,
    Styles,
} from "../commons";

import ControlText from "./ControlText";

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
        const { onLeftButtonPress } = this.props;
        if (Helpers.isFunction(onLeftButtonPress)) {
            onLeftButtonPress();
        }
    }

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
                <View style={[Styles.horizontal, localStyles.itemWrapper, wrapperStyle]}>
                    <View style={localStyles.left}>
                        <TouchableOpacity
                            activeOpacity={0.5}
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
                            fontSize={16}>
                            {Helpers.ensureString(title)}
                        </ControlText>
                    </View>
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
        height: 40,
        overflow: "hidden",
        paddingHorizontal: 16,
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1
    },
    buttonIcon: {
        maxWidth: 40,
    },
    buttonSize: {
        width: 26,
        height: 26
    }
});
