import axios from 'axios';


export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: `Bearer aef24i5elsRazMPF0SA3HbB2kyhBLIGTW2OGXle-L9l8eM8NQrHPv0h34EcEvCt8_Y3_8AJ2yWkGaD7o1YfJxp7qG9HwVxKwW_5hsFl3g9nHNL2l7EltCybLAbj6ZXYx`
    }
})