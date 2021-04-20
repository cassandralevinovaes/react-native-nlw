import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import colors from "../styles/colors";

// add diferent titles to the same button componet
// add interface function (name + props) from typescript with title and assign to a string
interface ButtonProps extends TouchableOpacityProps{
    title: string;
}
// add title in curly brackets 'title' : BottonProps
export function Button({title, ...rest} : ButtonProps){

    return(
<>
        <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.5}
        {...rest}
        >
        <Text style={styles.buttonText}>{ title } </Text>
      </TouchableOpacity>
      </>

    );
}


const styles = StyleSheet.create({
   button: {
      backgroundColor: colors.green,
      width: 120,
      height: 50,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    
    buttonText: {
      color: colors.white,
    },
  });
  