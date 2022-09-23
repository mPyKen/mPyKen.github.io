// component using MapLibre GL
import maplibregl from 'maplibre-gl'
import React from 'react'
import Map from 'react-map-gl'

import { BaseLayout } from '../components/layouts/BaseLayout'

import 'maplibre-gl/dist/maplibre-gl.css'
import './MapLibre.css'

export const MapLibre: React.FC = _props => {
  return (
    <BaseLayout>
      <div className="Map">
        <Map mapLib={maplibregl} mapStyle="https://demotiles.maplibre.org/style.json" />
      </div>
    </BaseLayout>
  )
}
