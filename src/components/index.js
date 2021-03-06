import { Topbar } from "./Topbar"
import { Sidebar } from "./Sidebar"
import { CurrentLocation } from "./CurrentLocation"
import { VideoFeed } from "./VideoFeed"
import { Gallery } from "./Gallery"
import { Loader } from "./Loader"
import { Weather } from "./Content/Weather"
import { Targets } from "./Content/Targets"
import { WeatherChart } from "./Content/WeatherChart"
import { DraggableComponent } from "./DraggableComponent"

export const DraggableVideoFeed = (props) => <DraggableComponent Component={VideoFeed} data={props} />
export const DraggableGallery = (props) => <DraggableComponent Component={Gallery} data={props} />
export const DraggableLocation = (props) => <DraggableComponent Component={CurrentLocation} data={props} />
export const DraggableWeather = (props) => <DraggableComponent Component={Weather} data={props} />
export const DraggableTargets = (props) => <DraggableComponent Component={Targets} data={props} />
export const DraggableWeatherChart = (props) => <DraggableComponent Component={WeatherChart} data={props} />

export {
  Topbar,
  Sidebar,
  CurrentLocation,
  VideoFeed,
  Gallery,
  Loader
}