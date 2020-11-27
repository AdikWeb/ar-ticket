export default class MapControll {
    constructor(map, ymaps) {
        this.map = map;
        this.ymaps = ymaps;
        this.markerArray = [];
        this.collections = {};
    }
    placemark(coord, { type, iconContent, hintContent, preset, draggable }) {
        let properties = {
            iconContent,
            hintContent
        };

        return new this.ymaps.GeoObject({
            geometry: {
                type: type || "Point",
                coordinates: coord
            },
            properties
        }, {
            preset: preset || 'islands#blackStretchyIcon',
            draggable: draggable || false
        })
    }
    marker() {
        return {
            collection: (name) => {
                if (!this.collections[name])
                    this.collections[name] = new this.ymaps.GeoObjectCollection();

                return {
                    add: (coord, { type, iconContent, hintContent, preset, draggable }) => {
                        this.collections[name].add(this.placemark(coord, { type, iconContent, hintContent, preset, draggable }))
                        return this.collections[name];
                    },

                    clear: () => {
                        this.collections[name].removeAll()
                    }
                }
            },

            show: (gr = false) => {
                if (Object.keys(this.collections)) {
                    for (let obj of Object.keys(this.collections)) {
                        this.map.geoObjects.add(this.collections[obj])
                    }
                }
            }
        }
    }
}

export class collection {

}