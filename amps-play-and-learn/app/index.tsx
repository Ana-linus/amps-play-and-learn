import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
	  const router = useRouter();

	    return (
		        <View style={styles.container}>
			      <Text style={styles.title}>í¾“ AMPS Play & Learn í¾®</Text>
			            <Text style={styles.subtitle}>Welcome! Letâ€™s begin the journey íº€</Text>

				          <TouchableOpacity 
					          style={styles.button} 
						          onPress={() => router.push("/scene1")}
							        >
								        <Text style={styles.buttonText}>Start Game</Text>
									      </TouchableOpacity>

									            <TouchableOpacity 
										            style={styles.exitButton} 
											            onPress={() => console.log("Exit pressed")}
												          >
													          <Text style={styles.buttonText}>Exit</Text>
														        </TouchableOpacity>
															    </View>
															      );
}

const styles = StyleSheet.create({
	  container: {
		      flex: 1,
		          backgroundColor: "#f5f5f5",
			      justifyContent: "center",
			          alignItems: "center",
				      padding: 20,
				        },
					  title: {
						      fontSize: 28,
						          fontWeight: "bold",
							      marginBottom: 10,
							          textAlign: "center",
								    },
								      subtitle: {
									          fontSize: 18,
										      marginBottom: 30,
										          textAlign: "center",
											      color: "#555",
											        },
												  button: {
													      backgroundColor: "#4CAF50",
													          paddingVertical: 12,
														      paddingHorizontal: 30,
														          borderRadius: 10,
															      marginBottom: 20,
															        },
																  exitButton: {
																	      backgroundColor: "#f44336",
																	          paddingVertical: 12,
																		      paddingHorizontal: 30,
																		          borderRadius: 10,
																			    },
																			      buttonText: {
																				          fontSize: 18,
																					      color: "#fff",
																					          fontWeight: "bold",
																						    },
});

