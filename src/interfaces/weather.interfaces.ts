export interface LocationData {
  [key: string]: number | string | undefined;
  lat?: number;
  lon?: number;
  q?: string;
}

export interface WeatherData {
  dt: number;
  weather: Weather[];
  main: WeatherMain;
  name?: string;
  dt_txt: string;
}

export interface WeekResponse {
  list: WeatherData[];
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}
