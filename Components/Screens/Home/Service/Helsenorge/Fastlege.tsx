import * as React from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native";
import NotificationBar from "./NotificationBar";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import {useEffect, useState} from "react";
import {retrieveData} from "../../../../Storage";
import {getDoctorData} from "../../../../ServerCommunications/Services/HelseNorgeService";
const  doctor = [
    {
        name: "Lars Breheim",
        office: "Sogndal legekontor",
    },
];


export default function Fastlege() {

    const [legeData, setLege] = useState(
        { name: "", office: "", phone: "" },
    );

    useEffect(() => {
        (async () => {
            const pid: number = await retrieveData("pid");
            let result = await getDoctorData(pid);
            setLege(result);
        })();

    }, []);



    return (
        <View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            WebBrowser.openBrowserAsync(
                                "https://tjenester.helsenorge.no/bytte-fastlege?"
                            )
                        }
                    >
                        <Icon name="pen" size={20} ></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.firstTextContainer}>
                            <Text style={{ fontWeight: "bold", fontSize: 17}}>Din fastlege:</Text>
                            <Text style={{fontSize: 16}}>{legeData.name}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.secondTextContainer}>
                            <Text style={{ fontWeight: "bold", fontSize: 17}}>Instutisjon:</Text>
                            <Text style={{fontSize: 16}}>{legeData.office}</Text>
                </View>
            </View>
            <TouchableOpacity
                containerStyle={styles.linkContainer}
                onPress={() =>
                    WebBrowser.openBrowserAsync(
                        "https://tjenester.helsenorge.no/Fastlegen"
                    )
                }
            >
                <View style={styles.linkContainer}>
                    <Text style={{ fontWeight: "bold",fontSize: 17}}> Mer om din fastlege </Text>
                    <Icon name="long-arrow-alt-right" size={15}></Icon>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 15,
        top: 10,
        borderBottomWidth: 1,
        borderColor: "#E1E1E1",
    },
    firstTextContainer: {
        right: 19,
        marginTop: 5,
    },
    secondTextContainer:{
        marginTop: 10,
    },
    iconContainer:{
        left: 320,
        marginTop: 10,
    },
    linkContainer:{
        flexDirection: "row",
        marginTop: 20,
        right: 1,
    },
});
