import { Input } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { useThemeAwareObject } from "../theme";
import { wp } from "../utils";
import RnText from "./RnText";

const RnInput = ({
  ref,
  value,
  maxLength,
  onChangeText,
  onChange,
  onBlur,
  onFocus,
  keyboardType,
  error,
  errorStyle,
  secureTextEntry,
  inputStyle,
  placeholder,
  leftIcon,
  rightIcon,
  editable,
  multiline,
  containerStyle,
  textAlignInput,
}) => {
  const createStyles = (theme) => {
    const themeStyles = StyleSheet.create({
      errorText: {
        color: theme.color.errorText,
        fontSize: theme.size.xSmall,
        fontFamily: theme.family.medium,
      },
      inputStyle: {
        color: theme.color.secondaryText,
      },
      inputContainer: {
        color: theme.color.secondaryText,
        borderWidth: 1,
        borderRadius: theme.borders.radius1,
        paddingHorizontal: wp(2),
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  function errorMessage() {
    return (
      <RnText
        style={[styles.errorText, errorStyle]}
        family={styles.errorText.fontFamily}
      >
        {error}
      </RnText>
    );
  }

  return (
    <Input
      inputContainerStyle={[containerStyle, styles.inputContainer]}
      multiline={multiline}
      editable={editable}
      ref={ref}
      maxLength={maxLength}
      onChangeText={onChangeText}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      ErrorComponent={errorMessage}
      renderErrorMessage={Boolean(error)}
      allowFontScaling={false}
      style={[styles.inputStyle, inputStyle]}
      placeholder={placeholder}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      textAlignVertical={textAlignInput}
    />
  );
};

export default RnInput;
