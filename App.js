import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {NavigationContainer, Dimensions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import List from './fragments/List';
import Detail from './fragments/Detail';
import OrientationView from 'rn-orientation-view';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Fragmenter Øving" 
            component={HomeScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

function HomeScreen({navigation, route}) {

  const [ index, setIndex] = useState(0);

  const data = [
    {title: 'Insomnia', id: 0, image: 'http://upload.wikimedia.org/wikipedia/en/7/7c/Insomnia2002Poster.jpg', description: 'Insomnia is a 2002 American psychological thriller film directed by Christopher Nolan and written by Hillary Seitz. A remake of the 1997 Norwegian film of the same name, it stars Al Pacino, Robin Williams, and Hilary Swank with Maura Tierney, Martin Donovan, Nicky Katt, and Paul Dooley in supporting roles.'},
    {title: 'Batman Begins', id: 1, image: 'http://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg', description: 'Batman Begins is a 2005 superhero film directed by Christopher Nolan and written by Nolan and David S. Goyer. Based on the DC Comics character Batman, it stars Christian Bale as Bruce Wayne / Batman, with Michael Caine, Liam Neeson, Katie Holmes, Gary Oldman, Cillian Murphy, Tom Wilkinson, Rutger Hauer, Ken Watanabe, and Morgan Freeman in supporting roles.'},
    {title: 'The Prestige', id: 2, image: 'http://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg', description: 'The Prestige is a 2006 mystery thriller film directed by Christopher Nolan, written by Nolan and his brother Jonathan, based on the 1995 novel of the same name by Christopher Priest. It follows Robert Angier and Alfred Borden, rival stage magicians in London at the end of the 19th century. '},
    {title: 'The Dark Knight', id: 3, image: 'http://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg', description: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins"},
    {title: 'Inception', id: 4, image: 'http://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg', description: 'Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.'},
  ];

  const onClick = (index) => {
    setIndex(index);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
        <Button
            title="Forrige"
            onPress={() => setIndex(c => c - 1 >= 0 ? c - 1 : 0)}
          />
          <Button
            title="Neste"
            onPress={() => setIndex(c => c + 1 <= 4 ? c + 1 : 4)}
          />
        </>
      ),
    });
  }, [navigation]);

  return (
      <OrientationView landscapeStyles={{ flexDirection: 'row' }} portraitStyles={{ flexDirection: 'column' }}>
        <List onClick={onClick} data={data} />
        <Detail item={data[index]} />
      </OrientationView>
  );
}