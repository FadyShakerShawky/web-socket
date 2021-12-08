require('./bootstrap');



window.Pusher = require('pusher-js');
import Echo from "laravel-echo";


window.Echo = new Echo({
     broadcaster: 'pusher',
     key: process.env.MIX_PUSHER_APP_KEY,
     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
	 encrypted: true ,
	 wsHost: window.location.hostname+ ':8000' ,
	 wsPort:6001
	 
});
Pusher.logToConsole = true;

window.Echo.channel('home').listen('App\Events\NewMessage' , (e) =>{
				console.log(e.message)
				})