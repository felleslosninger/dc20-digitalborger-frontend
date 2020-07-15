import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import * as WebBrowser from 'expo-web-browser';

export default function School() {
  const [schools, setSchools] = useState(Array);
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("");


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      setStatus(status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location= await Location.getCurrentPositionAsync({});
      setLocation(location); // Trenger egentlig ikke lagre location

      let result = await axios(
        "http://feat01-drupal8.dmz.local/dib/school/" +
          location.coords.longitude +
          "/" +
          location.coords.latitude +
          "/5"
      );
      setSchools(result.data);
    })();
  }, []);

  if (status == "granted") {
    return (
      <View>
        {schools.map((school, index) => (
          <View key={index} style={styles.container}>
            <Icon name="office-building" size={40}></Icon>
            <Text style={styles.name}>{school.Skolenavn}</Text>
            <Text style={styles.distance}>{school.Distanse + "km"}</Text>
            <TouchableOpacity
              style={styles.link}
              onPress={() => WebBrowser.openBrowserAsync("http://" + school.Webside)}
            >
              <Text>Gå til</Text>
              <View style={styles.icon}>
                <Icon name="arrow-right-circle-outline" size={20}></Icon>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View>
        <Text>{errorMsg}</Text>
        <Text>For å se skoler i ditt nærområde, skru på stedsposisjon i instillinger.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    width: 140,
    marginRight: 40,
  },
  distance: {
    width: 40,
  },
  link: {
    flexDirection: "row",
    marginLeft: 60,
  },
  icon: {
    marginLeft: 10,
  },
});
