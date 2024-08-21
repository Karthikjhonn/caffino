import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect } from "react";
SplashScreen.preventAutoHideAsync();

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [loaded] = useFonts({
    soraLight: require("../assets/fonts/Sora-Light.ttf"),
    soraMedium: require("../assets/fonts/Sora-Medium.ttf"),
    soraRegular: require("../assets/fonts/Sora-Regular.ttf"),
    soraSemibold: require("../assets/fonts/Sora-SemiBold.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <FontContext.Provider value={loaded}>{children}</FontContext.Provider>;
};

export const useFont = () => useContext(FontContext);