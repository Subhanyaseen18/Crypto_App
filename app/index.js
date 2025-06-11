import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Container from "./components/Container";
import createStyles from "./Screens/index/styles";
import { PermissionNoti } from "./Screens/notification";
import { useThemeAwareObject } from "./theme";
export default function Index() {
  const styles = useThemeAwareObject(createStyles);

  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    PermissionNoti();
  }, []);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      const url = "https://api.coingecko.com/api/v3/coins/markets?";
      const response = await axios.get(url, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
        },
      });
      setCryptos(response.data);
    };
    fetchTopCryptos();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Link href={{ pathname: "./Screens/priceAlert", params: item }}>
        <View style={styles.containerFlat}>
          <View>
            <Text style={styles.name}>{item?.name}</Text>
            <Text>Price: ${item?.current_price}</Text>
            <Text>Symbol: {item?.symbol.toUpperCase()}</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source={{ uri: item?.image }} style={styles.img} />
          </View>
        </View>
      </Link>
    );
  };

  return (
    <Container>
      <FlatList
        ListFooterComponent={() => {}}
        ListFooterComponentStyle={styles.listFooterComponent}
        contentContainerStyle={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        data={cryptos}
        renderItem={renderItem}
      />
    </Container>
  );
}
