import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

const HomeHeader = ({ onSearch, message }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
          }}
        >
          Find Best Recipe For Cooking
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.white,
            flexDirection: "row",
            alignItems: "center",

            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.font - 2,
            borderRadius: SIZES.base,
          }}
        >
          <Image
            source={require("../assets/search.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search Destinations"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            style={{flex:1}}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Text style={{ color: COLORS.primary, marginLeft: SIZES.base }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {message && (
        <View style={{ marginTop: 50 }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            {message}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;
