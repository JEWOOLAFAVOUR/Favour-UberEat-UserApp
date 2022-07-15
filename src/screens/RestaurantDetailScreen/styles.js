import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page:{
        flex: 1,
    },
    image:{
        width: '100%',
        aspectRatio: 4 / 3,
    },
    container:{
        margin: 10,
    },
    iconContainer:{
        position: 'absolute',
        top: 50,
        left: 10,
    },
    title:{
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    },
    subTitle:{
        color: '#525252',
        fontSize: 15,
    },
    menuTitle:{
        marginVertical: 10,
        fontSize: 18,
        letterSpacing: 0.5,
    },
});