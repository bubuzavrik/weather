import { SearchCityForm } from './page-components/weather/SearchCityForm';
import { WeatherWidget } from './page-components/weather/WeatherWidget';

export const App = () => {
  return (
    <div className="flex flex-col gap-12 p-2">
      <SearchCityForm />
      <div className="flex gap-8">
        <div className="flex-1">
          <WeatherWidget />
        </div>
        <div className="flex-1"></div>
      </div>
      <WeatherWidget />
    </div>
  );
};
