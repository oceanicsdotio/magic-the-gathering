import * as React from "react";

import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "../hooks/useColorScheme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import type { RootStackParamList } from "../types";

const MoreInfo =
  (destination: keyof RootStackParamList) =>
  () => {
    const { navigate } = useNavigation();
    const colorScheme = useColorScheme();

    return (
      <Pressable
        onPress={() => navigate(destination)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        {/* @ts-ignore */}
        <MaterialCommunityIcons
          name="chart-timeline-variant-shimmer"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    );
  };

export default MoreInfo;
