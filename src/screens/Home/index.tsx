import { Button, FlatList, Pressable, Text } from "react-native";
import React, { useContext } from "react";
import { examples } from "../../constants/examples";

import { useCustomDimensions } from "../../hooks";
import { homeStyles } from "./styles";
import { ItemProps } from "../../types";
import { View } from "moti";
import { ThemeContext } from "../../providers";

const Item = ({ title, onPress }: ItemProps) => {
  const { appStyles, dimensions } = useCustomDimensions();
  const styles = homeStyles(dimensions);
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text style={appStyles.text}>{title}</Text>
    </Pressable>
  );
};

export const Home = ({ navigation }) => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  return (
    <View>
      <FlatList
        data={examples}
        renderItem={({ item }) => (
          <Item
            onPress={() => {
              navigation.navigate(item.screen);
            }}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text>{themeMode}</Text>
      <Button
        title="Update State"
        onPress={() =>
          setThemeMode((prevThemeMode) =>
            prevThemeMode === "dark" ? "light" : "dark"
          )
        }
      />
    </View>
  );
};
