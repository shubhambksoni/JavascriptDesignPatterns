const pubsub = {};

(function(q) {
  const topics = {};
  let subscriptionId = -1;

  q.publish = function(topic, data) {
    if(!topics[topic]) {
      return false;
    }
    
    if(topics[topic]) {
      for(let token in topics[topic]) {
        if(!topics[topic].hasOwnProperty(token)) continue;
        const subscriber = topics[topic][token];
        subscriber.func(data);
      }
    }

    return this;
  }

  q.subscribe = function(topic, func) {
    if(!topics[topic]){
      topics[topic] = {};
    }
    
    topics[topic][++subscriptionId] = {
      token: subscriptionId,
      func: func
    }

    return subscriptionId;
  }

  q.unsubscribe = function(topic, token) {
    if(topics[topic] && topics[topic][token]){
      delete topics[topic][token];
    }
  }
})(pubsub);

module.exports = { pubsub };

/** Sample usage
* const subscriptionId = pubsub.subscribe("sample", function(event) {console.log(event)});

* pubsub.publish("sampleTopic", 'sampleEvent');

* pubsub.unsubscribe("sampleTopic", subscriptionId);
**/
