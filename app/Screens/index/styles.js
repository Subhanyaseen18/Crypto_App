import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

const createStyles = (theme) => {
  const styles = StyleSheet.create({
    containerFlat: {
      backgroundColor: "#eee",
      padding: wp(2),
      borderRadius: theme.borders.radius2,
      width: wp(96),
      height: hp(12),
      flexDirection: "row",
      alignItems: "center",
    },

    name: {
      fontWeight: "bold",
      fontSize: theme.size.large,
    },
    flatListStyle: {
      flexGrow: 1,
    },
    listFooterComponent: {
      marginBottom: hp(6),
    },
    imgContainer: {
      alignItems: "flex-end",
      flex: 1,
    },
    img: {
      width: wp(12),
      height: wp(12),
      resizeMode: "contain",
    },
  });
  return styles;
};
export default createStyles;
