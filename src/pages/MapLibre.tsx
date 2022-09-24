// component using MapLibre GL
import { Box } from '@mui/material'
import { Style } from 'mapbox-gl'
import maplibregl from 'maplibre-gl'
import React from 'react'
import Map, { FullscreenControl, GeolocateControl, Layer, NavigationControl, ScaleControl, Source } from 'react-map-gl'

import { BaseLayout } from '../components/layouts/BaseLayout'

import 'maplibre-gl/dist/maplibre-gl.css'

// https://codepen.io/bothness/pen/ExgwzEG
const style: Style = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap Contributors',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm', // This must match the source key above
    },
  ],
  center: [139.839478, 35.652832], // Tokyo
  zoom: 4,
}

const geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
  type: 'FeatureCollection',
  features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [139.839478, 35.652832] }, properties: {} }],
}

const layerStyle = {
  id: 'point',
  type: 'circle' as const,
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
}

export const MapLibre: React.FC = _props => {
  // map.addControl(new maplibregl.NavigationControl())

  // https://github.com/maplibre/awesome-maplibre
  // https://visgl.github.io/react-map-gl/docs/get-started/get-started

  return (
    <BaseLayout>
      <Box height="100vh">
        {/* <Map mapLib={maplibregl} mapStyle="https://demotiles.maplibre.org/style.json" /> */}
        <Map mapLib={maplibregl} mapStyle={style}>
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
          <FullscreenControl />
          <GeolocateControl />
          <NavigationControl visualizePitch={true} />
          <ScaleControl />
        </Map>
      </Box>
    </BaseLayout>
  )
}
