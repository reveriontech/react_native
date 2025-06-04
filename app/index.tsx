import { Button } from '@/components/Button';
import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/sizes';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Intro() {
    const handleStartTimer = () => {
        router.push('/timepage');
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>
                    Welcome
                </Text>
                <Text style={styles.text}>
                     Focus Timer be more productive.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                 <Button
                    // style={styles.button}
                    onPress={handleStartTimer} 
                    title="Proceed" 
                    textColor={colors.white}
                    backgroundColor={colors.progressBar}
                    width={100}
                    />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightRed
    },
    textContainer: {    
        marginBottom: 20,
        paddingHorizontal: 20,
        gap: 5,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: fontSizes.xxxxl,
        fontWeight: 900,
        textAlign: 'center',
        color: colors.white,
    },  
    text: {
        fontSize: fontSizes.ssm,
        textAlign: 'center',
        color: colors.white,
        marginTop: 10,
    },
    buttonContainer: {
        paddingTop: 200,
        width: '100%',
        alignItems: 'center',
    },
   
});