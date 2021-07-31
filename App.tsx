import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const formatText = (text: string): string => {
  // Before formating we have to preprocess the text input to extract only
  // numeric character in case there another special characters like whitespace
  const ressetedText = text.replace(/\D/g, '');

  // Then we add the characters we want to add from textToAdd variable

  // Here you can manage this variable to fit with what you want to add in the text and where to add it
  let textToAdd: any = {
    0: '(',
    3: ') ',
    6: ' ',
  };
  return ressetedText.replace(/./g, (character, index) => {
    return textToAdd[index] ? textToAdd[index] + character : character;
  });
};

export default function App() {
  const [formatedText, setFormatedText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text >+90</Text>
        <TextInput 
          style={styles.input} 
          value={formatedText} 
          placeholder="Enter your tel"
          keyboardType="phone-pad"
          autoCompleteType="tel"
          maxLength={14}
          onChangeText={text => {
            const result = formatText(text);
            setFormatedText(result);
        }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    width: 250,
    height: 50,
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
  },
  input: {
    padding: 5,
    width: 200,
    height: 50,
  }
});
