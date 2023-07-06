import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

export default function NFTCard({ data }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={{ uri: data.strMealThumb }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <View style={{ width: "100%", padding: SIZES.font }}>
        <View>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.large,
              color: COLORS.primary,
            }}
          >
            {data.strMeal}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.extraLarge,
            minWidth: 120,
            marginTop: SIZES.small,
          }}
          onPress={() => navigation.navigate("Details", { data })}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.font,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            View recipe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
