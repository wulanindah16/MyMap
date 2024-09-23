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
    // Inisialisasi peta di elemen dengan ID "mapId"
    this.map = L.map('mapId').setView([51.505, -0.09], 10);
    
    // Tambahkan layer peta
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Definisikan basemap
    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    });

    const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/attribution">CARTO</a>'
    });

    // Tambahkan layer control untuk menampilkan opsi basemap
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Satellite Map': satelliteMap,
      'Dark Map': darkMap
    };

    // Set OpenStreetMap sebagai layer default
    openStreetMap.addTo(this.map);

    // Menambahkan layer control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    // Simbolisasi icon
    const customIcon = L.icon({
      iconUrl: 'assets/icon/pin.png', 
      iconSize: [25, 25]
    });

    // Tambahkan marker dengan popup
    const marker1 = L.marker([51.505, -0.09], { icon: customIcon }).addTo(this.map);
    marker1.bindPopup('Marker 1: Hello from this marker!').openPopup();

    const marker2 = L.marker([51.515, -0.1], { icon: customIcon }).addTo(this.map);
    marker2.bindPopup('Marker 2: Another marker here!');
  }
}
