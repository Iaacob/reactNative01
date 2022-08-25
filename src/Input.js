import {React, useState} from "react";
import { View, Button, Text } from 'react-native';
import { TextInput } from "react-native-web";

export default function Input(){
    const [showText, setshowText] = useState("");
    const [text, setText] = useState("");
    return (
        <>
        <View>
            <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="meté un textito acá"
            />
        </View>
        <View>
            <Button
            title="Enviar"
            color="#f194ff"
            onPress={() => { setshowText(text); setText("") }}
            />
            <Text>
                {showText}
            </Text>
        </View>
        </>
    );
}

const styles ={
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  };
