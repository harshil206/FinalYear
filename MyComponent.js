import * as React from 'react';
import { BottomNavigation, Text, Button, View } from 'react-native-paper';


import MusicRoute from './MusicRoute';
import Profile from './Screen/Profile';
// const MusicRoute = () => {
//     return(
// <View>
// <Text>Music</Text>
// <Button title="music" />
// </View>
//     );
// };

const AlbumsRoute = () => <Text>Albums</Text>;
const Customs = () => <Text>Customs</Text>;
const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'FEED', icon: 'home' },
    { key: 'albums', title: 'TRENDING', icon: 'fire' },
    { key: 'Customs', title: 'CUSTOMS', icon: 'plus' },
    { key: 'account', title: 'PROFILE', icon: 'account' },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    account: Profile,
    Customs: Customs
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      keyboardHidesNavigationBar={true}
      barStyle={{ backgroundColor: 'pink' }}

    />
  );
};

export default MyComponent;