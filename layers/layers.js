ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([911198.050494, 6232717.107916, 913638.567160, 6234416.791249]);
var wms_layers = [];

var format_Area_0 = new ol.format.GeoJSON();
var features_Area_0 = format_Area_0.readFeatures(json_Area_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Area_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_0.addFeatures(features_Area_0);
var lyr_Area_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_0, 
                style: style_Area_0,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_0_0.png" /> Mer<br />\
    <img src="styles/legend/Area_0_1.png" /> Terre<br />' });
var format_Building_1 = new ol.format.GeoJSON();
var features_Building_1 = format_Building_1.readFeatures(json_Building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_1.addFeatures(features_Building_1);
var lyr_Building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_1, 
                style: style_Building_1,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_1.png" /> Building'
            });
var format_Roadssite_2 = new ol.format.GeoJSON();
var features_Roadssite_2 = format_Roadssite_2.readFeatures(json_Roadssite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Roadssite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadssite_2.addFeatures(features_Roadssite_2);
var lyr_Roadssite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadssite_2, 
                style: style_Roadssite_2,
                popuplayertitle: 'Roads site',
                interactive: false,
                title: '<img src="styles/legend/Roadssite_2.png" /> Roads site'
            });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.685000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Exail_4 = new ol.format.GeoJSON();
var features_Exail_4 = format_Exail_4.readFeatures(json_Exail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Exail_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exail_4.addFeatures(features_Exail_4);
var lyr_Exail_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exail_4, 
                style: style_Exail_4,
                popuplayertitle: 'Exail',
                interactive: true,
                title: '<img src="styles/legend/Exail_4.png" /> Exail'
            });
var format_Exail_5 = new ol.format.GeoJSON();
var features_Exail_5 = format_Exail_5.readFeatures(json_Exail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Exail_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exail_5.addFeatures(features_Exail_5);
var lyr_Exail_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exail_5, 
                style: style_Exail_5,
                popuplayertitle: 'Exail',
                interactive: true,
                title: '<img src="styles/legend/Exail_5.png" /> Exail'
            });
var format_SafeHarbor_6 = new ol.format.GeoJSON();
var features_SafeHarbor_6 = format_SafeHarbor_6.readFeatures(json_SafeHarbor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_SafeHarbor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SafeHarbor_6.addFeatures(features_SafeHarbor_6);
var lyr_SafeHarbor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SafeHarbor_6, 
                style: style_SafeHarbor_6,
                popuplayertitle: 'Safe Harbor',
                interactive: true,
                title: '<img src="styles/legend/SafeHarbor_6.png" /> Safe Harbor'
            });
var format_SafeHarbor_7 = new ol.format.GeoJSON();
var features_SafeHarbor_7 = format_SafeHarbor_7.readFeatures(json_SafeHarbor_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_SafeHarbor_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SafeHarbor_7.addFeatures(features_SafeHarbor_7);
var lyr_SafeHarbor_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SafeHarbor_7, 
                style: style_SafeHarbor_7,
                popuplayertitle: 'Safe Harbor',
                interactive: true,
                title: '<img src="styles/legend/SafeHarbor_7.png" /> Safe Harbor'
            });
var format_Nautech_8 = new ol.format.GeoJSON();
var features_Nautech_8 = format_Nautech_8.readFeatures(json_Nautech_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Nautech_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nautech_8.addFeatures(features_Nautech_8);
var lyr_Nautech_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nautech_8, 
                style: style_Nautech_8,
                popuplayertitle: 'Nautech',
                interactive: true,
                title: '<img src="styles/legend/Nautech_8.png" /> Nautech'
            });
var format_Nautech_9 = new ol.format.GeoJSON();
var features_Nautech_9 = format_Nautech_9.readFeatures(json_Nautech_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Nautech_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nautech_9.addFeatures(features_Nautech_9);
var lyr_Nautech_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nautech_9, 
                style: style_Nautech_9,
                popuplayertitle: 'Nautech',
                interactive: true,
                title: '<img src="styles/legend/Nautech_9.png" /> Nautech'
            });
var format_AOTMB92_10 = new ol.format.GeoJSON();
var features_AOTMB92_10 = format_AOTMB92_10.readFeatures(json_AOTMB92_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_AOTMB92_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOTMB92_10.addFeatures(features_AOTMB92_10);
var lyr_AOTMB92_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOTMB92_10, 
                style: style_AOTMB92_10,
                popuplayertitle: 'AOT MB92',
                interactive: true,
                title: '<img src="styles/legend/AOTMB92_10.png" /> AOT MB92'
            });
var format_MB92_11 = new ol.format.GeoJSON();
var features_MB92_11 = format_MB92_11.readFeatures(json_MB92_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_MB92_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MB92_11.addFeatures(features_MB92_11);
var lyr_MB92_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MB92_11, 
                style: style_MB92_11,
                popuplayertitle: 'MB92',
                interactive: true,
                title: '<img src="styles/legend/MB92_11.png" /> MB92'
            });
