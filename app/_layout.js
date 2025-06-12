import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Currencies" }} />
      <Stack.Screen
        name="Screens/priceAlert/index"
        options={{
          title: "Price Alert",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
