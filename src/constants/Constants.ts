import {
    AppStateEvent,
    BackPressEventName,
    Dimensions,
    Platform,
    StatusBar,
} from "react-native";

// import Strings from "./Strings";
// import DeviceInfo from "react-native-device-info";

// import Strings from "./Strings";

const { height, width } = Dimensions.get("window");
const IS_PLATFORM_IOS = Platform.OS === "ios";

const Constants = {

    /**
     * Config for api.
     */
    Api: {
        /** Root URL of Api Server */
        BASE_URL: "", // Server Real
        CLIENT_CERT: null,
        CLIENT_ID: null,
        CLIENT_KEY: null,
        /** Timeout for each request: 15sec */
        TIMEOUT: 15 * 1000,
    },

    /**
     * Return code from Api
     */
    ApiCode: {
        // Code from server api
        SUCCESS: 0,

        // Code from local app
        CONNECTION_TIMEOUT: "CONNECTION_TIMEOUT",
        INTERNAL_APP: "INTERNAL_APP",
        INTERNAL_SERVER: "INTERNAL_SERVER",
        UNKNOWN_NETWORK: "UNKNOWN_NETWORK",
        ACCESS_DENIED: "DIGX_PROD_ACCESS_DENIED_0000",
    },

    /**
     * Setting path for Api
     */
    ApiPath: {
        SECURITY_CHECK: "/j_security_check",
        NONCE: "v1/session/nonce",
        ME: "v1/me",
        USER_INFO: "v1/scb/userinfo",
        CONFIG: "v1/scb/config/parameters",
        ACOUNTS_DEMAND_DEPOSIT: "v1/accounts/demandDeposit",
        ACCOUNTS_DEPOSIT: "v1/accounts/deposit",
        ACCOUNTS_DEPOSIT_DETAIL: "v1/accounts/deposit/{0}",
        ACCOUNTS_DEPOSIT_SEND_EMAIL: "v1/scb/td/sendemail",
        ACCOUNTS_LOAN: "v1/accounts/loan",
        ACCOUNTS_CREDIT_CARD: "v1/scb/creditcard/inquiry",
        SAVING_PRODUCT_LIST: "v1/scb/td/products",
        SAVING_MATURITY_AMOUNT: "v1/accounts/deposit/maturityAmount",
        SAVING_PENALITIES: "v1/scb/accounts/deposit/{0}/penalities",
        SAVING_REMPTIONS: "v1/accounts/deposit/{0}/redemptions",
        SAVING_INTEREST_RATE: "v1/scb/td/interestRateSlab/VND?typetd={0}",
        SAVING_TOPUP: "v1/accounts/deposit/{0}/topUps?simulation={1}",
        AUTHTYPES: "v1/scb/users/2FA",
        INTERNAL_PAYEES_INFO: "v1/cz/accounts/demandDeposit",
        EXTERNAL_PAYEES_INFO: "v1/scb/payment/ibt/query",
        DOMESTIC_CLEARING_CODE: "v1/cz/domesticclearingcodes",
        PAYMENTS_DOMESTIC_SCB: "v1/scb/payments/domesticPayment",
        PAYMENTS_DOMESTIC: "v1/cz/payments/domesticPayment",
        PAYMENTS_IBT: "v1/scb/payment/ibt",
        PAYMENTS_IBT_DETAIL: "v1/scb/payment/inquiry/{0}?getAuthType=Y&getFee=Y&status=init",
        PAYMENTS_GENERIC: "v1/scb/payments/generic",
        PAYMENTS_RECURRING: "v1/scb/payments/instructions/transfers/internal",
        PAYMENTS_RECURRING_SCB: "v1/payments/instructions/transfers/internal",
        PAYMENTS_SELF: "v1/payments/transfers/self",
        PAYMENTS_IDC: "v1/scb/payment/idc",
        PAYMENTS_SEC: "v1/scb/payment/sec",
        PAYMENTS_PAYEE_GROUP: "v1/payments/payeeGroup",
        PAYMENTS_PAYEE_GROUP_SCB: "v1/scb/payments/payeeGroup",
        PAYMENTS_FAVORITES: "v1/payments/favorites",
        PAYMENTS_FAVORITES_TRANSFER: "v1/scb/payments/favorites/transfer",
        PAYMENTS_FAVORITES_SCB: "v1/scb/payments/favorites",
        PAYMENTS_INQUIRY: "v1/scb/payment/inquiry",
        PAYEES_EXT: "v1/scb/payeesExt",
        INTERNAL_LIST_BANK: "v1/scb/payment/idc/listbank",
        LIST_BANK: "v1/scb/payment/ibt/listbank",
        LIST_PARTNER: "v1/scb/payment/sec/partners",
        PARTNER_INFO: "v1/scb/payment/sec/accountname",        // Register Card
        DEBIT_CARD_STYLE: "v1/scb/inquiry/cardregister/cardstyle/MD",
        CREDIT_CARD_STYLE: "v1/scb/inquiry/cardregister/cardstyle/anyType",
        IDENTIY_PLACE: "v1/scb/payment/idc/listidentitycard",
        COUNTER_LIST: "v1/scb/loan/listcounter",
        CARD_REGISTER: "v1/scb/inquiry/cardregister",
        CARD_REGISTER_VERIFICATION: "v1/scb/inquiry/cardregister/verification",
        CARD_CREDIT_REGISTER_CONFIRM: "v1/scb/inquiry/cardregister/credit",
        CARD_DEBIT_REGISTER_CONFIRM: "v1/scb/inquiry/cardregister",
        CREDIT_CARD_INQUIRY: "v1/scb/creditcard/inquiry",
        DEBIT_CARD_INQUIRY: "v1/scb/debitcard/inquiry",
        CREDIT_CARD_INQUIRY_DETAIL: "v1/scb/creditcard/inquiry/detail",
        CARD_STATUS: "v1/scb/inquiry/cardstatus",
        ON_OFF_CARD_FEATURE: "v1/scb/onoffcardfeature",
        CARD_RESET_PIN: "v1/scb/inquiry/cardresetpin",
        CARD_QUERYCARD_ACTIVITY: "v1/scb/querycard/activity",
        CARD_QUERYCARD_STATETEMENT: "v1/scb/querycard/statetement",
        CARD_QUERYCARD_STATETEMENT_MONTHLIST: "v1/scb/querycard/statetement/monthlist",
        CARD_IPP: "v1/scb/ipp",
        CARD_SET_CARD_PAY: "v1/scb/setCardPay",
        CARD_STYLE: "v1/scb/inquiry/cardregister/cardstyle",
        CREDIT_CARD_PAYMENT: "v1/scb/creditcard/payment",
        COLLATION: "v1/scb/collation",
        BUY_CARD_PROVIDER: "v1/scb/payment/prepaidCard",
        BUY_CARD_CREATE: "v1/scb/payment/prepaidCard/create",
        BUY_CARD_CONFIRM: "v1/scb/payment/prepaidCard",
        BUY_CARD_SERIAL: "v1/scb/payment/inquiry",
        GET_PHONENUMBER: "v1/scb/userinfo/party",
        MOBILE_RECHARGE: "v1/scb/payment/topup",
        PAYMENT_SERVICE: "v1/scb/payment/bill/prepare",
        PAYMENT_BILL: "v1/scb/payment/bill",
        PAYMENT_BILL_QUERY: "v1/scb/payment/bill/query",
        PAYMENT_ACOUNTS_DETAIL: "v1/scb/accounts/demandDeposit",
        PAYMENT_MANULIFE: "v1/scb/payment/insuranceManulife",
        PAYMENT_MANULIFE_SEARCH_CONTRACT: "v1/scb/payment/insuranceManulife/polnum",
        PAYMENT_MANULIFE_SEARCH_CONTRACT_FEE: "v1/scb/payment/insuranceManulife/typefee",
        PAYMENT_MANULIFE_SEARCH_CONTRACT_FEE_DETAIL: "v1/scb/payment/insuranceManulife/detail",
        RESEND: "v1/2fa/{referenceNo}/resend",
        INSURANCE_PRODUCTS: "v1/scb/payment/insuranceBaoLong/getlistSanPham",
        INSURANCE_LIST_PRODUCT: "v1/scb/payment/insuranceBaoLong/getlistProduct/{idsanpham}/{loaiphi}",
        INSURANCE_LIST_DISCOUNT: "v1/scb/payment/insuranceBaoLong/getlistDiscount/{idsanpham}",
        INSURANCE_LIST_TEN_SPNTT: "v1/scb/payment/insuranceBaoLong/getListTenSPNTT",
        USER_INFO_PARTY: "v1/scb/userinfo/party",
        INSURANCE_LIST_PROVIDER: "v1/scb/payment/insuranceBaoLong/getlistProvider",
        INSURANCE_BAO_LONG: "v1/scb/payment/insuranceBaoLong",
        AUTO_BILL_SERVICE: "v1/scb/biller/autobill/register/prepare",
        AUTO_BILL_REGISTER: "v1/scb/biller/autobill/register",
        AUTO_BILL_LIST: "v1/scb/biller/autobill/list",
        AUTO_BILL_LIST_CANCEL: "v1/scb/biller/autobill/list/cancel",
        PAYMENTS_FAVORITES_OTHERS: "v1/scb/payments/favorites/others",
        ACOUNTS_LIST: "v1/scb/accounts",
        LOAN_REGIST: "v1/scb/loan/register",
        ACCOUNT_REGIST: "v1/scb/accounts/demandDeposit/register",
        PARSE_QR: "v1/scb/payment/scbqrcode/parse",     // QR Pay
        VNPAYQR_CHECK_PROMOTION_CODE: "v1/scb/payment/scbqrcode/vnpay/check",
        VNPAYQR_INIT_PAYMENT: "v1/scb/payment/scbqrcode/vnpay",
        VNPAYQR_CONFIRM_PAYMENT: "v1/scb/payment/scbqrcode/vnpay",
        MY_QR: "v1/scb/userinfo/myqr",
        SAVINGS_HISTORY_BY_EMAIL: "v1/scb/td/sendemail?fromDate={fromDate}&toDate={toDate}",

        JWT_SESSION: "v1/session",
        MOBILE_CLIENT: "v1/mobileClient",
        JWT_ENABLE: "v1/scb/mobileClient/enable",
        JWT_DISABLE: "v1/scb/mobileClient/disable",
        MASTERPASS_QR_INIT_PAYMENT: "v1/scb/payment/scbqrcode",
        VISA_QR_INIT_PAYMENT: "v1/scb/payment/scbqrcode/mvisa",
        CREDENTIALS: "v1/me/credentials",
        SOFT_TOKEN_SEED: "v1/softtokenseed",
    },

    /**
     * Styles for app.
     *
     * Color refer
     * @see https://www.rapidtables.com/web/color/index.html
     * @see https://www.w3schools.com/w3css/w3css_colors.asp
     */
    Styles: {
        // =====================================================================
        // Common color
        // =====================================================================
        BLACK_COLOR: "#000000",
        BLUE_COLOR: "#1E7BE6",
        GRAY_COLOR: "#808080",
        GREEN_COLOR: "#008000",
        LIGHTGRAY_COLOR: "#D3D3D3",
        RED_COLOR: "#FF0000",
        WHITE_COLOR: "#FFFFFF",

        // =====================================================================
        // Status color
        // =====================================================================
        DANGER_COLOR: "#F44336",
        INFO_COLOR: "#2196F3",
        SUCCESS_COLOR: "#4CAF50",
        WARNING_COLOR: "#FFEB3B",

        // =====================================================================
        // Text/Button/Background color
        // =====================================================================
        ACCENT_COLOR: "#341D5B",
        BACKGROUND_COLOR: "#FFFFFF",
        BOX_ELEVATION: 5,
        BOX_LINE_COLOR: "#CCCCCC",
        BOX_MODAL_RADIUS: 10,
        DEFAULT_COLOR: "#EEF6FF",
        MODAL_OVERLAY_TRANSPARENT_COLOR: "rgba(0, 0, 0, 0.4)",
        TRANSPARENT_COLOR: "rgba(0, 0, 0, 0)",
        PRIMARY_COLOR: "#082149",
        PALE_GRAY_COLOR: "#eef6ff",
        PRIMARY_DARK_COLOR: "#482880",
        YELLOW_COLOR: "#D8A962",
        PROGRESS_BAR_UNFILLED_COLOR: "rgba(247, 247, 247, 1)",
        LOADING_MODAL_COLOR: "rgba(0, 0, 0, 0.4)",
        STATUS_BAR_MODAL_COLOR: "rgba(0, 0, 0, 0.3)",
        STATUS_BAR_TRANSPARENT_COLOR: "rgba(0, 0, 0, 0.2)",
        TEXT_PRIMARY_COLOR: "#707987",
        TEXT_SUB_TITLE_COLOR: "#707987",
        TEXT_DEFAULT_COLOR: "#082149",
        TEXT_GRAY_COLOR: "#999999",
        TEXT_SUB_COLOR: "#CCCCCC",
        TEXT_INPUT_COLOR: "#F2F2F2",
        ERROR_COLOR: "#e02020",
        LIGHT_BLUE: "#EEF6FF",
        // =====================================================================
        // Text Item Title/Value Colr
        // =====================================================================
        ITEM_TITLE_COLOR: "#707987",
        ITEM_VALUE_COLOR: "#082149",
        ACCOUNT_TEXT_COLOR: "#082149",
        SEPERATOR_COLOR: "#F2F2F2",
        TEXT_OPTION_COLOR: "#333333",
        BORDER_COLOR: "#F2F2F2",
        // =====================================================================
        // Button style
        // =====================================================================
        BUTTON_ELEVATION: 2,
        TOUCH_OPACITY: 0.5,

        // =====================================================================
        // Font style
        // =====================================================================
        FONT_BOLD: IS_PLATFORM_IOS ? 'MyriadPro-Bold' : 'Myriad Pro Bold',

        FONT_BOLD_ITALIC: "MyriadPro-BoldItalic",

        FONT_ITALIC: "MyriadPro-Italic",

        FONT_REGULAR: IS_PLATFORM_IOS ? "MyriadPro-Regular" : "Myriad Pro Regular",

        FONT_SIZE_SMALL: 12,
        FONT_SIZE_DEFAULT: 14,
        FONT_SIZE_MEDIUM: 16,
        FONT_SIZE_LARGE: 22,
        FONT_SIZE_XLARGE: 26,
        FONT_SIZE_XXLARGE: 30,

        // =====================================================================
        // List or contain space size
        // =====================================================================
        HORIZONTAL_SPACE_SIZE: 16,
        HORIZONTAL_SPACE_SIZE_LARGE: 32,
        HORIZONTAL_SPACE_SIZE_SMALL: 8,
        VERTICAL_SPACE_SIZE: 20,
        VERTICAL_SPACE_SIZE_SMALL: 13,
        CONTENT_SPACE: 16,
        // =====================================================================
        // Height or padding
        // =====================================================================
        HEADER_HEIGHT: IS_PLATFORM_IOS ? 60 : (46 + (StatusBar.currentHeight || 0)),
        STATUS_BAR_HEIGHT: IS_PLATFORM_IOS ? 20 : (StatusBar.currentHeight || 0),

        // =====================================================================
        // Console log style
        // Color refer at: https://www.w3schools.com/w3css/w3css_colors.asp
        // =====================================================================
        CONSOLE_LOG_DONE_ERROR: "border: 2px solid #F44336; color: #000000", // Red
        CONSOLE_LOG_DONE_SUCCESS: "border: 2px solid #4CAF50; color: #000000", // Green
        CONSOLE_LOG_ERROR: "background: #F44336; color: #FFFFFF", // Red
        CONSOLE_LOG_NOTICE: "background: #FF9800; color: #000000; font-size: x-large", // Orange
        CONSOLE_LOG_PREPARE: "border: 2px solid #2196F3; color: #000000", // Blue
        CONSOLE_LOG_START: "background: #2196F3; color: #FFFFFF", // Blue
        CONSOLE_LOG_SUCCESS: "background: #4CAF50; color: #FFFFFF", // Green
    },

    /**
     * Icon name using for ControlIcon
     * Icon using in this app MaterialCommunityIcons
     * https://oblador.github.io/react-native-vector-icons/
     */
    IconName: {
        ARROW_LEFT: "arrow-left",
        EYE: "eye",
        EYE_OFF: "eye-off",
        HELP_BOX: "help-box",
    },

    /**
     * Regex Expression
     */
    RegExp: {
        /** https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
        EMAIL_ADDRESS: new RegExp(`/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@`
            + `((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`),
        /** https://gist.github.com/HarishChaudhari/0dd5514ce430991a1b1b8fa04e8b72a4 */
        PASSWORD: new RegExp(`/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/`),
        PHONE_NUMBER: new RegExp(`^(09|01|08|03|07|05[0-9])+([0-9]{8,9})$`),
    },

    /**
     * Storage keys
     */
    StorageKeys: {
        APP_SETTINGS: "APP_SETTINGS",
        TRANSFER_PARAMS: "TRANSFER_PARAMS",
        USER_PROFILE: "USER_PROFILE",
        USER_INFO: "USER_INFO",
    },

    /**
     * Width of device screen.
     */
    SCREEN_WIDTH: width,

    /**
     * Height of device screen.
     */
    SCREEN_HEIGHT: height,

    /**
     * Ratio for design layout.
     */
    RATIO: height / 896.0,

    /**
     * Debounce time for action
     */
    DEBOUNCE_TIME: 400,

    /**
     * Default setting information
     */
    // DefaultSettings: {
    //     /** Default language */
    //     LANGUAGE: Strings.getLanguage(),
    // },

    /**
     * Event name using for DeviceEventEmitter
     */
    EventName: {
        APP_STATE_CHANGE: "change" as AppStateEvent,
        HARDWARE_BACK_PRESS: "hardwareBackPress" as BackPressEventName,
        CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
        CHANGE_SETTINGS: "CHANGE_SETTINGS",
    },

    DateFormat: {
        DMY: "D/M/Y",
        DDMMYY: "DD/MM/YYYY",
        YMD: "YMMDD",
        API_YMD: "YYYYMMDD",
        API_YMD_REGISTER: "YYYY-MM-DD",
        API_YYYY_MM_DD: "YYYY-MM-DD",
        DDMMYYYY_HHMM: "DD/MM/YYYY HH:mm",
    },

    // DeviceInfo: {
    //     /**
    //      * Gets the application name.
    //      */
    //     APP_NAME: DeviceInfo.getApplicationName(),

    //     /**
    //      * Gets the application version.
    //      */
    //     APP_VERSION: DeviceInfo.getVersion(),

    //     /**
    //      * Gets the device brand.
    //      * iOS: "Apple"
    //      * Android: "Xiaomi"
    //      * Windows: ?
    //      */
    //     DEVICE_BRAND: DeviceInfo.getBrand(),

    //     /**
    //      * Gets the application bundle identifier.
    //      * "com.learnium.mobile"
    //      */
    //     BUNDLE_ID: DeviceInfo.getBundleId(),

    //     /**
    //      * Gets the device unique ID.
    //      * iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
    //      * Android: "dd96dec43fb81c97"
    //      * Windows: ?
    //      */
    //     DEVICE_ID: DeviceInfo.getUniqueId(),

    //     /**
    //      * Gets the device name.
    //      * iOS: "Becca's iPhone 6"
    //      * Android: ?
    //      * Windows: ?
    //      */
    //     DEVICE_NAME: DeviceInfo.getDeviceName(),

    //     /**
    //      * Get operation name.
    //      * iOS: ios
    //      * Android: android
    //      */
    //     OS_NAME: Platform.OS,

    //     /**
    //      * Gets the device OS version.
    //      * iOS: "11.0"
    //      * Android: "7.1.1"
    //      * Windows: ?
    //      */
    //     OS_VERSION: DeviceInfo.getSystemVersion(),
    // },
};

export default Constants;
