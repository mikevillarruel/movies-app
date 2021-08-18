import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <ActivityIndicator color='green' size={100} />
            </View>
        )
    }

    return (
        <ScrollView>

            {/* Principal Carousel */}
            <View style={{ height: 440, marginTop: top + 20 }}>
                <Carousel
                    data={nowPlaying}
                    renderItem={({ item }: any) => <MoviePoster movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                />
            </View>

            {/* Popular Movies */}
            <HorizontalSlider title="Popular" movies={popular} />
            <HorizontalSlider title="Top Rated" movies={topRated} />
            <HorizontalSlider title="Upcoming" movies={upcoming} />

        </ScrollView>
    )
}
