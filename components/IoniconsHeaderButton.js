import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from 'react-native-vector-icons';

import Colors from '../constants/Colors';

const IoniconsHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      {...props}
      color={Platform.OS === 'android' ? 'white' : Colors.iHeader}
    />
  );
};

// export default function UsageWithIcons({ navigation }) {
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       // in your app, extract the arrow function into a separate component
//       // to avoid creating a new one every time
//       headerRight: () => (
//         <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
//           <Item
//             title='search'
//             iconName='ios-search'
//             onPress={() => alert('search')}
//           />
//           <ReusableItem onPress={() => alert('Edit')} />
//           <OverflowMenu
//             style={{ marginHorizontal: 10 }}
//             OverflowIcon={<Ionicons name='ios-more' size={23} color='blue' />}>
//             <HiddenItem title='hidden1' onPress={() => alert('hidden1')} />
//             <ReusableHiddenItem onPress={() => alert('hidden2')} />
//           </OverflowMenu>
//         </HeaderButtons>
//       ),
//     });
//   }, [navigation]);
//   return <Text style={{ flex: 1, margin: 20 }}>demo!</Text>;
// }

export default IoniconsHeaderButton;
