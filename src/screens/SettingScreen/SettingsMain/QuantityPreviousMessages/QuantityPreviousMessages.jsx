import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ModalSettings} from "../../../../components/ModalWindows/ModalSettings/ModalSettings";
import {ChangeQuantityPreviousMessages} from "./СhangeQuantityPreviousMessages";
import {setQuantityPreviousMessages} from "../../../../store/reducers/setting/setting";

export const QuantityPreviousMessages = ({nameItem}) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const {
    quantityPreviousMessages,
    quantityPreviousMessagesAll,
    primaryColor,
    fontSize
  } = useSelector(state => state.setting.settings);

  const [number, setNumber] = useState(String(quantityPreviousMessages));
  const [checked, setChecked] = useState(quantityPreviousMessagesAll);

  const onSave = () => {
    dispatch(setQuantityPreviousMessages({
      quantityPreviousMessages: number,
      quantityPreviousMessagesAll: checked,
    }));
    setShow(false);
  };


  return (
    <View style={styles.container}>
      <Text style={nameItem}>{`Учитывание предыдущих\nсообщений (${!quantityPreviousMessagesAll ? quantityPreviousMessages : 'все'})`}</Text>
      <TouchableOpacity
        style={{...styles.btnChange, backgroundColor: primaryColor}}
        onPress={() => setShow(true)}
      >
        <Text style={{color: 'white',fontWeight: 800, fontSize: fontSize * 0.7}}>изм.</Text>
      </TouchableOpacity>
      <ModalSettings
        callback={() => onSave()}
        name={'Учитывание предыдущих сообщений'}
        show={show}
        setShow={setShow}
        Component={ChangeQuantityPreviousMessages}
        state={{
          number,
          checked,
          setNumber,
          setChecked,
        }}
      />
    </View>
  );
};

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