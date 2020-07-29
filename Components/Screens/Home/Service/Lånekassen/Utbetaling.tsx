import * as React from 'react';
import {Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as WebBrowser from "expo-web-browser";


const Betalinger = [
    {
        date:'16.04.2020',
        occurrence:'Utbetaling',
        sum: 11020,
    },
    {
        date:'15.03.2020',
        occurrence:'Utbetaling',
        sum: 8265,
    },
    {
        date:'14.02.2020',
        occurrence:'Utbetaling',
        sum: 8265,
    },
    {
        date:'14.01.2020',
        occurrence:'Utbetaling',
        sum: 8265,
    },
    {
        date:'14.12.2019',
        occurrence:'Utbetaling',
        sum: 8200,
    },

    ];

export default function Utbetaling() {

    return(
        <SafeAreaView>
            <View style = {styles.titleHeader}>
                <Text style={styles.titleText}>Dato</Text>
                <Text style={styles.titleText}>Hendelse</Text>
                <Text style={styles.titleText}>Beløp</Text>
            </View>
            <ScrollView>
                {Betalinger.map((item, index) => (
                    <View  key = {index} style={styles.listItems}>
                        <Text style={styles.ItemText}>{item.date}</Text>
                        <Text style={styles.ItemText}>{item.occurrence}</Text>
                        <Text style={styles.ItemText}>{item.sum + " kr"}</Text>
                    </View>
                ))}
            </ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.LinkContainer}
                        onPress={() =>
                            WebBrowser.openBrowserAsync("https://lanekassen.no/nb-NO/verktoy-og-frister/Frister-i-Lanekassen/utbetaling-av-utdanningsstotte/")
                        }
                    >
                        <FontAwesome key={0} name={"arrow-circle-right"} size={20} color = "#4d264f" />
                        <Text style={styles.linkText}>Til dine sider</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    titleHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "15%",
        width: "100%",
        backgroundColor: '#4d264f',
        bottom: 10,
    },
    titleText: {
        color: "white",
        fontSize: 16,
        flex: 1/3,
        textAlign: 'center'
    },
    listItems: {
        flexDirection: "row",
        borderBottomWidth: 1,
        justifyContent: "space-around",
        marginBottom: 10,
        flex: 1,
    },
    ItemText: {
        fontSize: 15,
        marginBottom: 10,
        flex: 1/3,
        textAlign: 'center'
    },
    LinkContainer: {
        flexDirection: "row",
        top: 10,
        left: 15,
    },
    linkText: {
        fontSize: 16,
        marginLeft: 10,
    },

})