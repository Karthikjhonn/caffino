import { View, Text, TouchableOpacity, Image } from "react-native";

const tabIcons = {
  home: require(`../../assets/icons/tabbar/home.png`),
  wishlist: require(`../../assets/icons/tabbar/wishlist.png`),
  cart: require(`../../assets/icons/tabbar/cart.png`),
  notification: require(`../../assets/icons/tabbar/notification.png`),
};
const tabIconsOutline = {
  home: require(`../../assets/icons/tabbar/outline/home.png`),
  wishlist: require(`../../assets/icons/tabbar/wishlist.png`),
  cart: require(`../../assets/icons/tabbar/cart.png`),
  notification: require(`../../assets/icons/tabbar/notification.png`),
};
const themColor = "#c67c4e";
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View className="bg-white flex-row min-h-[74px]  items-center justify-center absolute bottom-0 z-50 left-0">
      {state.routes.map((route, index) => {
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
        console.log(route);

        if (route.name === "order" || route.name === "details") {
          return null;
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
            <Image
              source={isFocused ?tabIcons[route.name]:tabIconsOutline[route.name]}
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
