const Profiles=[
  {
  "id" : "1",
  "name" : "Peter Parker",
  "src" : require('../assets/user1.png'),
  "age":"70",
},
{
"id" : "2",
"name" : "Barack Obama",
"src" : require('../assets/user2.png'),
"age":"19",
},
{
"id" : "3",
"name" : "Hilary Clinton",
"src" : require('../assets/user3.png'),
"age":"50",
},
]
export default Profiles;

import Profiles from './ProfilesDB.js';

<FlatList
		data={Profiles}
		keyExtractor={(item, index) => item.id}
		renderItem={({item}) => <View>
	                             <Image source={item.src} />
	                             <Text>{item.name}</Text>
                            </View>
            }
/>

case 'SELECT_TRAVEL_CLASS':
return{...state, selectedClass:action.item.type, selectedPrice:action.item.price,
                selectedTime:action.item.time, selectedPersons:action.item.persons,};
