import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, } from 'react-native'
import {TYPES as todo_types} from '../store/ducks/todolist/TodoList';
import {useSelector , useDispatch} from 'react-redux';

console.disableYellowBox = true
export default function Home(){

    const state = useSelector(state => state.todo_reducer )

    return(
        <View>
            <View style={{backgroundColor:'#e1e1e1'}}>
                <TextInput placeholder="adicionar tarefa"/>
            </View>
            <TouchableOpacity style={{backgroundColor:'#00000090', alignItems:'center'}}>
                <Text style={{color:'white'}}>Add</Text>
            </TouchableOpacity>

            <FlatList
                horizontal={false}
                data={state.todo_list}
                ItemSeparatorComponent={<View style={{ marginRight: 5}}/>}
                renderItem={(item) => renderItem(item)}

            />
        </View>
    )
}