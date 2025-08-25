import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Scene3() {
	  const router = useRouter();
	    const [count, setCount] = useState(0);

	      const handleTap = () => {
		          if (count < 5) {
				        setCount(count + 1);
					    } else {
						          Alert.alert("Well done! Ìæâ", "You counted to 5!", [
								          { text: "Continue", onPress: () => router.push("/scene4") },
										        ]);
									      }
									        };

										  return (
											      <View style={styles.container}>
											            <Text style={styles.title}>Ì¥¢ Count the Stars!</Text>

												          {/* Display stars */}
													        <View style={styles.starsContainer}>
														        {[...Array(count)].map((_, i) => (
																          <Text key={i} style={styles.star}>‚≠ê</Text>
																	          ))}
																		        </View>

																			      <TouchableOpacity style={styles.button} onPress={handleTap}>
																			              <Text style={styles.buttonText}>Tap to Add ‚≠ê</Text>
																				            </TouchableOpacity>

																					          <TouchableOpacity
																						          style={[styles.button, { backgroundColor: "#6B7280" }]}
																							          onPress={() => router.push("/scene2")}
																								        >
																									        <Text style={styles.buttonText}>‚¨Ö Back to Menu</Text>
																										      </TouchableOpacity>
																										          </View>
																											    );
}

const styles = StyleSheet.create({
	  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F0F9FF" },
	    title: { fontSize: 26, fontWeight: "bold", color: "#1E3A8A", marginBottom: 30 },
	      starsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: 30 },
	        star: { fontSize: 40, margin: 5 },
		  button: {
			      backgroundColor: "#3B82F6",
			          paddingVertical: 15,
				      paddingHorizontal: 40,
				          borderRadius: 25,
					      marginVertical: 10,
					        },
						  buttonText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});

