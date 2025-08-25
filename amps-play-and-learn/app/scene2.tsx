import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Scene2() {
	  const router = useRouter();

	    return (
		        <View style={styles.container}>
			      {/* Title */}
			            <Text style={styles.title}>Where do you want to play today?</Text>

				          {/* Buttons for Categories */}
					        <TouchableOpacity
						        style={[styles.button, { backgroundColor: "#EF4444" }]} // Red
							        onPress={() => router.push("/scene3")}
								      >
								              <Text style={styles.buttonText}>í¾µ Sing & Say</Text>
									            </TouchableOpacity>

										          <TouchableOpacity
											          style={[styles.button, { backgroundColor: "#3B82F6" }]} // Blue
												          onPress={() => router.push("/scene3")}
													        >
														        <Text style={styles.buttonText}>í´¢ Count & Play</Text>
															      </TouchableOpacity>

															            <TouchableOpacity
																            style={[styles.button, { backgroundColor: "#10B981" }]} // Green
																	            onPress={() => router.push("/scene3")}
																		          >
																			          <Text style={styles.buttonText}>í°¢ Story Corner</Text>
																				        </TouchableOpacity>

																					      <TouchableOpacity
																					              style={[styles.button, { backgroundColor: "#FACC15" }]} // Yellow
																						              onPress={() => router.push("/scene3")}
																							            >
																								            <Text style={styles.buttonText}>í¾¨ My Creativity</Text>
																									          </TouchableOpacity>

																										        {/* Footer Branding */}
																											      <Text style={styles.footer}>Powered by AMPS Schools</Text>
																											          </View>
																												    );
}

const styles = StyleSheet.create({
	  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFBEA" },
	    title: { fontSize: 22, fontWeight: "bold", marginBottom: 30, color: "#1E3A8A", textAlign: "center" },
	      button: { paddingVertical: 15, paddingHorizontal: 50, borderRadius: 25, marginVertical: 10 },
	        buttonText: { fontSize: 20, color: "#fff", fontWeight: "bold" },
		  footer: { marginTop: 40, fontSize: 14, color: "#6B7280" },
});

