import { View, Text, TouchableOpacity, Image } from "react-native";

const solidIcons = {
  homestack: require(`../../assets/icons/tabbar/solid/home.png`),
  wishlist: require(`../../assets/icons/tabbar/solid/wishlist.png`),
  cart: require(`../../assets/icons/tabbar/solid/cart.png`),
  notification: require(`../../assets/icons/tabbar/solid/notification.png`),
};
const outlineIcons = {
  homestack: require(`../../assets/icons/tabbar/outline/home.png`),
  wishlist: require(`../../assets/icons/tabbar/outline/wishlist.png`),
  cart: require(`../../assets/icons/tabbar/outline/cart.png`),
  notification: require(`../../assets/icons/tabbar/outline/notification.png`),
};
const themColor = "#c67c4e";
function MyTabBar({ state, descriptors, navigation }) {
  const hideTabBarRoutes = ["details", "order","searchProduct","searchDetails"];

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
            <Image
              source={
                isFocused ? solidIcons[route.name] : outlineIcons[route.name]
              }
              tintColor={isFocused ? themColor : "#222"}
              className="object-contain w-6 h-6"
            />

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
