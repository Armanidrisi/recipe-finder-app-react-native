import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";
import { FocusedStatusBar } from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={{ uri: data.strMealThumb }}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        left: 15,
        top: StatusBar.currentHeight + 10,
      }}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={require("../assets/back.png")}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = (data) => {
    const newIngredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = data["strIngredient" + i]; // Get the ingredient at the current index
      const measure = data["strMeasure" + i]; // Get the corresponding measure for the ingredient
      if (ingredient) {
        const ingredientWithMeasure = ingredient + " - " + measure; // Combine the ingredient and measure
        newIngredients.push(ingredientWithMeasure); // Add the ingredient with measure to the list
      }
    }

    setIngredients(newIngredients);
  };

  useState(() => {
    getIngredients(data);
  }, [data]);

  const renderIngredientItem = ({ item }) => (
    <Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
        marginBottom: SIZES.base,
      }}
    >
      {item}
    </Text>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <DetailsHeader data={data} navigation={navigation} />
      <ScrollView
        style={{ width: "100%", height: "100%", padding: SIZES.font }}
      >
        <View style={{ paddingBottom: SIZES.large }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
            }}
          >
            {data.strMeal}
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              marginBottom: SIZES.base,
              fontSize: SIZES.medium,
              fontFamily: FONTS.regular,
            }}
          >
            {data.strInstructions}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
              marginBottom:SIZES.base
            }}
          >
            Ingredients
          </Text>
          <FlatList
            data={ingredients}
            renderItem={renderIngredientItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
