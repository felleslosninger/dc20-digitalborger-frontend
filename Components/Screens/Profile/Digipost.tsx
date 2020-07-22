import * as React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { ScrollView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Mail from "./Mail";
import { getMail } from "../../ServerCommunications/Services/Digipost";
import { retrieveData } from "../../Storage";
import { useState, useEffect } from "react";

const post = [
  {
    sender: "Digitaliseringsdirektoratet",
    subject: "Signert arbeidsavtale",
    date: "15.05.2020",
    content:
      "Sunt enim id consequat nulla magna ad commodo amet. Pariatur aliquip laborum sint occaecat fugiat do esse nulla incididunt commodo ipsum aliquip.",
  },
  {
    sender: "KLP",
    subject: "Endret pensjonsopptjening",
    date: "28.10.2019",
    content:
      "Officia et amet ea culpa. Tempor aliquip amet voluptate culpa minim. Reprehenderit magna pariatur aliquip laboris laborum fugiat incididunt Lorem consequat laborum mollit non irure cupidatat.",
  },
];

export default function Digipost({ navigation }) {
  const [data, setData] = useState(Array);
  const Stack = createStackNavigator();

  useEffect(() => {
    const getData = async () => {
      const pid: any = await retrieveData("pid").catch((err) =>
        console.log(err)
      );
      const data = await getMail(pid);
      setData(data);
    };
    getData();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Innboks</Text>
      {data.map((mail, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Mail", {
              sender: mail.sender,
              subject: mail.subject,
              date: mail.date,
              content: mail.content,
            })
          }
          key={index}
          style={styles.container}
        >
          <View style={styles.firstRow}>
            <Text style={styles.sender}>{mail.sender}</Text>
            <Text style={styles.date}>{mail.date}</Text>
            <View style={styles.icon}>
              <Icon name="right" color="grey"></Icon>
            </View>
          </View>
          <Text style={styles.subject}>{mail.subject}</Text>
          <Text numberOfLines={3} style={styles.content}>
            {mail.content}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    padding: 18,
  },
  container: {
    borderTopColor: "grey",
    borderWidth: 0,
    borderTopWidth: 0.5,
    height: 100,
    width: "90%",
    alignSelf: "center",
  },
  sender: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 14,
    paddingTop: 10,
  },
  subject: {
    fontFamily: "Helvetica",
    fontSize: 14,
  },
  date: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "grey",
    paddingTop: 10,
    position: "absolute",
    right: 20,
  },
  icon: {
    position: "absolute",
    right: 0,
    paddingTop: 12,
  },
  firstRow: {
    flexDirection: "row",
    width: "100%",
  },
  content: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "grey",
  },
});
