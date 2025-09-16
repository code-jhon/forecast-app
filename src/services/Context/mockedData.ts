import { WeatherData, WeatherForeCastResponse } from "../../utils/interfaces";

export const mockedData: WeatherData = {
  location: {
    name: 'New York',
    region: 'New York',
    country: 'United States of America',
    lat: 40.71,
    lon: -74.01,
    tz_id: 'America/New_York',
    localtime_epoch: 1658522976,
    localtime: '2022-07-22 16:49',
  },
  current: {
    last_updated_epoch: 1658522700,
    last_updated: '2022-07-22 16:45',
    temp_c: 34.4,
    temp_f: 93.9,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      code: 1003,
    },
    wind_mph: 16.1,
    wind_kph: 25.9,
    wind_degree: 180,
    wind_dir: 'S',
    pressure_mb: 1011,
    pressure_in: 29.85,
    precip_mm: 0,
    precip_in: 0,
    humidity: 31,
    cloud: 75,
    feelslike_c: 37,
    feelslike_f: 98.6,
    vis_km: 16,
    vis_miles: 9,
    uv: 8,
    gust_mph: 11.6,
    gust_kph: 18.7,
    air_quality: {
      co: 0,
      no2: 0,
      o3: 0,
      so2: 0,
      pm2_5: 0,
      pm10: 0,
      'us-epa-index': 0,
      'gb-defra-index': 0,
    },
  },
};

