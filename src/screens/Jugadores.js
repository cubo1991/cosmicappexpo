import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJugadores } from '../Redux/actions/getJugadores';
import { fetchRanking } from '../Redux/actions/getRanking';
import { fetchAliens } from '../Redux/actions/getAliens';
import { Text, View } from 'react-native';


export const Jugadores = () => {
    let dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchJugadores())
      dispatch(fetchRanking())
      dispatch(fetchAliens())
       
    }, []);
    let jugadores = useSelector((state) => state.jugadores)
    let rankingJugadores = useSelector((state) => state.rankingJugadores)
    let aliens = useSelector((state) => state.aliens)
    console.log(jugadores)
    console.log(rankingJugadores)
    console.log(aliens)

  return (
    <View>
      <Text>
      Jugadores2
      </Text>
      </View>
   
  )
}
