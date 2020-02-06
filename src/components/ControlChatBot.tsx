import React, { PureComponent } from "react";
import {
    StyleSheet,
    View,
    ViewProps,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { Styles, Helpers } from "../commons";
import ControlHeader from "./ControlHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ControlCircle from "./ControlCircle";
import { ControlText } from ".";
import { Constants } from "../constants";

export interface IProps extends ViewProps {
    title?: string;
    navigation?: any;
    botAvatar?: any;
    myAvatar?: any;
}

interface IStateProps extends ViewProps {
    messageList?: IMessage[];
    navigation?: any;
    currentContent?: string;
}

interface IMessage {
    id?: string;
    content?: string;
}

export default class ControlChatBot extends PureComponent<IProps, IStateProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            messageList: [
                {
                    id: "1",
                    content:`Chào anh Nghiệp\nChúng tôi có thể giúp được gì cho anh.`
                },
                {
                    id: "2",
                    content:`Soft OTP`
                },
                {
                    id: "1",
                    content:`Chào anh Nghiệp\nChúng tôi có thể giúp được gì cho anh.`
                },
                {
                    id: "2",
                    content:`Soft OTP`
                },
                {
                    id: "1",
                    content:`Chào anh Nghiệp\nChúng tôi có thể giúp được gì cho anh.`
                },
                {
                    id: "2",
                    content:`Soft OTP`
                },
                {
                    id: "1",
                    content:`Chào anh Nghiệp\nChúng tôi có thể giúp được gì cho anh.`
                },
                {
                    id: "2",
                    content:`Soft OTP`
                },
                {
                    id: "1",
                    content:`Chào anh Nghiệp\nChúng tôi có thể giúp được gì cho anh.`
                },
                {
                    id: "2",
                    content:`Soft OTP`
                },
                {
                    id: "1",
                    content:`Chào anh Nghiệp\nChúng tôi có thể giúp được gì cho anh.`
                },
                {
                    id: "2",
                    content:`Soft OTP`
                },
            ],
            currentContent: ""
        }
    }

    onSend = () => {
        if (Helpers.isNullOrEmpty(this.state.currentContent)) {
            return;
        }
        const messageList = this.state.messageList || [];
        messageList.push({
            id: "2",
            content: this.state.currentContent
        });
        this.setState({ messageList: [...messageList], currentContent: "" });
    }

    public render() {
        const list = this.state.messageList || [];
        return (
            <View style={Styles.fullSize}>
                <ControlHeader
                    title={this.props.title}
                    navigation={this.props.navigation}
                    isShowRightButton={false} />
                <View style={[Styles.fullSize, { backgroundColor: "white", paddingHorizontal: 16 }]}>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        scrollEnabled enableOnAndroid={true}
                        style={[Styles.mb16]}>
                        {list.map((item, index) => {
                            if (item.id === "1") {
                                return (
                                    <View style={[Styles.horizontal, index > 0 ? Styles.mt25 : {}, Styles.alignEnd]}>
                                        <ControlCircle source={this.props.botAvatar} size={24} />
                                        <View style={[Styles.form, Styles.ml16, { backgroundColor: "#F2F2F2", maxWidth: Constants.SCREEN_WIDTH - 16 - 24 - 16 - 16 }]}>
                                            <ControlText>{item.content}</ControlText>
                                        </View>
                                    </View>
                                )
                            }
                            return (
                                <View style={[Styles.w100pc, Styles.alignEnd, index > 0 ? Styles.mt25 : {}]}>
                                    <View style={[Styles.horizontal, Styles.alignEnd]}>
                                        <View style={[Styles.form, Styles.mr16, { backgroundColor: "#ADD8E6", maxWidth: Constants.SCREEN_WIDTH - 16 - 24 - 16 - 16 }]}>
                                            <ControlText>
                                                {item.content}
                                            </ControlText>
                                        </View>
                                        <ControlCircle source={this.props.myAvatar} size={24} />
                                    </View>
                                </View>
                            )
                        })}
                    </KeyboardAwareScrollView>
                    <View>
                        <ControlText style={[Styles.textCenter, Styles.mb16]}>{"Power by maysoft.io"}</ControlText>
                        <View style={[Styles.horizontal, Styles.justifyEnd, { backgroundColor: "#F2F2F2", borderRadius: 76 / 2, marginBottom: 76, justifyContent: "space-between", padding: 16 }, Styles.alignCenter]}>
                            <TextInput
                                style={[{ flex: 0.85 }, Styles.textBoldDefault, Styles.mr16]}
                                value={this.state.currentContent || ""}
                                onChangeText={(currentContent: string) => {
                                    this.setState({ currentContent });
                                }}
                            />
                            <TouchableOpacity style={[Styles.w10pc, Styles.mr16, { flex: 0.15 }]} onPress={this.onSend}>
                                <ControlText style={Styles.textRight} fontSize={ControlText.FontSize.X_LARGE}>{"Gửi"}</ControlText>
                            </TouchableOpacity>
                        </View>
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
});
