import { Button } from '@/components/Button';
import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/sizes';
import { router } from 'expo-router';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export default function Intro() {
    const [loading, setLoading] = React.useState(false);

    const handleStartTimer = async () => {

        // This is for loading 
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/timepage');
        } catch (error) {
            console.error('Navigation error:', error);
        } finally {
            setLoading(false);
        }
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
                {loading ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size={fontSizes.xxl} color="#0000ff" />
                    </View>
                    ) : (
                    <Button
                        onPress={handleStartTimer} 
                        title="Proceed" 
                        textColor={colors.white}
                        backgroundColor={colors.progressBar}
                        width={100}
                   />
                )}
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
        marginBottom: 300,
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
        position: 'absolute',
        bottom: '20%',
        width: '100%',
        alignItems: 'center',
    },
    loaderContainer: {
        width: 100, 
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
});