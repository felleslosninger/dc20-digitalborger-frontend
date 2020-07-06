import * as React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from "expo-auth-session";
import {makeRedirectUri, useAuthRequest} from "expo-auth-session";
import * as Linking from 'expo-linking'

/*
1. If the app is already open, the app is foregrounded and a Linking event is fired
You can handle these events with ------> Linking.addEventListener('url', callback).

2. If the app is not already open, it is opened and the url is passed in as the initialURL
You can handle these events with  -------> Linking.getInitialURL -- it returns a Promise that resolves to the url, if there is one.
 */



WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/authorize',
    tokenEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/token',
    revocationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/revoke","jwks_uri":"https://oidc-ver1.difi.no/idporten-oidc-provider/jwk',
};

const useProxy = true;

const redirectUri = AuthSession.makeRedirectUri({
    native: 'digitalborger://redirect',
    useProxy,
});
export default function Login({navigation}) {
    //const discovery = AuthSession.useAutoDiscovery('https://oidc-ver1.difi.no/idporten-oidc-provider/.well-known/openid-configuration');

    const discovery = {
        authorizationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/authorize',
        tokenEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/token',
        revocationEndpoint: 'https://oidc-ver1.difi.no/idporten-oidc-provider/revoke","jwks_uri":"https://oidc-ver1.difi.no/idporten-oidc-provider/jwk',
    };

    // Create and load an auth request
    const [request, result, promptAsync] = AuthSession.useAuthRequest(
        {
            clientId: 'digdircamp_oidc',
            scopes: ["openid profile"],
            responseType: "code",
            usePKCE: true,
            state: "abcd", //randome
            codeChallenge: "1234", //randome
            redirectUri,
        },
        discovery
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Login!" disabled={!request} onPress={() => promptAsync({ useProxy })} />
            {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
        </View>
    );
}


const styles = StyleSheet.create({

});
