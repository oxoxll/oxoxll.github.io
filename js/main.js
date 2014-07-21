var websocket = new WebSocket('ws://111.206.45.12:30201');
websocket.onopen = function(evt) {
    console.log('onopen');
}; 
websocket.onclose = function(evt) {
    console.log('onclose');
}; 
websocket.onmessage = function(evt) {
    console.log('onmessage');
}; 
websocket.onerror = function(evt) {
    console.log('onerror');
};
