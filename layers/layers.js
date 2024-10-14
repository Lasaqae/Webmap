ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([17807251.271717, -1056619.341488, 17811278.633499, -1054141.644883]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_2 = new ol.layer.Tile({
            'title': 'Open Topo Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BingAerialMap_3 = new ol.layer.Tile({
            'title': 'Bing Aerial Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_GoogleSatelite_4 = new ol.layer.Tile({
            'title': 'Google Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MSelen_Noro_5 = new ol.format.GeoJSON();
var features_MSelen_Noro_5 = format_MSelen_Noro_5.readFeatures(json_MSelen_Noro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelen_Noro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelen_Noro_5.addFeatures(features_MSelen_Noro_5);
var lyr_MSelen_Noro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelen_Noro_5, 
                style: style_MSelen_Noro_5,
                popuplayertitle: "M-Selen_Noro",
                interactive: true,
                title: '<img src="styles/legend/MSelen_Noro_5.png" /> M-Selen_Noro'
            });
var format_MSelen_Munda_6 = new ol.format.GeoJSON();
var features_MSelen_Munda_6 = format_MSelen_Munda_6.readFeatures(json_MSelen_Munda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelen_Munda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelen_Munda_6.addFeatures(features_MSelen_Munda_6);
var lyr_MSelen_Munda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelen_Munda_6, 
                style: style_MSelen_Munda_6,
                popuplayertitle: "M-Selen_Munda",
                interactive: true,
                title: '<img src="styles/legend/MSelen_Munda_6.png" /> M-Selen_Munda'
            });
var format_BankofSouthPacific_Munda_7 = new ol.format.GeoJSON();
var features_BankofSouthPacific_Munda_7 = format_BankofSouthPacific_Munda_7.readFeatures(json_BankofSouthPacific_Munda_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacific_Munda_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacific_Munda_7.addFeatures(features_BankofSouthPacific_Munda_7);
var lyr_BankofSouthPacific_Munda_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacific_Munda_7, 
                style: style_BankofSouthPacific_Munda_7,
                popuplayertitle: "Bank of South Pacific_Munda",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacific_Munda_7.png" /> Bank of South Pacific_Munda'
            });
var format_ANZ_Munda_8 = new ol.format.GeoJSON();
var features_ANZ_Munda_8 = format_ANZ_Munda_8.readFeatures(json_ANZ_Munda_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZ_Munda_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZ_Munda_8.addFeatures(features_ANZ_Munda_8);
var lyr_ANZ_Munda_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZ_Munda_8, 
                style: style_ANZ_Munda_8,
                popuplayertitle: "ANZ_Munda",
                interactive: true,
                title: '<img src="styles/legend/ANZ_Munda_8.png" /> ANZ_Munda'
            });
var format_BankofSouthPacific_Gizo_9 = new ol.format.GeoJSON();
var features_BankofSouthPacific_Gizo_9 = format_BankofSouthPacific_Gizo_9.readFeatures(json_BankofSouthPacific_Gizo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacific_Gizo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacific_Gizo_9.addFeatures(features_BankofSouthPacific_Gizo_9);
var lyr_BankofSouthPacific_Gizo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacific_Gizo_9, 
                style: style_BankofSouthPacific_Gizo_9,
                popuplayertitle: "Bank of South Pacific_Gizo",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacific_Gizo_9.png" /> Bank of South Pacific_Gizo'
            });
var format_Ezipei_Gizo_10 = new ol.format.GeoJSON();
var features_Ezipei_Gizo_10 = format_Ezipei_Gizo_10.readFeatures(json_Ezipei_Gizo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ezipei_Gizo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ezipei_Gizo_10.addFeatures(features_Ezipei_Gizo_10);
var lyr_Ezipei_Gizo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ezipei_Gizo_10, 
                style: style_Ezipei_Gizo_10,
                popuplayertitle: "Ezipei_Gizo",
                interactive: true,
                title: '<img src="styles/legend/Ezipei_Gizo_10.png" /> Ezipei_Gizo'
            });
