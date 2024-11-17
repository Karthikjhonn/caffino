import { View, Text, TouchableOpacity, Image } from "react-native";
import HomeSvg from "../../assets/svg/solid/HomeSvg";
import HeartSvg from "../../assets/svg/solid/HeartSvg";
import BagSvg from "../../assets/svg/solid/BagSvg";
import BellSvg from "../../assets/svg/solid/BellSvg";
import HomeOtSvg from "../../assets/svg/outline/HomeOtSvg";
import HeartOtSvg from "../../assets/svg/outline/HeartOtSvg";
import BagOtSvg from "../../assets/svg/outline/BagOtSvg";
import BellOtSvg from "../../assets/svg/outline/BellOtSvg";
import CategoriesSvg from "../../assets/svg/solid/categoriesSvg";
import CategoriesOTSvg from "../../assets/svg/outline/categoriesOtSvg";

const solidIcons = [<HomeSvg />,<CategoriesSvg/>, <HeartSvg />, <BagSvg />, <BellSvg />];

const outlineIcons = [
  <HomeOtSvg />,
  <CategoriesOTSvg />,
  <HeartOtSvg />,
  <BagOtSvg />,
  <BellOtSvg />,
];

const themColor = "#c67c4e";
function MyTabBar({ state, descriptors, navigation }) {
  const hideTabBarRoutes = [
    "details",
    "order",
    "searchProduct",
    "searchDetails",
    
  ];

  const currentRoute = state.routes[state.index];
  let currentRouteName = currentRoute.name;

  if (currentRoute.state) {
    const nestedRoute = currentRoute.state.routes[currentRoute.state.index];
    currentRouteName = nestedRoute.name;
  }

  // console.log("currentRouteName", currentRouteName);

  if (hideTabBarRoutes.includes(currentRouteName)) {
    return null;
  }

  return (
    <View className="bg-white flex-row min-h-[74px]  items-center justify-center absolute bottom-0 z-50 left-0">
      {state.routes.map((route, index) => {
        // console.log(route);

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        // console.log(route);
        // console.log(route.name);
        if(route.name == "test"){
          return null
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            className="h-full flex-1 items-center justify-center"
          >
           
            {isFocused ? solidIcons[index]:outlineIcons[index]}
            <View
              className={`bg-accent w-2.5 h-[5px] rounded-lg mt-1 ${
                isFocused ? "opacity-100" : "opacity-0"
              }`}
            ></View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
