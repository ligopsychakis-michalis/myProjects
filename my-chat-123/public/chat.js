const socket = io('https://my-chat123.herokuapp.com/');
//const socket = io('http://localhost:8080/');

const chatArea = document.getElementById('chat-area');
const chatSend = document.getElementById('chat-send');
const chatText = document.getElementById('chat-text');
const chatName = document.getElementById('chat-name');
const chatFeedback = document.getElementById('chat-feedback');

chatSend.addEventListener('click', (e) => {
    e.preventDefault();
    if (chatText.value) {
        socket.emit('chat', {
            name: chatName.value,
            msg: chatText.value
        });
    }
    chatText.value = '';
});

chatText.addEventListener('keypress', () => {
    socket.emit('writing', chatName.value);
});

chatText.addEventListener('focusout', () => {
    socket.emit('writingStop');
});


socket.on('chatToAll', data => {
    if (chatArea.innerHTML) chatArea.innerHTML += '<hr/>';
    chatArea.innerHTML += `<p><strong>${data.name}:</strong> ${data.msg}</p>`;
    chatFeedback.innerHTML = '';
});

socket.on('writingToAll', data => {
    chatFeedback.innerHTML = `<p><em>${data} is writing...</em></p>`;
});

socket.on('writingStopToAll', () => {
    chatFeedback.innerHTML = '';
});