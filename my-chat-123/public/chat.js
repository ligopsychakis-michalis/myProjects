//create the web-socket connection
const socket = io('https://my-chat123.herokuapp.com/');
//const socket = io('http://localhost:8080/');

//declare some variables
const chatArea = document.getElementById('chat-area');
const chatSend = document.getElementById('chat-send');
const chatText = document.getElementById('chat-text');
const chatName = document.getElementById('name');
const chatFeedback = document.getElementById('chat-feedback');
const userNameText = document.getElementById('user-name');
const modalButton = document.querySelector('#modal button');
const modalError = document.getElementById('error');
let userName;
let canChat = false;

//event for clicking Start Chating button
modalButton.addEventListener('click', e => {
    e.preventDefault();
    if (!chatName.value.trim()) {
        modalError.innerText = 'Please choose a valid name.';
        setTimeout(() => {
            modalError.innerText = '';
        }, 3000);
    } else {
        userName = chatName.value;
        document.getElementById('modal').classList.remove("active");
        document.getElementById('overlay').classList.remove("active");
        userNameText.innerHTML = `<strong>User:</strong> ${userName}`;
        canChat = true;
    }

});

//event for clicking SEND button
chatSend.addEventListener('click', (e) => {
    e.preventDefault();

    if (chatText.value) {
        socket.emit('chat', {
            name: userName,
            msg: chatText.value
        });
    }
    chatText.value = '';
});

//events for current user activity ----------------------------------------------------------------
chatText.addEventListener('keypress', () => {
    socket.emit('writing', userName);
});

chatText.addEventListener('focusout', () => {
    socket.emit('writingStop');
});


//events for other users activity 
socket.on('chatToAll', data => {
    if (canChat) {
        if (chatArea.innerHTML) chatArea.innerHTML += '<hr/>';
        chatArea.innerHTML += `<p><strong>${data.name}:</strong> ${data.msg}</p>`;
        chatFeedback.innerHTML = '';
    }
    
});

socket.on('writingToAll', data => {
    if (canChat) {
        chatFeedback.innerHTML = `<p><em>${data} is writing...</em></p>`;
    }    
});

socket.on('writingStopToAll', () => {
    chatFeedback.innerHTML = '';
});