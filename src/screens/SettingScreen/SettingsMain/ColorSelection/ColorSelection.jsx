import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ModalSettings} from "../../../../components/ModalWindows/ModalSettings/ModalSettings";
import {ChangeColorSelection} from "./ChangeColorSelection";
import {setPrimaryColor} from "../../../../store/reducers/setting/setting";

export const ColorSelection = ({nameItem = {}}) => {

  const dispatch = useDispatch();

  const {
    primaryColor,
    fontSize
  } = useSelector(state => state.setting.settings);

  const [color, setColor] = useState(primaryColor);
  const [show, setShow] = useState(false);

  const onSave = () => {
    dispatch(setPrimaryColor(color))
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={nameItem}>{`Выбор главного цвета`}</Text>
      <TouchableOpacity
        style={{...styles.btnChange, backgroundColor: primaryColor}}
        onPress={() => setShow(true)}
      >
        <Text style={{color: 'white',fontWeight: 800, fontSize: fontSize * 0.7}}>изм.</Text>
      </TouchableOpacity>
      <ModalSettings
        callback={() => onSave()}
        name={'Выбор главного цвета'}
        show={show}
        setShow={setShow}
        Component={ChangeColorSelection}
        state={{
          color: color,
          setColor: setColor,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  input: {
    textAlign: 'center',
    width: 70,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(88,96,105,0.24)',
    alignSelf: "flex-end"
  },
  btnChange: {
    borderRadius: 10,
    backgroundColor: 'red',
    padding: 10,
  }
})