export const mockedForecastData: WeatherForeCastResponse = {
  "location": {
    "name": "New York",
    "region": "New York",
    "country": "United States of America",
    "lat": 40.71,
    "lon": -74.01,
    "tz_id": "America/New_York",
    "localtime_epoch": 1658522976,
    "localtime": "2022-07-22 16:49"
  },
  "forecast": {
    "forecastday": [
      {
        "date": "2022-07-22T00:00:00.000Z",
        "date_epoch": 1658448000,
        "day": {
          "maxtemp_c": 35.9,
          "maxtemp_f": 96.6,
          "mintemp_c": 26.3,
          "mintemp_f": 79.3,
          "avgtemp_c": 30.7,
          "avgtemp_f": 87.3,
          "maxwind_mph": 12.8,
          "maxwind_kph": 20.5,
          "totalprecip_mm": 0,
          "totalprecip_in": 0,
          "avgvis_km": 10,
          "avgvis_miles": 6,
          "avghumidity": 53,
          "daily_will_it_rain": 0,
          "daily_chance_of_rain": 0,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
          },
          "uv": 8
        },
        "astro": {
          "sunrise": "05:44 AM",
          "sunset": "08:20 PM",
          "moonrise": "12:58 AM",
          "moonset": "03:35 PM",
          "moon_phase": "Last Quarter",
          "moon_illumination": "36"
        },
        "hour": [
          {
            "time_epoch": 1658462400,
            "time": "2022-07-22 00:00",
            "temp_c": 28.7,
            "temp_f": 83.7,
            "is_day": 0,
            "condition": {
              "text": "Clear",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_mph": 9.4,
            "wind_kph": 15.1,
            "wind_degree": 265,
            "wind_dir": "W",
            "pressure_mb": 1007,
            "pressure_in": 29.73,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 58,
            "cloud": 19,
            "feelslike_c": 30.5,
            "feelslike_f": 86.9,
            "windchill_c": 28.7,
            "windchill_f": 83.7,
            "heatindex_c": 30.5,
            "heatindex_f": 86.9,
            "dewpoint_c": 19.6,
            "dewpoint_f": 67.3,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 15,
            "gust_kph": 24.1,
            "uv": 1
          }
        ]
      },
      {
        "date": "2022-07-22T00:00:00.000Z",
        "date_epoch": 1658448000,
        "day": {
          "maxtemp_c": 35.9,
          "maxtemp_f": 96.6,
          "mintemp_c": 26.3,
          "mintemp_f": 79.3,
          "avgtemp_c": 30.7,
          "avgtemp_f": 87.3,
          "maxwind_mph": 12.8,
          "maxwind_kph": 20.5,
          "totalprecip_mm": 0,
          "totalprecip_in": 0,
          "avgvis_km": 10,
          "avgvis_miles": 6,
          "avghumidity": 22,
          "daily_will_it_rain": 0,
          "daily_chance_of_rain": 0,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
          },
          "uv": 8
        },
        "astro": {
          "sunrise": "05:44 AM",
          "sunset": "08:20 PM",
          "moonrise": "12:58 AM",
          "moonset": "03:35 PM",
          "moon_phase": "Last Quarter",
          "moon_illumination": "36"
        },
        "hour": [
          {
            "time_epoch": 1658462400,
            "time": "2022-07-22 00:00",
            "temp_c": 28.7,
            "temp_f": 83.7,
            "is_day": 0,
            "condition": {
              "text": "Clear",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_mph": 9.4,
            "wind_kph": 15.1,
            "wind_degree": 265,
            "wind_dir": "W",
            "pressure_mb": 1007,
            "pressure_in": 29.73,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 58,
            "cloud": 19,
            "feelslike_c": 30.5,
            "feelslike_f": 86.9,
            "windchill_c": 28.7,
            "windchill_f": 83.7,
            "heatindex_c": 30.5,
            "heatindex_f": 86.9,
            "dewpoint_c": 19.6,
            "dewpoint_f": 67.3,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 15,
            "gust_kph": 24.1,
            "uv": 1
          }
        ]
      },
      {
        "date": "2022-07-22T00:00:00.000Z",
        "date_epoch": 1658448000,
        "day": {
          "maxtemp_c": 35.9,
          "maxtemp_f": 96.6,
          "mintemp_c": 26.3,
          "mintemp_f": 79.3,
          "avgtemp_c": 30.7,
          "avgtemp_f": 87.3,
          "maxwind_mph": 12.8,
          "maxwind_kph": 20.5,
          "totalprecip_mm": 0,
          "totalprecip_in": 0,
          "avgvis_km": 10,
          "avgvis_miles": 6,
          "avghumidity": 43,
          "daily_will_it_rain": 0,
          "daily_chance_of_rain": 0,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
          },
          "uv": 8
        },
        "astro": {
          "sunrise": "05:44 AM",
          "sunset": "08:20 PM",
          "moonrise": "12:58 AM",
          "moonset": "03:35 PM",
          "moon_phase": "Last Quarter",
          "moon_illumination": "36"
        },
        "hour": [
          {
            "time_epoch": 1658462400,
            "time": "2022-07-22 00:00",
            "temp_c": 28.7,
            "temp_f": 83.7,
            "is_day": 0,
            "condition": {
              "text": "Clear",
              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
              "code": 1000
            },
            "wind_mph": 9.4,
            "wind_kph": 15.1,
            "wind_degree": 265,
            "wind_dir": "W",
            "pressure_mb": 1007,
            "pressure_in": 29.73,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 58,
            "cloud": 19,
            "feelslike_c": 30.5,
            "feelslike_f": 86.9,
            "windchill_c": 28.7,
            "windchill_f": 83.7,
            "heatindex_c": 30.5,
            "heatindex_f": 86.9,
            "dewpoint_c": 19.6,
            "dewpoint_f": 67.3,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 15,
            "gust_kph": 24.1,
            "uv": 1
          }
        ]
      },
      {
        "date": "2022-07-24T00:00:00.000Z",
        "date_epoch": 1658620800,
        "day": {
          "maxtemp_c": 28.5,
          "maxtemp_f": 83.3,
          "mintemp_c": 22.1,
          "mintemp_f": 71.8,
          "avgtemp_c": 25.3,
          "avgtemp_f": 77.5,
          "maxwind_mph": 18.6,
          "maxwind_kph": 29.9,
          "totalprecip_mm": 2.5,
          "totalprecip_in": 0.1,
          "avgvis_km": 8,
          "avgvis_miles": 5,
          "avghumidity": 68,
          "daily_will_it_rain": 1,
          "daily_chance_of_rain": 75,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Light rain",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/296.png",
            "code": 1183
          },
          "uv": 4
        },
        "astro": {
          "sunrise": "05:45 AM",
          "sunset": "08:18 PM",
          "moonrise": "02:15 AM",
          "moonset": "04:22 PM",
          "moon_phase": "Waning Crescent",
          "moon_illumination": "28"
        },
        "hour": []
      },
      {
        "date": "2022-07-25T00:00:00.000Z",
        "date_epoch": 1658707200,
        "day": {
          "maxtemp_c": 32.8,
          "maxtemp_f": 91.0,
          "mintemp_c": 24.7,
          "mintemp_f": 76.5,
          "avgtemp_c": 28.8,
          "avgtemp_f": 83.8,
          "maxwind_mph": 14.3,
          "maxwind_kph": 23.0,
          "totalprecip_mm": 0,
          "totalprecip_in": 0,
          "avgvis_km": 12,
          "avgvis_miles": 7,
          "avghumidity": 45,
          "daily_will_it_rain": 0,
          "daily_chance_of_rain": 15,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
          },
          "uv": 7
        },
        "astro": {
          "sunrise": "05:46 AM",
          "sunset": "08:17 PM",
          "moonrise": "03:32 AM",
          "moonset": "05:08 PM",
          "moon_phase": "Waning Crescent",
          "moon_illumination": "21"
        },
        "hour": []
      },
      {
        "date": "2022-07-26T00:00:00.000Z",
        "date_epoch": 1658793600,
        "day": {
          "maxtemp_c": 26.2,
          "maxtemp_f": 79.2,
          "mintemp_c": 19.8,
          "mintemp_f": 67.6,
          "avgtemp_c": 23.0,
          "avgtemp_f": 73.4,
          "maxwind_mph": 22.4,
          "maxwind_kph": 36.0,
          "totalprecip_mm": 8.3,
          "totalprecip_in": 0.33,
          "avgvis_km": 6,
          "avgvis_miles": 4,
          "avghumidity": 78,
          "daily_will_it_rain": 1,
          "daily_chance_of_rain": 85,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Heavy rain",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/308.png",
            "code": 1195
          },
          "uv": 3
        },
        "astro": {
          "sunrise": "05:47 AM",
          "sunset": "08:16 PM",
          "moonrise": "04:48 AM",
          "moonset": "05:54 PM",
          "moon_phase": "Waning Crescent",
          "moon_illumination": "15"
        },
        "hour": []
      },
      {
        "date": "2022-07-27T00:00:00.000Z",
        "date_epoch": 1658880000,
        "day": {
          "maxtemp_c": 30.1,
          "maxtemp_f": 86.2,
          "mintemp_c": 23.4,
          "mintemp_f": 74.1,
          "avgtemp_c": 26.8,
          "avgtemp_f": 80.2,
          "maxwind_mph": 16.8,
          "maxwind_kph": 27.0,
          "totalprecip_mm": 0,
          "totalprecip_in": 0,
          "avgvis_km": 14,
          "avgvis_miles": 9,
          "avghumidity": 52,
          "daily_will_it_rain": 0,
          "daily_chance_of_rain": 25,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/119.png",
            "code": 1006
          },
          "uv": 5
        },
        "astro": {
          "sunrise": "05:48 AM",
          "sunset": "08:15 PM",
          "moonrise": "06:04 AM",
          "moonset": "06:40 PM",
          "moon_phase": "New Moon",
          "moon_illumination": "8"
        },
        "hour": []
      }
    ]
  }
};
