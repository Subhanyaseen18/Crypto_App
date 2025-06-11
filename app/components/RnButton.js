import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { useThemeAwareObject } from "../theme";
import { hp, wp } from "../utils";
import Text from "./RnText";

const RnButton = ({
  loading,
  disabled,
  style,
  onPress,
  hitSlop,
  title,
  loaderColor,
  lodaderSize,
  children,
  icon,
  noRightIcon,
  rightIconColor,
}) => {
  const createStyles = (theme) => {
    const themeStyles = StyleSheet.create({
      whiteColor: {
        color: theme.color.primaryLoader,
      },
      buttonContainer: {
        height: hp(6.5),
        width: wp(88),
        backgroundColor: theme.color.secondaryText,

        borderRadius: theme.borders.radius1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        shadowColor: theme.color.primaryButton,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      iconContainer: {
        alignItems: "flex-start",
        paddingHorizontal: wp(4),
      },
      disabledButton: {
        backgroundColor: theme.color.disabledButton,
      },
      buttonText: {
        fontFamily: theme.family.medium,
        fontSize: theme.size.medium,
        color: "white",
      },
      iconText: {
        flex: 1,
      },
      icon: {
        fontSize: wp(5),
        color: theme.color.secondaryIcon,
        marginRight: wp(6),
      },
      rowView: {
        flexDirection: "row",
        alignItems: "center",
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <>
      {!loading ? (
        !disabled ? (
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              style[0],
              icon && styles.iconContainer,
            ]}
            onPress={onPress}
            hitSlop={hitSlop}
          >
            <View style={styles.rowView}>
              {icon ? (
                <>
                  <Icon
                    name={icon}
                    color={styles.icon.color}
                    size={styles.icon.fontSize}
                    style={{ marginRight: styles.icon.marginRight }}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      style[1],
                      icon && styles.iconText,
                    ]}
                    family={styles.buttonText.fontFamily}
                  >
                    {title}
                  </Text>
                  {!noRightIcon && (
                    <Icon
                      solid
                      name="caret-right"
                      size={styles.icon.fontSize}
                      color={rightIconColor ?? styles.icon.color}
                    />
                  )}
                </>
              ) : (
                <Text
                  style={[styles.buttonText, style[1]]}
                  family={styles.buttonText.fontFamily}
                >
                  {title}
                </Text>
              )}
            </View>
            {children && children}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled
            style={[
              styles.buttonContainer,
              style[0],
              styles.disabledButton,
              icon && styles.iconContainer,
            ]}
          >
            <View style={styles.rowView}>
              {icon ? (
                <>
                  <Icon
                    name={icon}
                    color={styles.icon.color}
                    size={styles.icon.fontSize}
                    style={{ marginRight: styles.icon.marginRight }}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      style[1],
                      icon && styles.iconText,
                    ]}
                    family={styles.buttonText.fontFamily}
                  >
                    {title}
                  </Text>
                  {!noRightIcon && (
                    <Icon
                      solid
                      name="caret-right"
                      size={styles.icon.fontSize}
                      color={styles.icon.color}
                    />
                  )}
                </>
              ) : (
                <Text
                  style={[styles.buttonText, style[1]]}
                  family={styles.buttonText.fontFamily}
                >
                  {title}
                </Text>
              )}
            </View>
            {children && children}
          </TouchableOpacity>
        )
      ) : (
        <TouchableOpacity
          disabled
          style={[styles.buttonContainer, style[0]]}
          onPress={onPress}
        >
          <ActivityIndicator
            size={lodaderSize || "large"}
            color={loaderColor || styles.whiteColor.color}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default RnButton;
