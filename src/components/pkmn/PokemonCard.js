import React, { Component } from 'react';

import styled from 'styled-components';
import speen from '../pkmn/pikachair.gif';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export default class PokemonCard extends Component {
state = {
  name: '',
  imageUrl: '',
  pokemonIndex: '',
  imageLoading: true,
  tooManyRequests: false,
};

async componentDidMount() {
  const {name, url} = this.props;
  const pokemonIndex = url.split("/")[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonIndex}.gif`;

  this.setState({
    name: name, 
    imageUrl: imageUrl,
    pokemonIndex: pokemonIndex,
  })
}

  render() {
    return (
      <div className='col-md-3 col-sm-6 mb-5'>
          <Card className="card">
            <h6 className="card-header">{this.state.pokemonIndex}</h6>
            {this.imageLoading ? (
                <img 
                 src={speen} 
                 style={{width: '5em', height: '5em'}} 
                 className="card-img-top rounded mx-auto d-block mt-2"
                 alt=""
                />
            ) : null}

              <Sprite 
                className="card-img-top rounded mx-auto mt-2"
                onLoad={() => this.setState({imageLoading: false})}
                onError={() => this.setState({tooManyRequests: true})}
                src={this.state.imageUrl}
                style={
                  this.state.tooManyRequests 
                    ? {display: "none"} 
                    : this.state.imageLoading 
                    ? null
                    : {display: 'block'}
                }
              />
              {this.state.tooManyRequests ? (<h6 className="mx-auto">
                <span className="badge badge-danger nt-2"></span>
              </h6>) : null}

            <div className="card-body">
              <h4 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(' ')
                  .map(
                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(' ')}
              </h4>

            </div>
          </Card>

      </div>
    )
  }
}
