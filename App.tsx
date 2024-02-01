import "react-native-gesture-handler";
import { AppStack } from "./src/routes";
import { ThemeProvider } from "./src/providers";
import { NavigationContainer } from "./src/routes/NavigationContainer";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
