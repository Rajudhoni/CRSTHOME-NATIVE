/* eslint-disable */

import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const ListItem = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (

      <View
        style={{
          
          flexDirection: 'row',
          justifyContent: 'center',
          
        
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Entypo  onPress={openMenu} name="dots-three-vertical" size={24}  />}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
       </View>
    
  );
};

export default ListItem;