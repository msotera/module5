//JavaScript Document


//name of the JSON file that we want 
let url = 'https://msotera.github.io/module5/';

//assign variables selector tasks
let itemChoose = document.querySelector('select');
let reviewDisplay = document.querySelector('p');


itemChoose.onchange = function() {
    let item = itemChoose.value;
    updateDisplay(item);
};

//function updateDisplay is changing the name of the list item in the dropdown menu to match the name of the file containing its information
function updateDisplay(item) {
    item = item.replace(' ', '');
    item = item.toLowerCase();
    let url = item + '.txt';

    //fetch text file from url and display content held within
    fetch(url).then(function(response) {
        response.text().then(function(text) {
            reviewDisplay.textContent = text;
        });
    });
}

//update display for item in dropdown menu
updateDisplay('Item 1');
itemChoose.value = 'Item 1';




//name of the JSON file that we want 
let requestURL = 'https://msotera.github.io/module5/items.json';


//instead of XMLHTTPRequest, we'll use Fetch API which is a more modern way that uses promises 
let weirdItems = fetch('https://msotera.github.io/module5/items.json')
    .then(function(response) {
        //get the response 
        return response.json();

    }).then(function catItems(jsonObj) {


        let catItems = jsonObj.catItems;
        let section = document.querySelector('section');
        for (let i = 0; i < catItems.length; i++) {

            //build HTML elements
            let article = document.createElement('article');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p');
            let ul = document.createElement('ul');


            //set image attribute - set location - we are getting image from github repository
            //set image attribute - catItems[] - set to array.image
            //header text content can be found in json file under name
            //paragraph text content can be found in json file under price
            img.setAttribute('src', 'https://msotera.github.io/module5/img/' + catItems[i].image);
            img.setAttribute('alt', catItems[i].image);
            h2.textContent = catItems[i].name;
            p1.textContent = 'Price ' + catItems[i].price;


            //create variable details, get information from json catItems array under details
            //create html element for list item and attach it to textContent from json
            let details = catItems[i].details;
            for (let j = 0; j < details.length; j++) {
                let listItem = document.createElement('li');
                listItem.textContent = details[j];
                ul.appendChild(listItem);
            }


            //append the nodes
            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(ul);
            section.appendChild(article);


        }
    });


//function initMap - function used in cunjunction with the API key provided on html page
function initMap() {

    // Styles a map in night mode.
    //generated using google cloud platform
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.3848448,
            lng: -79.7169967
        },
        zoom: 12.5,
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
        ]



    });

    //variables to store fetch address
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var newIcons = 'https://msotera.github.io/module5/img/';

    //variable icon used to store icon information
    //in each instance we are naming the variable, giving it a visible name for the user to see and then saying where the image is for the variable(icon)
    var icons = {
        parking: {
            name: 'Parking',
            icon: iconBase + 'parking_lot_maps.png'
        },
        home: {
            name: 'Home',
            icon: iconBase + 'library_maps.png'
        },

        //image for electronicstore icon found at: 
        //https://commons.wikimedia.org/wiki/File:Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Power_outage_%E2%80%93_Industry_%E2%80%93_Default.png
        electronicstore: {
            name: 'Electronics',
            icon: newIcons + 'Electronics.png'
        },

        //image for petstore icon found at: 
        //https://commons.wikimedia.org/wiki/File:Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Cat_%E2%80%93_Nature_%E2%80%93_Gradient.png
        petstore: {
            name: 'Petstore',
            icon: newIcons + 'CatMarker.png'
        },

        //image for beautystore icon found at: 
        //https://commons.wikimedia.org/wiki/File:Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Perfumery_%E2%80%93_Stores_%E2%80%93_default.png
        beautystore: {
            name: 'Beauty',
            icon: newIcons + 'Makeup.png'
        },

        //image for vet icon found at: 
        //https://commons.wikimedia.org/wiki/File:Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Veterinary_%E2%80%93_Nature_%E2%80%93_white.png
        vet: {
            name: 'Vet',
            icon: newIcons + 'Vet.png'
        }
    };

    //variable features used to store marker information
    //in each instance we are putting the markers on the map based on their lat. & lng, and telling each position what type of marker we want to show on the map
    var features = [{
        position: new google.maps.LatLng(44.4066757, -79.7073676),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.389511, -79.6860462),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.406003, -79.7076252),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.3589214, -79.7467866),
        type: 'petstore'
    }, {
        position: new google.maps.LatLng(44.3656245, -79.75719),
        type: 'petstore'
    }, {
        position: new google.maps.LatLng(44.3552785, -79.6486751),
        type: 'petstore'
    }, {
        position: new google.maps.LatLng(44.3877258, -79.7164638),
        type: 'petstore'
    }, {
        position: new google.maps.LatLng(44.3768423, -79.6925125),
        type: 'petstore'
    }, {
        position: new google.maps.LatLng(44.3848329, -79.7402671),
        type: 'electronicstore'
    }, {
        position: new google.maps.LatLng(44.3770184, -79.6925126),
        type: 'electronicstore'
    }, {
        position: new google.maps.LatLng(44.3491571, -79.7073079),
        type: 'beautystore'
    }, {
        position: new google.maps.LatLng(44.4017405, -79.7085059),
        type: 'beautystore'
    }, {
        position: new google.maps.LatLng(44.3818345, -79.7245775),
        type: 'vet'
    }, {
        position: new google.maps.LatLng(44.3768959, -79.7185486),
        type: 'vet'
    }, {
        position: new google.maps.LatLng(44.3615343, -79.7111896),
        type: 'vet'
    }, {
        position: new google.maps.LatLng(44.3888649, -79.6856967),
        type: 'home'
    }];

    // Create markers
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });

    //design the legend
    //assign type, name, icon(image), where to put each key
    var legend = document.getElementById('legend');
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }

    //map control
    //this tells us where the legend is going to be positioned on the map
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);

}
