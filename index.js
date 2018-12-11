// Just singleton for reducing number of sockets

const queue = require("./src/queue");
const messaging = require("./src/messaging");

const rabbitmq = {
	queue: undefined,
	messaging: undefined
};

module.exports = function(options){
	if(rabbitmq.messaging == undefined){
		rabbitmq.queue = queue(options);
		rabbitmq.messaging = messaging(options);
	}

	return rabbitmq;
};