var format_MSelen_Gizo_11 = new ol.format.GeoJSON();
var features_MSelen_Gizo_11 = format_MSelen_Gizo_11.readFeatures(json_MSelen_Gizo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelen_Gizo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelen_Gizo_11.addFeatures(features_MSelen_Gizo_11);
var lyr_MSelen_Gizo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelen_Gizo_11, 
                style: style_MSelen_Gizo_11,
                popuplayertitle: "M-Selen_Gizo",
                interactive: true,
                title: '<img src="styles/legend/MSelen_Gizo_11.png" /> M-Selen_Gizo'
            });
var format_ANZ_Gizo_12 = new ol.format.GeoJSON();
var features_ANZ_Gizo_12 = format_ANZ_Gizo_12.readFeatures(json_ANZ_Gizo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZ_Gizo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZ_Gizo_12.addFeatures(features_ANZ_Gizo_12);
var lyr_ANZ_Gizo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZ_Gizo_12, 
                style: style_ANZ_Gizo_12,
                popuplayertitle: "ANZ_Gizo",
                interactive: true,
                title: '<img src="styles/legend/ANZ_Gizo_12.png" /> ANZ_Gizo'
            });
var format_ANZ_Honiara_13 = new ol.format.GeoJSON();
var features_ANZ_Honiara_13 = format_ANZ_Honiara_13.readFeatures(json_ANZ_Honiara_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZ_Honiara_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZ_Honiara_13.addFeatures(features_ANZ_Honiara_13);
var lyr_ANZ_Honiara_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZ_Honiara_13, 
                style: style_ANZ_Honiara_13,
                popuplayertitle: "ANZ_Honiara",
                interactive: true,
                title: '<img src="styles/legend/ANZ_Honiara_13.png" /> ANZ_Honiara'
            });
var format_BankofSouthPacific_Honiara_14 = new ol.format.GeoJSON();
var features_BankofSouthPacific_Honiara_14 = format_BankofSouthPacific_Honiara_14.readFeatures(json_BankofSouthPacific_Honiara_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacific_Honiara_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacific_Honiara_14.addFeatures(features_BankofSouthPacific_Honiara_14);
var lyr_BankofSouthPacific_Honiara_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacific_Honiara_14, 
                style: style_BankofSouthPacific_Honiara_14,
                popuplayertitle: "Bank of South Pacific_Honiara",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacific_Honiara_14.png" /> Bank of South Pacific_Honiara'
            });
var format_AelanDigital_15 = new ol.format.GeoJSON();
var features_AelanDigital_15 = format_AelanDigital_15.readFeatures(json_AelanDigital_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AelanDigital_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AelanDigital_15.addFeatures(features_AelanDigital_15);
var lyr_AelanDigital_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AelanDigital_15, 
                style: style_AelanDigital_15,
                popuplayertitle: "Aelan Digital",
                interactive: true,
                title: '<img src="styles/legend/AelanDigital_15.png" /> Aelan Digital'
            });
var format_BredBank_Honiara_16 = new ol.format.GeoJSON();
var features_BredBank_Honiara_16 = format_BredBank_Honiara_16.readFeatures(json_BredBank_Honiara_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBank_Honiara_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBank_Honiara_16.addFeatures(features_BredBank_Honiara_16);
var lyr_BredBank_Honiara_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBank_Honiara_16, 
                style: style_BredBank_Honiara_16,
                popuplayertitle: "BredBank_Honiara",
                interactive: true,
                title: '<img src="styles/legend/BredBank_Honiara_16.png" /> BredBank_Honiara'
            });
