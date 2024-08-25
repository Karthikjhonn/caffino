import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect } from "react";
SplashScreen.preventAutoHideAsync();

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [loaded,error] = useFonts({
    'Sora-Light': require("../assets/fonts/Sora-Light.ttf"),
    'Sora-Medium': require("../assets/fonts/Sora-Medium.ttf"),
    'Sora-Regular': require("../assets/fonts/Sora-Regular.ttf"),
    'Sora-SemiBold': require("../assets/fonts/Sora-SemiBold.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }else if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [loaded,error]);

  if (!loaded) {
    return null;
  }
  return <FontContext.Provider value={loaded}>{children}</FontContext.Provider>;
};

export const useFont = () => useContext(FontContext);