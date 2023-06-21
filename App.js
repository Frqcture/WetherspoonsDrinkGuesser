import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

let drinkAccuracy = ['Corona'];
let drinkAccuracyCounter = [0];

export default function App() {
  const [number, onChangeNumber] = useState('');
  const [nearest, setNearest] = useState('');

  const [yesno, setYesNo] = useState(true);

  function disableYesNo() {
    setNearest(kNearest(number));
    setYesNo(false);
  }

  function yesNoCounter(trueOrFalse) {
    setYesNo(true);


    if (trueOrFalse) {

      //Do something if correct
      for(let i = 0; i < drinkAccuracy.length; i++) {
        if(drinkAccuracy[i] == labels[nearest]) {

          console.log(drinkAccuracyCounter[i]);
          drinkAccuracyCounter[i]++;
          console.log(drinkAccuracyCounter[i]);
        }
        else if (i == drinkAccuracy.length - 1) {
          drinkAccuracy.push(labels[nearest]);
          drinkAccuracyCounter.push(0);
          drinkAccuracyCounter[drinkAccuracy.length - 1]++;
        }
      }
    }

    else {
      //Do something if incorrect
      for(let i = 0; i < drinkAccuracy.length; i++) {
        if(drinkAccuracy[i] == labels[nearest]) {
          drinkAccuracyCounter[i]--;
        }
        else if (i == drinkAccuracy.length - 1) {
          drinkAccuracy.push(labels[nearest]);
          drinkAccuracyCounter.push(0);
          drinkAccuracyCounter[drinkAccuracy.length - 1]--;
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder='How much did you spend at wetherspoons?'
          keyboardType='numeric'
        />

        <Button
          title='Estimate'
          onPress={() => disableYesNo()}
          disabled={!yesno}
        />

        <Text>{labels[nearest]}</Text>

        <View
          style={{flexDirection: 'row', justifyContent: 'space-between'}}
        >
          <Button
            title='Correct'
            style={{flex: 1}}
            color={'green'}
            disabled={yesno}
            onPress={() => yesNoCounter(true)}
          />
          <Button 
            title='Incorrect'
            style={{flex: 1}}
            color={'red'}
            disabled={yesno}
            onPress={() => yesNoCounter(false)}
          />
        </View>
      </SafeAreaView>

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
  let secondNearest = data[1];
  let secondNearestDistance = Math.abs(secondNearest - number);
  for (let i = 1; i < data.length; i++) {
      let distance = Math.abs(data[i] - number);
      if (distance < nearestDistance) {
          secondNearest = nearest;
          secondNearestDistance = nearestDistance;
          nearest = data[i];
          index = i;
          nearestDistance = distance;
      }
  }
  return index;
}

//.

let index = 0;
let labels = ['Corona', 'Budweiser', 'Leffe Blonde', 'Worthingtons Creamflow', 'Bud Light', 'Carlsberg Pilsner', 'Carling', 'Coors', 'Stella Artois', 'San Miguel', 'Guinness', 'Shipyard American Pale Ale', 'BrewDog Punk IPA', 'Stowford Press', 'Stowford Press mixed berries', 'Kopparberg Strawberry & Lime cider on draught', 'Thatchers Gold', 'Thistly Cross Whisky Cask cider', 'Westons Old Rosie Cloudy Cider', 'Greene King Ruddles Best', 'Sharps Doom Bar', 'Greene King Abbot Ale', 'Asahi', 'Peroni', 'Heineken', 'Staropramen', 'Birra Moretti' , 'Tsingtao', 'Singha', 'Erdinger', 'Tusker', 'Tyskie Gronie', 'Efes', 'Cobra', 'Newcastle Brown Ale', 'Corona', 'Budweiser', 'Desperados', 'Estrella Galicia', 'Peroni', 'Becks', 'Sol', 'Blue Moon Belgian-style wheat ale', 'Mythos', 'BrewDog Elvis Juice', 'BrewDog Hazy Jane', 'Lagunitas IPA', 'Goose IPA', 'Camden Hells', 'Bud Light Passionfruit hard Seltzer', 'Bud Light Strawberry hard Seltzer', 'Mikes Black Cherry hard Seltzer', 'Mikes Raspberry hard Seltzer', 'Angry Orchard', 'Aspall Cyder', 'Kopparberg Strawberry & Lime cider', 'Kopparberg Mixed Fruit cider', 'Kopparberg Light Passionfruit cider', 'Kopparberg Tropical', 'Bulmers Red Berries cider', 'Hooch', 'WKD Blue', 'Smirnoff Ice', 'Stella Artois - Alcohol Free', 'Heineken 0.0 - Alcohol free', 'Becks Blue - Alcohol free', 'Kopparberg Strawberry & Lime - Alcohol free', 'Adnams Ghost Ship - Low alcohol', 'BrewDog Punk AF - Low alcohol', 'Erdinger - Low alcohol', 'Coldwater Creek Chardonnay by Concha y Toro', 'Coldwater Creek Pinot Grigio by Concha y Toro', 'Villa Maria Sauvignon Blanc', 'Villa Maria Sauvignon Blanc', 'Hardys Chardonnay', 'Hardys Pinot Grigio', 'Coldwater Creek Merlot by Concha y Toro', 'Hardys Shiraz', 'Trivento Malbec', 'Casillero del Diablo Cabernet Sauvignon', 'Casillero del Diablo Cabernet Sauvignon', 'Coldwater Creek Rosé by Concha y Toro', 'Belle Année by Mirabeau' , 'Hardys Rosé', 'Belle Année by Mirabeau' , 'Broadwoods Folly', 'Wolf Blass Sparkling Brut', 'Teresa Rizzi Prosecco DOC', 'Teresa Rizzi Prosecco DOC', 'Teresa Rizzi Sparkling Rosé', 'Au Vodka Blue Raspberry', 'Au Vodka Black Grape', 'Au Vodka Pineapple Crush', 'Smirnoff Mango & Passionfruit Twist' , 'Smirnoff Raspberry Crush vodka', 'Smirnoff', 'Smirnoff vodka and Monster', 'Absolut Vanilia', 'Absolut', 'Grey Goose', 'Twin Fin Coconut & Lychee rum', 'Duppy White rum', 'Bumbu', 'Kopparberg Cherry rum', 'Dead Mans Finger Pineapple rum', 'Captain Morgan Tiki', 'Captain Morgan Original Spiced Gold', 'Captain Morgan White', 'Bacardi Carta Blanca', 'The Kraken Black Spiced', 'Lambs Navy', 'Haig Club Clubman', 'Bells', 'The Famous Grouse', 'Jameson', 'Jack Daniels', 'Jack Daniels Tennessee Honey', 'Glenfiddich 12-year-old', 'Glenmorangie 10-year-old', 'Jim Beam', 'Buffalo Trace', 'Flävar Raspberry & Liquorice schnapps', 'Flävar Strawberry & Lime schnapps', 'Flävar Salted Caramel schnapps', 'Jack Daniels Tennessee Apple Liqueur', 'Sheep Dog Peanut Butter Whiskey liqueur', 'Disaronno Amaretto', 'Fireball Cinnamon Whisky Liqueur', 'Chambord Black Raspberry Liqueur', 'Archers peach schnapps', 'Malibu', 'Southern Comfort', 'Baileys', 'Tia Maria', 'Strika Herbal Liqueur', 'Cockburns Ruby Port', 'Martini® Extra Dry Vermouth', 'Martini® Rosso Vermouth', 'Black Bottle', 'E & J', 'Aperol Spritz', 'Raspberry Mojito', 'Zombie', 'Classic Pimms', 'Kopparberg Strawberry Delight', 'Smirnoff vodka and Monster', 'Hawaiian Pipeline Punch', 'Cranberry Breeze', 'Purple Rain', 'Blue Lagoon', 'Woo Woo', 'Sex on the Beach', 'Mango Monster Mash', 'The Godfather', 'Ginberry Fizz', 'Porn Star Martini', 'Bubblegin', 'Corona', 'Budweiser', 'Leffe Blonde', 'Worthingtons Creamflow', 'Bud Light', 'Carlsberg Pilsner', 'Carling', 'Coors', 'Stella Artois', 'San Miguel', 'Guinness', 'BrewDog Punk IPA', 'Stowford Press', 'Stowford Press Dark Berry', 'Kopparberg Strawberry & Lime cider on draught', 'Thatchers Gold', 'Blackthorn cider' , 'Greene King Ruddles Best', 'Sharps Doom Bar', 'Greene King Abbot Ale', 'Oakham Citra T90', 'Thornbridge Lukas', 'Brewsters IPA', 'BrewDog Elvis Juice', 'BrewDog Hazy Jane', 'Camden Hells', 'Lagunitas IPA', 'Goose IPA', 'Asahi', 'Peroni', 'Heineken', 'Staropramen', 'Birra Moretti' , 'Erdinger', 'Tusker', 'Tyskie Gronie', 'Efes', 'Newcastle Brown Ale', 'Corona', 'Budweiser', 'Desperados', 'Estrella Galicia', 'Peroni', 'Becks', 'Sol', 'Bud Light Seltzer passion fruit', 'Bud Light Seltzer strawberry', 'Mikes Hard Seltzer black cherry', 'Mikes Hard Seltzer raspberry', 'Angry Orchard', 'Aspall Cyder', 'Thatchers Blood Orange', 'Bulmers Original', 'Kopparberg Strawberry & Lime cider', 'Kopparberg Mixed Fruit cider', 'Kopparberg Light Passionfruit cider', 'Kopparberg Mixed Fruit Tropical', 'Bulmers Red Berries cider', 'Hooch', 'WKD Blue', 'Smirnoff Ice', 'Stella Artois - Alcohol Free', 'Heineken 0.0 - Alcohol free', 'Becks Blue - Alcohol free', 'Kopparberg Strawberry & Lime - Alcohol free', 'Adnams Ghost Ship - Low alcohol', 'BrewDog Punk AF - Low alcohol', 'Erdinger - Low alcohol', 'Coldwater Creek Chardonnay by Concha y Toro', 'Coldwater Creek Pinot Grigio by Concha y Toro', 'Villa Maria Sauvignon Blanc', 'Villa Maria Sauvignon Blanc', 'Hardys Chardonnay', 'Hardys Pinot Grigio', 'Zana Pinot Noir', 'Hardys Shiraz', 'Trivento Malbec', 'Casillero del Diablo Cabernet Sauvignon', 'Coldwater Creek Rosé by Concha y Toro', 'Belle Année by Maison Mirabeau', 'France', 'Belle Année by Maison Mirabeau', 'France', 'Hardys Rosé', 'Denbies Whitedowns Brut', 'Broadwoods Folly', 'Wolf Blass Sparkling Brut', 'Teresa Rizzi Prosecco DOC', 'Teresa Rizzi Prosecco DOC', 'Teresa Rizzi Sparkling Rosé', 'Aperol Spritz', 'Mango & Passionfruit spritz', 'Peach Blush Spritz', 'Tanqueray spritz', 'Classic Pimms', 'Au Vodka Blue Raspberry', 'Au Vodka black grape', 'Au Vodka pineapple crush', 'Smirnoff Mango & Passionfruit Twist' , 'Smirnoff Raspberry Crush vodka', 'Smirnoff', 'Smirnoff vodka and Monster', 'Absolut Vanilia', 'Absolut', 'Skyy', 'Stolichnaya', 'Grey Goose', 'Twin Fin Coconut & Lychee rum', 'Duppy White rum', 'Bumbu', 'Kopparberg Cherry rum', 'Dead Mans Finger Pineapple rum', 'Captain Morgan Tiki', 'Captain Morgan Original Spiced Gold', 'Captain Morgan White', 'BrewDog Five Hundred Cuts Botanical Rum', 'Bacardi Carta Blanca', 'The Kraken Black Spiced', 'Lambs Navy', 'Haig Club Clubman', 'Bells', 'The Famous Grouse', 'Jameson', 'Jack Daniels', 'Glenfiddich 12-year-old', 'Glenmorangie 10-year-old', 'Jim Beam', 'Buffalo Trace', 'Flävar Raspberry & Liquorice schnapps', 'Flävar Strawberry & Lime schnapps', 'Flävar Salted Caramel schnapps', 'Jack Daniels Tennessee Apple liqueur', 'Sheep Dog Peanut Butter whiskey liqueur', 'Disaronno Amaretto', 'Fireball Cinnamon Whisky liqueur', 'Chambord Black Raspberry liqueur', 'Archers peach schnapps', 'Malibu', 'Southern Comfort', 'Baileys', 'Tia Maria', 'Strika Herbal Liqueur', 'Cockburns Ruby Port', 'Martini® Extra Dry Vermouth', 'Martini® Rosso Vermouth', 'Black Bottle', 'E & J', 'Corona', 'Budweiser', 'Leffe Blonde', 'Worthingtons Creamflow', 'Bud Light', 'Carlsberg Pilsner', 'Carling', 'Coors', 'Stella Artois', 'San Miguel', 'Guinness', 'Shipyard American Pale Ale', 'BrewDog Punk IPA', 'Blue Moon', 'Stowford Press', 'Stowford Press mixed berries', 'Kopparberg Strawberry & Lime cider on draught', 'Thatchers Gold', 'Thatchers Haze', 'Greene King Ruddles Best', 'Sharps Doom Bar', 'Greene King Abbot Ale', 'Asahi', 'Peroni', 'Heineken', 'Staropramen', 'Birra Moretti' , 'Tsingtao', 'Singha', 'Erdinger', 'Tusker', 'Tyskie Gronie', 'Efes', 'Cobra', 'Newcastle Brown Ale', 'Corona', 'Budweiser', 'Desperados', 'Estrella Galicia', 'Peroni', 'Becks', 'Sol', 'Blue Moon Belgian-style wheat ale', 'Staropramen', 'Duvel', 'Brooklyn Lager', 'BrewDog Elvis Juice', 'BrewDog Hazy Jane', 'Goose IPA', 'Camden Hells', 'Staropramen', 'Bud Light Passionfruit hard Seltzer', 'Bud Light Strawberry hard Seltzer', 'Mikes Black Cherry hard Seltzer', 'Mikes Raspberry hard Seltzer', 'Angry Orchard', 'Aspall Cyder', 'Kopparberg Strawberry & Lime cider', 'Kopparberg Mixed Fruit cider', 'Kopparberg Light Passionfruit cider', 'Kopparberg Tropical', 'Bulmers Red Berries cider', 'Hooch', 'WKD Blue', 'Smirnoff Ice', 'Stella Artois - Alcohol Free', 'Heineken 0.0 - Alcohol free', 'Becks Blue - Alcohol free', 'Kopparberg Strawberry & Lime - Alcohol free', 'Adnams Ghost Ship - Low alcohol', 'BrewDog Punk AF - Low alcohol', 'Erdinger - Low alcohol', 'Coldwater Creek Chardonnay by Concha y Toro', 'Coldwater Creek Pinot Grigio by Concha y Toro', 'Villa Maria Sauvignon Blanc', 'Villa Maria Sauvignon Blanc', 'Hardys Chardonnay', 'Hardys Pinot Grigio', 'Coldwater Creek Merlot by Concha y Toro', 'Hardys Shiraz', 'Casillero del Diablo Cabernet Sauvignon', 'Coldwater Creek Rosé by Concha y Toro', 'Belle Année by Mirabeau' , 'Hardys Rosé', 'Belle Année by Mirabeau' , 'Wolf Blass Sparkling Brut', 'Serre del Lago Prosecco DOC', 'Serre del Lago Prosecco DOC', 'Serre del Lago Rosato', 'Teresa Rizzi Prosecco DOC', 'Teresa Rizzi Prosecco DOC', 'Teresa Rizzi Sparkling Rosé', 'Au Vodka Blue Raspberry', 'Au Vodka Black Grape', 'Au Vodka Pineapple Crush', 'Smirnoff Mango & Passionfruit Twist' , 'Smirnoff Raspberry Crush vodka', 'Smirnoff', 'Smirnoff vodka and Monster', 'Absolut', 'Stolichnaya', 'Grey Goose', 'Twin Fin Coconut & Lychee rum', 'Duppy White rum', 'Bumbu', 'Kopparberg Cherry rum', 'Dead Mans Finger Pineapple rum', 'Captain Morgan Tiki', 'Captain Morgan Original Spiced Gold', 'Captain Morgan White', 'Bacardi Carta Blanca', 'The Kraken Black Spiced', 'Lambs Navy', 'Haig Club Clubman', 'Bells', 'The Famous Grouse', 'Jameson', 'Jack Daniels', 'Jack Daniels Tennessee Honey', 'Glenfiddich 12-year-old', 'Glenfiddich 18-year-old', 'Glenmorangie 10-year-old', 'Talisker 10-year-old', 'Jim Beam', 'Buffalo Trace', 'Flävar Raspberry & Liquorice schnapps', 'Flävar Strawberry & Lime schnapps', 'Flävar Salted Caramel schnapps', 'Jack Daniels Tennessee Apple Liqueur', 'Sheep Dog Peanut Butter Whiskey liqueur', 'Disaronno Amaretto', 'Fireball Cinnamon Whisky Liqueur', 'Chambord Black Raspberry Liqueur', 'Archers peach schnapps', 'Malibu', 'Southern Comfort', 'Baileys', 'Tia Maria', 'Strika Herbal Liqueur', 'Cockburns Ruby Port', 'Martini® Extra Dry Vermouth', 'Martini® Rosso Vermouth', 'Black Bottle', 'E & J', 'Aperol Spritz', 'Tropical Daiquiri', 'Raspberry Mojito', 'Zombie', 'Classic Pimms', 'Kopparberg Strawberry Delight', 'Smirnoff vodka and Monster', 'Hawaiian Pipeline Punch', 'Cranberry Breeze', 'Purple Rain', 'Blue Lagoon', 'Woo Woo', 'Sex on the Beach', 'Mango Monster Mash', 'The Godfather', 'Ginberry Fizz', 'Porn Star Martini', 'Bubblegin'];

let data = [3.99, 3.69, 4.29, 2.49, 2.69, 2.99, 3.59, 3.59, 3.89, 3.99, 3.49, 2.49, 3.99, 2.69, 2.99, 2.99, 3.29, 3.79, 3.79, 1.69, 2.29, 2.49, 4.35, 4.35, 4.35, 4.35, 4.35, 4.35, 4.35, 4.19, 4.35, 4.19, 4.19, 4.19, 2.29, 2.99, 2.99, 2.99, 2.99, 2.99, 1.69, 2.29, 2.99, 3.99, 4.75, 4.55, 3.1, 3.1, 3.1, 2.59, 2.59, 3.1, 3.1, 4.35, 4.35, 2.99, 2.99, 2.99, 2.99, 2.99, 2.29, 2.29, 2.29, 2.1, 2.1, 1.69, 2.1, 2.1, 2.1, 2.1, 1.55, 1.55, 2.45, 12.39, 100, 100, 1.55, 100, 100, 100, 100, 1.55, 2.45, 100, 12.39, 100, 100, 100, 100, 100, 2.99, 2.99, 2.99, 2.99, 2.99, 4.05, 2.99, 2.99, 4.05, 5.1, 4.39, 2.99, 4.39, 3.79, 2.99, 2.99, 2.99, 2.99, 4.39, 4.39, 3.79, 2.99, 1.19, 3.79, 3.89, 4.29, 4.29, 3.89, 3.89, 2.99, 3.75, 2.29, 2.29, 2.29, 2.89, 2.29, 2.99, 2.29, 2.29, 2.29, 2.29, 4.29, 3.75, 2.29, 2.29, 3.75, 2.29, 2.29, 2.89, 2.89, 5.99, 2.29, 7.95, 4.99, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 4.39, 4.1, 4.79, 3.1, 3.1, 3.69, 3.99, 3.99, 4.29, 4.39, 3.99, 4.39, 3.1, 3.49, 4.49, 4.25, 4.29, 2.1, 2.79, 2.99, 3.99, 3.79, 4.19, 5.15, 4.95, 4.95, 2.69, 3.59, 4.75, 4.75, 4.75, 4.75, 4.75, 4.75, 4.75, 4.59, 4.59, 3.75, 3.49, 3.49, 3.49, 3.49, 3.49, 2.1, 3.39, 2.69, 2.69, 2.69, 2.69, 3.49, 3.49, 3.49, 3.49, 3.49, 3.49, 3.49, 3.49, 3.49, 3.39, 3.39, 3.39, 2.95, 2.95, 2.1, 2.95, 2.95, 2.95, 2.95, 1.99, 1.99, 2.75, 13.79, 100, 100, 100, 100, 100, 100, 1.99, 13.79, 13.79, 100, 100, 100, 100, 100, 100, 100, 7.1, 7.1, 6.1, 6.1, 3.85, 5.49, 5.49, 5.49, 4.49, 5.49, 4.55, 3.49, 3.49, 4.55, 4.55, 4.55, 5.59, 4.69, 4.19, 4.69, 4.29, 4.29, 3.49, 3.49, 3.49, 4.69, 4.69, 4.69, 4.29, 3.49, 2.1, 4.25, 4.29, 4.59, 4.25, 4.25, 3.49, 4.45, 3.3, 3.3, 3.3, 3.49, 3.39, 3.49, 3.39, 3.39, 3.39, 3.39, 4.45, 4.65, 3.39, 3.39, 4.65, 3.39, 3.39, 3.39, 3.39, 3.99, 3.69, 4.29, 2.49, 2.69, 2.99, 3.59, 3.59, 3.89, 3.99, 3.49, 2.49, 3.99, 3.99, 2.69, 2.99, 2.99, 3.39, 3.49, 1.69, 2.29, 2.49, 4.35, 4.35, 4.35, 4.35, 4.35, 4.35, 4.35, 4.19, 4.35, 4.19, 4.19, 4.19, 2.29, 2.99, 2.99, 2.99, 2.99, 2.99, 1.69, 2.29, 2.99, 3.69, 4.49, 4.55, 4.75, 4.55, 3.1, 3.1, 3.69, 2.59, 2.59, 3.1, 3.1, 4.35, 4.35, 2.99, 2.99, 2.99, 2.99, 2.99, 2.29, 2.29, 2.29, 2.1, 2.1, 1.69, 2.1, 2.1, 2.1, 2.1, 1.55, 1.55, 2.45, 12.39, 100, 100, 1.55, 100, 100, 1.55, 2.45, 100, 12.39, 100, 100, 100, 100, 100, 100, 100, 2.99, 2.99, 2.99, 2.99, 2.99, 4.15, 2.99, 4.15, 4.15, 5.19, 4.29, 2.99, 4.29, 3.79, 2.99, 2.99, 2.99, 2.99, 4.29, 4.29, 3.79, 2.99, 1.19, 3.45, 3.89, 4.29, 4.29, 3.89, 5.89, 3.89, 4.89, 2.99, 3.69, 2.29, 2.29, 2.29, 2.89, 2.29, 2.99, 2.29, 2.29, 2.29, 2.29, 4.19, 3.75, 2.29, 2.29, 3.75, 2.29, 2.29, 2.89, 2.89, 5.99, 2.29, 2.29, 7.95, 4.99, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95, 7.95];
