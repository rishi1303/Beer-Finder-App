import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Searchengine from '../Searchengine';
import {Container, Content } from 'native-base';



export class Searchscreen extends Component {
    state= {
        searchBeer: '',
        beerData: []
    }
    beerSearch = () => {
        alert('Search for beer')
    }



    render() {
        return (
            <Container>
                <Searchengine
                value={this.state.searchBeer}
                onChangeText={(searchBeer)=> this.setState({searchBeer})}
                beerSearch= {this.beerSearch}
                />
                <Content>

                </Content>
            </Container>
        )
    }
}

export default Searchscreen;
