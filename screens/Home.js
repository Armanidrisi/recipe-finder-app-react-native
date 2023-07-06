import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Card, FocusedStatusBar, HomeHeader } from "../components";

import { COLORS, FONTS, SIZES } from "../constants";

const Home = () => {
  const [mealsData, setMealsData] = useState([]);
  const [message, setMessage] = useState("Search the recipe");

  const fetchData = async (q) => {
    setMealsData([]);
    setMessage("Loading...");
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
      );
      const data = await response.json();
      if (!data.meals) {
        setMealsData([]);
        setMealsData("No results found!");
      } else {
        setMealsData(data.meals);
        setMessage("");
      }
    } catch (e) {
      setMessage("Error while fetch data");
    }
  };

  const handleSearch = (text) => {
    setTimeout(() => {
      setMessage("Loading...");
      fetchData(text);
    }, 1000);
  };

  useEffect(() => {
    fetchData("");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={mealsData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.idMeal}
            showVerticalScrollIndigator={false}
            ListHeaderComponent={
              <HomeHeader onSearch={handleSearch} message={message} />
            }
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 300,
              backgroundColor: "#001f2d",
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
