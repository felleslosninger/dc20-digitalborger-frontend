import * as React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    SafeAreaView,
    StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import {Component, useEffect, useState} from "react";
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Fontisto from 'react-native-vector-icons/Fontisto';

// @ts-ignore
import Octicons from 'react-native-vector-icons/Octicons';

import Accordion from "react-native-collapsible/Accordion";
import {bInterpolatePath, mix, useTimingTransition, useTransition} from "react-native-redash";
import Animated, {interpolate} from "react-native-reanimated";
import {ListItem} from "./ListItem";


const VIGO  = [
    {
        title: 'karakterer',
        icon: {
            type: "Fontisto",
            name: "bar-chart"
        },
        content: {
            description: "description"
        }
    },
    {
        title: 'Fravær',
        icon: {
            type: "FontAwesome",
            name: "calendar"
        },
        content: {
            description: "test"
        }
    },
    {
        title: 'Søk skole',
        icon: {
            type: "MaterialIcons",
            name: "school"
        },
        content: {
            description: "description"
        }
    },
];

export function Collapsible() {
    const [selectedIndex, setSelectedIndex] = useState(0);


    useEffect(() => {
        console.log("TRYKKET PÅ", selectedIndex);
    }, [selectedIndex])

    return(
        <View>

            {VIGO.map((item, index) =>
                <TouchableWithoutFeedback onPress={() => setSelectedIndex(index)}>
                    <ListItem key={index} containerHeight={500} title={item.title} parentCallback={(item) => {setSelectedIndex(index); console.log(item)}} pressed={(selectedIndex === index) ? true : false}>

                        <View style={{padding: 10, flex: 1}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                            </View>

                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                            </View>

                        </View>
                    </ListItem>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
}
