import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	  return (
		      <SafeAreaProvider>
		            <Stack screenOptions={{ headerShown: false }}>
			            <Stack.Screen name="scene1" />
				            <Stack.Screen name="scene2" />
					            <Stack.Screen name="scene3" />
						            <Stack.Screen name="scene4" />
							          </Stack>
								      </SafeAreaProvider>
								        );
}

