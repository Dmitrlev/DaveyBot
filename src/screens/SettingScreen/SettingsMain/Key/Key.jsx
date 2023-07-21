import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ModalSettings} from "../../../../components/ModalWindows/ModalSettings/ModalSettings";
import {KeyChange} from "./KeyChange";
import {setKey} from "../../../../store/reducers/setting/setting";

export const Key = ({nameItem}) => {

  const dispatch = useDispatch();
  const {key, primaryColor, fontSize} = useSelector(state => state.setting.settings);

  const [show, setShow] = useState(false);
  const [newKey, setNewKey] = useState('');

  const onSave = () => {
    dispatch(setKey(newKey));
    setNewKey('')
    setShow(false);
  };

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Text style={nameItem}>{`Текущий (${key.toString().slice(0, 3)} ... ${key.toString().slice(-4)})`}</Text>
      <TouchableOpacity
        style={{...styles.btnChange, backgroundColor: primaryColor}}
        onPress={() => setShow(true)}
      >
        <Text style={{color: 'white',fontWeight: 800, fontSize: fontSize * 0.7}}>изм.</Text>
      </TouchableOpacity>
      <ModalSettings
        callback={() => onSave()}
        name={'Добавить новый Key'}
        show={show}
        setShow={setShow}
        Component={KeyChange}
        state={{
          setNewKey: setNewKey,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  btnChange: {
    borderRadius: 10,
    backgroundColor: 'red',
    padding: 10,
    marginRight: 0,
    marginLeft: 'auto'
  },
})
