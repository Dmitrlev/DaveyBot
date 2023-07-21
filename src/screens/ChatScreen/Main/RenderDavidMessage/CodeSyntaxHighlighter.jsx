import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/styles/hljs';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Clipboard } from 'react-native';
import {useTheme} from "../../../../hooks/useTheme";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useState} from "react";

export const CodeSyntaxHighlighter = ({item}) => {

  const {theme} = useTheme();
  const wordsIndex = item.content.indexOf('\n');
  const firstWord = item.content.substring(0, wordsIndex);
  const remainingWords = item.content.substring(wordsIndex + 1);

  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setString(String(remainingWords));
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };

  return (
    <>
      <View style={[styles.wrapperTop, theme && styles.wrapperTopDark]}>
        <Text style={styles.leftText}>{firstWord}</Text>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={copyToClipboard}
        >
          {copyState ?
            <MaterialIcons
              name="done"
              size={15}
              color="#586069"
            />
            :
            <Ionicons
              name="copy-outline"
              size={15}
            color='#586069'
           />
          }
          <Text>{copyState ? "Copied" : 'Copy code'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperBottom}>
        <SyntaxHighlighter
          customStyle={{ padding: 0, backgroundColor: '#f6f8fa' }}
          language={firstWord}
          style={arduinoLight}
        >
          {remainingWords}
        </SyntaxHighlighter>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e9ecef',
  },
  wrapperTopDark: {
    backgroundColor: '#3a3a3a',
  },
  wrapperBottom: {
    backgroundColor: '#f6f8fa',
    paddingTop: 20,
    padding: 10,
  },
  leftText: {
    fontWeight: 500,
    opacity: 0.4,
    alignSelf: 'flex-start',
  },
  rightButton: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'flex-end',
  },
})