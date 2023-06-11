import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [number, onChangeNumber] = useState('');
  const [nearest, setNearest] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder='How much did you spend at wetherspoons?'
          keyboardType='numeric'
        />
      </SafeAreaView>

      <Button
        title='Estimate'
        onPress={() => setNearest(kNearest(number))}
      />

      <Text>{labels[nearest]}</Text>
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
});

function kNearest(number) {
  let nearest = data[0];
  let nearestDistance = Math.abs(nearest - number);
  for (let i = 1; i < data.length; i++) {
      let distance = Math.abs(data[i] - number);
      if (distance < nearestDistance) {
          nearest = data[i];
          index = i;
          nearestDistance = distance;
      }
  }
  return index;
}

let index = 0;
let labels = ['Corona', 'Budweiser', 'Leffe Blonde', 'Worthingtons Creamflow','Bud Light', 'Carlsberg Pilsner', 'Carling' , 'Coors', 'Stella Artois', 'San Miguel', 'Guinness' ]
let data = [4.41, 4.07, 4.72, 2.78, 3.00, 3.33, 3.97, 3.97, 4.29, 4.41, 3.75]