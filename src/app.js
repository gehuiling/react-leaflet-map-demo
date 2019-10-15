import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import styles from '@/css/index.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const position = [49.8277, 24.0383];

class App extends Component {
    constructor() {
        super();
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
            maxZoom: 17,
            minZoom: 2,
            opacity: 0.8,
        }
    }
    render() {
        return (
            <Map center={position} zoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}>
                <TileLayer url='https://{s}.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmFuZmFuMDEiLCJhIjoiY2l3enBpcXZpMDBrMjJ1cWh3ZXM2Nm1qdyJ9.zJaMthXYv3M3h1UF1c31eQ'
                    opacity={this.state.opacity}
                />
                <MarkerClusterGroup>
                    <Marker position={[49.8196, 24.0297]} />
                    <Marker position={[49.8180, 24.0122]} />
                    <Marker position={[49.8174, 24.0901]} />
                    <Marker position={[49.8172, 24.0911]} />
                    <Marker position={[49.8170, 24.0902]} />

                </MarkerClusterGroup>
            </Map>
        );
    }
}

export default App;