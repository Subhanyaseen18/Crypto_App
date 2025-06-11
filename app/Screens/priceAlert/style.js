import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

const createStyles = (theme) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: wp(2),
      margin: 10,
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      marginTop: hp(1),
      fontSize: theme.size.large,
    },
    price: {
      marginVertical: hp(1),
    },
    input: {
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
