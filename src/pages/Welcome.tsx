import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import {Entypo} from "@expo/vector-icons";

//import an image from assets
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

//import function
import { Button } from "../components/button";

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Text>

      <Image 
      source={wateringImg} 
      style={styles.images} 
      resizeMode='contain'
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos sempre de lembrá-lo
        quando precisar
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>
          <Entypo name='chevron-thin-right' />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
  },
  images: {
    height: Dimensions.get("window").width * 0.7,
  },
});
