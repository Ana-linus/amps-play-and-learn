import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Scene1() {
	  const router = useRouter();

	    return (
		        <View style={styles.container}>
			      {/* Background */}
			            <View style={styles.bg} />

				          {/* Logo + Tagline */}
					        <Image source={require("AMPS_school_logo.png")} style={styles.logo} />
						      <Text style={styles.tagline}>“Discipline and Knowledge.”</Text>

						            {/* Mascot */}
							          <Image source={require("../assets/anagha-parrot.png")} style={styles.mascot} />

								        {/* Start Button */}
									      <TouchableOpacity style={styles.button} onPress={() => router.push("/scene2")}>
									              <Text style={styles.buttonText}>Start</Text>
										            </TouchableOpacity>
											        </View>
												  );
}

const styles = StyleSheet.create({
	  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FACC15" }, // golden yellow
	    bg: { ...StyleSheet.absoluteFillObject, backgroundColor: "#FACC15" },
	      logo: { width: 180, height: 180, resizeMode: "contain", marginBottom: 20 },
	        tagline: { fontSize: 18, fontFamily: "Poppins", marginBottom: 30, color: "#1E3A8A" },
		  mascot: { width: 120, height: 120, resizeMode: "contain", marginBottom: 40 },
		    button: { backgroundColor: "#1E3A8A", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25 },
		      buttonText: { color: "#FFF", fontSize: 22, fontFamily: "Baloo2-Bold" },
});

