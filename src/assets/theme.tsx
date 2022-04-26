import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    fontColorBlack:"#262626",
    white: "#FFFFFF",
    blue:"#263DB4",
    blueBottom:"#00004B",
    lightblue:"#8991c3",
    lblue:"#5bb1d9",
    transparentBlack: 'rgba(0, 0, 0, 0.2)',
    transparentBlacky: 'rgba(0, 0, 0, 0.5)',
    rojoEncabezado: "#bb0000",
    negroEncabezado:"#080C41",
    negroTexto:"#262626",
    lightgreen: "#9DDEBA",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#e6e6f5",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    transparentgray: 'rgba(192, 192, 192,0.7)',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 23,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
// "Helvetica condensed"
export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle, lineHeight: 55 },
    title:    {  fontSize: SIZES.h1, lineHeight: 28, fontFamily:"Helvetica"},
    h2:    {  fontSize: SIZES.h2, lineHeight: 30 , fontFamily:"Helvetica"},
    h3:    {  fontSize: SIZES.h3, lineHeight: 22, fontFamily:"Helvetica"},
    h4:    {  fontSize: SIZES.h4, lineHeight: 22, fontFamily:"Helvetica"},
    body1: {  fontSize: SIZES.body1, lineHeight: 36, fontFamily:"Helvetica"},
    body2: {  fontSize: SIZES.body2, lineHeight: 30, fontFamily:"Helvetica"},
    body3: {  fontSize: SIZES.body3, lineHeight: 22, fontFamily:"Helvetica"},
    body4: {  fontSize: SIZES.body4, lineHeight: 22, fontFamily:"Helvetica"},
    body5: {  fontSize: SIZES.body5, lineHeight: 22, fontFamily:"Helvetica"},
};

export const globalStyles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 10
    },
    title: {
        justifyContent:"center",
        textAlign:"left", 
        color:COLORS.fontColorBlack,
        fontWeight:"500",
        fontSize:15,
        fontFamily:"Helvetica",
        lineHeight:22
        
    },
    titleOpinion:{
        justifyContent:"center",
        textAlign:"left", 
        color:COLORS.fontColorBlack,
        fontWeight:"700",
        fontSize:22,
        fontFamily:"Helvetica",
        lineHeight:30,
        marginTop:10,
        marginBottom:5
    },
    titleDetail:{
        justifyContent:"center",
        color:COLORS.fontColorBlack,
        fontWeight:"700",
        fontSize:25,
        marginTop:10,
    },

    tema:{
        justifyContent:"center",
        textAlign:"left",
        color:COLORS.rojoEncabezado,
        fontWeight:"500",
        fontSize:15,
        fontFamily:"Helvetica"
    },
    gradiente:{
        width:"100%",
        height:200,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    expect:{
        color:COLORS.fontColorBlack,
        fontSize:17,
        fontWeight:"700",
        lineHeight:25,
        fontFamily:"Helvetica"
    },
    shareButton: {
        position: 'absolute',
        zIndex: 9999,
        //  elevation: 9,
        bottom: 45,
        right: 35,
        backgroundColor:COLORS.transparentgray,
        width:50,
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        
    },
    shadowShare:{
        // shadowColor: "#000",
        // shadowOffset:{
        // width: 0,
        // height: 5,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,
        // elevation: 10,
    }
    // botonGrande: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'red',
    //     borderRadius: 20,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginRight: 10
    // },
    // botonGrandeTexto: {
    //     color: 'white',
    //     fontSize: 18,
    //     fontWeight: 'bold'
    // },
    // avatarContainer: {
    //     alignItems: 'center',
    //     marginTop: 20
    // },
    // avatar: {
    //     width: 150,
    //     height: 150,
    //     borderRadius: 100
    // },
    // menuContainer: {
    //     marginVertical: 30,
    //     marginHorizontal: 50,
    // },
    // menuBoton: {
    //     marginVertical: 10
    // },
    // menuTexto: {
    //     fontSize: 20
    // }
});

const appTheme = { COLORS, SIZES, FONTS,globalStyles };

export default appTheme;