import { AppRegistry } from 'react-native';
import CrowdCheck from './src/App';
import GeofenceMonitor from 'react-native-geofence-monitor';

//GeofenceMonitor.addLocation("Casa", -22.955651, -43.188699)
//GeofenceMonitor.addLocation("MAE", -22.7744478, -43.3507554)
//GeofenceMonitor.addLocation("Fidelize", -22.9042735, -43.1763433)

GeofenceMonitor.location({
	key: "FD03-AdeW-223a-2341-1234",
	latitude: -22.9042735,
	longitude: -43.1763433
})

 GeofenceMonitor.start();


//navigator.geolocation.getCurrentPosition(
//      (position) => {
//        var initialPosition = JSON.stringify(position);
//        console.log(initialPosition);
//      },
//      (error) => alert(JSON.stringify(error)),
//      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
//);

//AppRegistry.registerHeadlessTask('BackgroundTask', () => BackgroundTask);
AppRegistry.registerComponent('CrowdCheck', () => CrowdCheck);

