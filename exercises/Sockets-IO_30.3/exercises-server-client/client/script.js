// const socket = window.io('http://localhost:3300');
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io('http://localhost:3300')
const likes = document.querySelector('#currentLikes')
const stars = document.querySelector('#currentStars')
const likeIcon = document.querySelector('#likeIcon')
const starIcon = document.querySelector('#starIcon')

socket.on('updateLikes', (like) => {
  likes.innerHTML = like
})
socket.on('updateStars', (star) => {
  stars.innerHTML = star
})

function upLikes () {
  socket.emit('likePost')
}

function upStars () {
  stars.innerHTML = +stars.innerHTML + 1
  socket.emit('starPost')
}

likeIcon.addEventListener('click', upLikes)
starIcon.addEventListener('click', upStars)