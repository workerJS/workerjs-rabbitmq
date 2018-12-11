# workerjs-rabbitmq

Abstraction layer for using queue and messaging as event listeners. 

## Messaging

### Receive

``` javascript
const messaging = require("workerjs-rabbitmq")().messaging;

messaging.on("test", function(data){
	console.log(data);
}).then(function(){
	console.log("Subscribed");
}).catch(function(){
	console.log("Error while subscribing");
});

```

### Send

``` javascript
const messaging = require("workerjs-rabbitmq")().messaging;

messaging.emit("test", 123).then(function(){
	console.log("Sent");
}).catch(function(){
	console.log("Error while sending");
});

```

## Queue

### Receive

``` javascript
var queue = require("workerjs-rabbitmq")().queue;

queue.on("tasks", function(data){
	console.log(data);
});
```

### Send

``` javascript
var queue = require("workerjs-rabbitmq")().queue;

queue.emit("tasks", "123").then(function(){
	console.log("Sent");
}).catch(function(){
	console.log("Error while sending");
});
```
