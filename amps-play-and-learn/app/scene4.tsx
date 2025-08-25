import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Scene4() {
	  const router = useRouter();

	    return (
		        <View style={styles.container}>
			      <Text style={styles.title}>í¿† Congratulations! You Won!</Text>
			            <Text style={styles.subtitle}>AMPS says: Keep Learning!</Text>

				          <TouchableOpacity style={styles.button} onPress={() => router.push("/scene2")}>
					          <Text style={styles.buttonText}>Play Again</Text>
						        </TouchableOpacity>

							      <TouchableOpacity style={[styles.button, { backgroundColor: "#EF4444" }]} onPress={() => router.push("/scene1")}>
							              <Text style={styles.buttonText}>Exit</Text>
								            </TouchableOpacity>
									        </View>
										  );
}

const styles = StyleSheet.create({
	  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFBEA" },
	    title: { fontSize: 26, fontFamily: "ComicNeue-Bold", marginBottom: 20, color: "#1E3A8A" },
	      subtitle: { fontSize: 18, marginBottom: 40, color: "#10B981" },
	        button: { backgroundColor: "#1E3A8A", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginVertical: 10 },
		  buttonText: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
});

