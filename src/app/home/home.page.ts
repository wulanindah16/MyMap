import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  ionViewDidEnter() {
    // Inisialisasi peta
    this.map = L.map('mapId').setView([51.502, -0.15], 11);
    
    // Menambahkan layer peta
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Basemap
    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    });

    const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/attribution">CARTO</a>'
    });

    const lightGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    const darkGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    const esriWorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    const esriOceans = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    const esriStreets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    const esriNationalGeographic = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
    });

    // Layer control basemap
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Satellite Map': satelliteMap,
      'Dark Gray Canvas': darkGrayCanvas,
      'Light Gray Canvas': lightGrayCanvas,
      'Satellite': esriWorldImagery,
      'Topographic': esriWorldTopoMap,
      'Oceans': esriOceans,
      'Streets': esriStreets,
      'National Geographic': esriNationalGeographic
    };

    // Mengatur default basemap
    openStreetMap.addTo(this.map);

    // Menambahkan layer control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    // Simbolisasi icon
    const customIcon = L.icon({
      iconUrl: 'assets/icon/park.png', 
      iconSize: [25, 25]
    });

    // Marker Point dan Popup
    const markerData: { coords: L.LatLngTuple, popup: string }[] = [
      { coords: [51.5039, -0.143], popup: '<h5 style="text-align: center;">Green Park</h5><img src="assets/images/Green-Park.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' }, 
      { coords: [51.4794, -0.156], popup: '<h5 style="text-align: center;">Battersea Park</h5><img src="assets/images/Battersea-Park.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.4846, -0.162], popup: '<h5 style="text-align: center;">Chelsea Physic Garden</h5><img src="assets/images/Chelsea-Physic-Garden.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.5313, -0.156], popup: '<h5 style="text-align: center;">Regents Park</h5><img src="assets/images/Regents-Park-.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.5076, -0.178], popup: '<h5 style="text-align: center;">Kensington Gardens</h5><img src="assets/images/Kensington-Gardens-.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.5075, -0.164], popup: '<h5 style="text-align: center;">Hyde Park</h5><img src="assets/images/hyde-park.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.5611, -0.163], popup: '<h5 style="text-align: center;">Hampstead Head</h5><img src="assets/images/Hampstead-Heath.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.4415, -0.274], popup: '<h5 style="text-align: center;">Richmond Park</h5><img src="assets/images/richmond.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.4772, 0.0016], popup: '<h5 style="text-align: center;">Greenwich Park</h5><img src="assets/images/greenwich.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' },
      { coords: [51.5032, -0.134], popup: '<h5 style="text-align: center;">St James Park</h5><img src="assets/images/St-James-Park.jpg" width="150" height="100" style="display: block; margin: 0 auto;" />' }
    ];

    markerData.forEach((data, index) => {
      const marker = L.marker(data.coords, { icon: customIcon }).addTo(this.map);
      marker.bindPopup(data.popup);
    });
  }
}