var format_ClassicWorks_12 = new ol.format.GeoJSON();
var features_ClassicWorks_12 = format_ClassicWorks_12.readFeatures(json_ClassicWorks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ClassicWorks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassicWorks_12.addFeatures(features_ClassicWorks_12);
var lyr_ClassicWorks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassicWorks_12, 
                style: style_ClassicWorks_12,
                popuplayertitle: 'Classic Works',
                interactive: true,
                title: '<img src="styles/legend/ClassicWorks_12.png" /> Classic Works'
            });
var format_ClassicWorks_13 = new ol.format.GeoJSON();
var features_ClassicWorks_13 = format_ClassicWorks_13.readFeatures(json_ClassicWorks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ClassicWorks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClassicWorks_13.addFeatures(features_ClassicWorks_13);
var lyr_ClassicWorks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClassicWorks_13, 
                style: style_ClassicWorks_13,
                popuplayertitle: 'Classic Works',
                interactive: true,
                title: '<img src="styles/legend/ClassicWorks_13.png" /> Classic Works'
            });
var format_Pompier_14 = new ol.format.GeoJSON();
var features_Pompier_14 = format_Pompier_14.readFeatures(json_Pompier_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Pompier_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompier_14.addFeatures(features_Pompier_14);
var lyr_Pompier_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompier_14, 
                style: style_Pompier_14,
                popuplayertitle: 'Pompier',
                interactive: true,
                title: '<img src="styles/legend/Pompier_14.png" /> Pompier'
            });
var format_LCS_15 = new ol.format.GeoJSON();
var features_LCS_15 = format_LCS_15.readFeatures(json_LCS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_LCS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCS_15.addFeatures(features_LCS_15);
var lyr_LCS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LCS_15, 
                style: style_LCS_15,
                popuplayertitle: 'LCS',
                interactive: true,
                title: '<img src="styles/legend/LCS_15.png" /> LCS'
            });
var group_ClassicWorks = new ol.layer.Group({
                                layers: [lyr_ClassicWorks_12,lyr_ClassicWorks_13,],
                                fold: 'close',
                                title: 'Classic Works'});
var group_MB92 = new ol.layer.Group({
                                layers: [lyr_AOTMB92_10,lyr_MB92_11,],
                                fold: 'close',
                                title: 'MB92'});
var group_Nautech = new ol.layer.Group({
                                layers: [lyr_Nautech_8,lyr_Nautech_9,],
                                fold: 'close',
                                title: 'Nautech'});
var group_SafeHarbor = new ol.layer.Group({
                                layers: [lyr_SafeHarbor_6,lyr_SafeHarbor_7,],
                                fold: 'close',
                                title: 'Safe Harbor'});
var group_Exail = new ol.layer.Group({
                                layers: [lyr_Exail_4,lyr_Exail_5,],
                                fold: 'close',
                                title: 'Exail'});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_Area_0,lyr_Building_1,lyr_Roadssite_2,lyr_OSMStandard_3,],
                                fold: 'close',
                                title: ''});

lyr_Area_0.setVisible(true);lyr_Building_1.setVisible(true);lyr_Roadssite_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_Exail_4.setVisible(true);lyr_Exail_5.setVisible(true);lyr_SafeHarbor_6.setVisible(true);lyr_SafeHarbor_7.setVisible(true);lyr_Nautech_8.setVisible(true);lyr_Nautech_9.setVisible(true);lyr_AOTMB92_10.setVisible(true);lyr_MB92_11.setVisible(true);lyr_ClassicWorks_12.setVisible(true);lyr_ClassicWorks_13.setVisible(true);lyr_Pompier_14.setVisible(true);lyr_LCS_15.setVisible(true);
var layersList = [group_0Fonddecarte,group_Exail,group_SafeHarbor,group_Nautech,group_MB92,group_ClassicWorks,lyr_Pompier_14,lyr_LCS_15];
lyr_Area_0.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roadssite_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Exail_4.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_Exail_5.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_SafeHarbor_6.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_SafeHarbor_7.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_Nautech_8.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_Nautech_9.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_AOTMB92_10.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_MB92_11.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_ClassicWorks_12.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_ClassicWorks_13.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_Pompier_14.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_LCS_15.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_Area_0.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roadssite_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Exail_4.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Exail_5.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_SafeHarbor_6.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_SafeHarbor_7.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Nautech_8.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Nautech_9.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_AOTMB92_10.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_MB92_11.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_ClassicWorks_12.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_ClassicWorks_13.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Pompier_14.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_LCS_15.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Area_0.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roadssite_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Exail_4.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_Exail_5.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_SafeHarbor_6.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_SafeHarbor_7.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_Nautech_8.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_Nautech_9.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_AOTMB92_10.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_MB92_11.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_ClassicWorks_12.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_ClassicWorks_13.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_Pompier_14.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_LCS_15.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_LCS_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});