var format_MSelen_Honiara_17 = new ol.format.GeoJSON();
var features_MSelen_Honiara_17 = format_MSelen_Honiara_17.readFeatures(json_MSelen_Honiara_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelen_Honiara_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelen_Honiara_17.addFeatures(features_MSelen_Honiara_17);
var lyr_MSelen_Honiara_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelen_Honiara_17, 
                style: style_MSelen_Honiara_17,
                popuplayertitle: "M-Selen_Honiara",
                interactive: true,
                title: '<img src="styles/legend/MSelen_Honiara_17.png" /> M-Selen_Honiara'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenTopoMap_2.setVisible(true);lyr_BingAerialMap_3.setVisible(true);lyr_GoogleSatelite_4.setVisible(true);lyr_MSelen_Noro_5.setVisible(true);lyr_MSelen_Munda_6.setVisible(true);lyr_BankofSouthPacific_Munda_7.setVisible(true);lyr_ANZ_Munda_8.setVisible(true);lyr_BankofSouthPacific_Gizo_9.setVisible(true);lyr_Ezipei_Gizo_10.setVisible(true);lyr_MSelen_Gizo_11.setVisible(true);lyr_ANZ_Gizo_12.setVisible(true);lyr_ANZ_Honiara_13.setVisible(true);lyr_BankofSouthPacific_Honiara_14.setVisible(true);lyr_AelanDigital_15.setVisible(true);lyr_BredBank_Honiara_16.setVisible(true);lyr_MSelen_Honiara_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMaps_1,lyr_OpenTopoMap_2,lyr_BingAerialMap_3,lyr_GoogleSatelite_4,lyr_MSelen_Noro_5,lyr_MSelen_Munda_6,lyr_BankofSouthPacific_Munda_7,lyr_ANZ_Munda_8,lyr_BankofSouthPacific_Gizo_9,lyr_Ezipei_Gizo_10,lyr_MSelen_Gizo_11,lyr_ANZ_Gizo_12,lyr_ANZ_Honiara_13,lyr_BankofSouthPacific_Honiara_14,lyr_AelanDigital_15,lyr_BredBank_Honiara_16,lyr_MSelen_Honiara_17];
lyr_MSelen_Noro_5.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelen_Munda_6.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacific_Munda_7.set('fieldAliases', {'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZ_Munda_8.set('fieldAliases', {'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacific_Gizo_9.set('fieldAliases', {'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Ezipei_Gizo_10.set('fieldAliases', {'Agent Name': 'Agent Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelen_Gizo_11.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZ_Gizo_12.set('fieldAliases', {'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZ_Honiara_13.set('fieldAliases', {'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacific_Honiara_14.set('fieldAliases', {'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_AelanDigital_15.set('fieldAliases', {'Name': 'Name', 'Status': 'Status', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBank_Honiara_16.set('fieldAliases', {'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MSelen_Honiara_17.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelen_Noro_5.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelen_Munda_6.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacific_Munda_7.set('fieldImages', {'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'field_3': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZ_Munda_8.set('fieldImages', {'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacific_Gizo_9.set('fieldImages', {'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Ezipei_Gizo_10.set('fieldImages', {'Agent Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelen_Gizo_11.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZ_Gizo_12.set('fieldImages', {'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZ_Honiara_13.set('fieldImages', {'ANZ   BRANCHES': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacific_Honiara_14.set('fieldImages', {'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_AelanDigital_15.set('fieldImages', {'Name': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BredBank_Honiara_16.set('fieldImages', {'PROVINCES': 'TextEdit', 'Bred    BRANCHES': 'TextEdit', 'Type of Branche': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_MSelen_Honiara_17.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelen_Noro_5.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MSelen_Munda_6.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_BankofSouthPacific_Munda_7.set('fieldLabels', {'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'field_3': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_ANZ_Munda_8.set('fieldLabels', {'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_BankofSouthPacific_Gizo_9.set('fieldLabels', {'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Ezipei_Gizo_10.set('fieldLabels', {'Agent Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MSelen_Gizo_11.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_ANZ_Gizo_12.set('fieldLabels', {'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_ANZ_Honiara_13.set('fieldLabels', {'ANZ   BRANCHES': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_BankofSouthPacific_Honiara_14.set('fieldLabels', {'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', });
lyr_AelanDigital_15.set('fieldLabels', {'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_BredBank_Honiara_16.set('fieldLabels', {'PROVINCES': 'hidden field', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', });
lyr_MSelen_Honiara_17.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MSelen_Honiara_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});