import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class Searchengine extends Component {
  render() {
    return (
      <Container >
        <Content style={{paddingTop: 30}}>
          <Item rounded>
            <Input placeholder='Search Beer' style={{textAlign: 'center'}}
             returnKeyType="search"
             onChangeText={this.props.onChangeText}
             onSubmitEditing={this.props.beerSearch}
              />
          </Item>
        </Content>
      </Container>
    );
  }
}