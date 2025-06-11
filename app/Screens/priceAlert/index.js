import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import Container from "../../components/Container";
import RnButton from "../../components/RnButton";
import RnInput from "../../components/RnInput";
import RnText from "../../components/RnText";
import { useThemeAwareObject } from "../../theme";
import { sendNotif } from "../notification";
import createStyles from "./style";

export default function PriceAlert() {
  const styles = useThemeAwareObject(createStyles);
  const item = useLocalSearchParams();
  console.log("jsonData", item.id);
  // const item = JSON.stringify(jsonData);
  useEffect(() => {
    if (item?.id) {
      console.log("item?.id", item.id);
    }
  }, []);

  // console.log("itemtesting", item);
  const [threshold, setThreshold] = useState("");

  const handleAlert = async () => {
    const price = parseFloat(threshold);
    console.log("price", price);
    if (item.current_price < price) {
      console.log("price", price);
      await sendNotif(`${item.name} Alert!`, `Price has crossed $${price}`);
      console.log("price across the current price ");
    } else {
      alert(`${item.name} is below your threshold.`);
    }
    await AsyncStorage.setItem(item.id, threshold);
  };

  return (
    <Container>
      <View style={styles.container}>
        <Image source={{ uri: item?.image }} style={styles.img} />
        <RnText style={styles.title}>
          {item?.name} (${item?.symbol?.toUpperCase()})
        </RnText>
        <RnText style={styles.price}>Price: ${item?.current_price}</RnText>
        <RnInput
          placeholder="Set Alert Price"
          keyboardType="numeric"
          inputStyle={styles.input}
          value={threshold}
          onChangeText={setThreshold}
        />

        <RnButton
          disabled={threshold == ""}
          title="Check the value "
          style={[styles.buttonContainer]}
          onPress={handleAlert}
        />
      </View>
    </Container>
  );
}
