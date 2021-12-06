// Array to store messages
var messages = [];

//Message type lookup object, similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Seed Data (optional)
var data = [
{
    type: messageType.out,
    user: 'Danielle',
    message: 'Hey, do you have any lunch plans?'
},
{
    type: messageType.in,
    user: 'Mike',
    message: 'Hi Danielle! No, how about Qdoba?'
},
{
    type: messageType.out,
    user: 'Danielle',
    message: 'Ok, sure lets go!'
}
];

// Message constructor function
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for supplied message.
function createMessageElement(message){
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //Create the element and add the message to the text.
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // Add a class using message type.
    messageEl.className =  message.type;

    return messageEl;
}

// Button click event handler to add new message
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    // Determine message type and set message variables accordingly
    switch (event.target.id) {
        case 'send-button':
            user = 'Danielle';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Mike';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //Create new message.
    if (messageInput.value != '') {
        //Construct a message and add it to the array.
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        // Create Message element
        var el = createMessageElement(message);

        //Add the message element to DOM
        messagesContainerEl.appendChild(el);

        //Reset input
        messageInput.value = ' ';
    }
}

// Load seed data from data array above (optional)
function loadSeedData() {
    for (var i = 0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //Load view with preloaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < message.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function(){
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //Load seed data from data array above (optional
    loadSeedData();
};


init();