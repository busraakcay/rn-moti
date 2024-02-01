import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { crocodileTypes } from "../../constants";
import { ListItem } from "./ListItem";

export const ListAnimation = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={crocodileTypes}
        renderItem={({ item }) => (
          <ListItem onPress={() => {}} title={item.name} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.buttonContainer}>
        <View>
          <Text style={styles.text}>Scroll Position</Text>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text}>Navigation</Text>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
