import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

const createStyles = (theme) => {
  const styles = StyleSheet.create({
    container: {
      // width: wp(90),
      //   backgroundColor: "#eee",
      paddingHorizontal: wp(2),
      margin: 10,
      //   borderRadius: 10,
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      marginTop: hp(1),
      // marginVertical: hp(1),
      fontSize: theme.size.large,
    },
    price: {
      marginVertical: hp(1),
    },
    input: {
      // borderBottomWidth: 1,
      // marginVertical: 8,
      //   padding: 4,
      // marginTop: hp(3),
      // marginBottom: hp(2),
      width: wp(96),
    },
    img: {
      marginTop: hp(3),
      width: wp(40),
      height: wp(40),
      resizeMode: "contain",
    },
    buttonContainer: {
      marginTop: hp(2),
    },
  });
  return styles;
};
export default createStyles;
