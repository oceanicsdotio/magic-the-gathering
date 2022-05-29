/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "./ModalScreen";
import NotFoundScreen from "./NotFoundScreen";
import TabOneScreen from "./TabOneScreen";
import TabTwoScreen from "./TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

const DetailRoute = "Modal"

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const StaffIcon = ({ color }: {color:any}) => (
  // @ts-ignore
  <MaterialCommunityIcons
    size={30}
    style={{ marginBottom: -3 }}
    color={color}
    name={"magic-staff"}
  />
);

const CastleIcon = ({ color }: {color:any}) => (
  // @ts-ignore
  <MaterialCommunityIcons
    size={30}
    style={{ marginBottom: -3 }}
    color={color}
    name={"castle"}
  />
);

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    // @ts-ignore
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Decklist",
          tabBarIcon: StaffIcon,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
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
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Bench",
          tabBarIcon: CastleIcon,
        }}
      />
    </BottomTab.Navigator>
  );
}

const { Navigator, Screen, Group } =
  createNativeStackNavigator<RootStackParamList>();

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
export function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {/* @ts-ignore */}
      <Navigator>
        <Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
        {/* @ts-ignore */}
        <Group screenOptions={{ presentation: "modal" }}>
          <Screen name={DetailRoute} component={ModalScreen} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
