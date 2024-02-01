import { Pressable, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type ItemProps = { title: string; onPress: () => void };

export const ListItem = ({ title, onPress }: ItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text style={{}}>{title}</Text>
    </Pressable>
  );
};
