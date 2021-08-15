import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovies } from '../hooks/useMovies';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { }

export const HomeScreen = ({ navigation }: Props) => {

    const { nowPlaying, isLoading } = useMovies();

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to DetailScreen"
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    )
}
