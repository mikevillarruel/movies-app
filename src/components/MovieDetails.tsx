import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[],
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>

                    <Icon
                        name='star-outline'
                        color='grey'
                        size={16}
                    />
                    <Text> {movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(genre => genre.name).join(', ')}
                    </Text>

                </View>

                {/* Overview */}
                <Text style={styles.title}>
                    Overview
                </Text>

                <Text style={styles.description}>
                    {movieFull.overview}
                </Text>

                {/* Budget */}
                <Text style={styles.title}>
                    Budget
                </Text>

                <Text style={{
                    ...styles.description,
                    fontSize: 18
                }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>

            </View>

            {/* Casting */}
            <View style={{ marginTop: 10 }}>
                <Text style={{
                    ...styles.title,
                    marginHorizontal: 20,
                }}>
                    Cast
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 10,
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
    }
});