import io from 'socket.io-client'
const socket = io('http://localhost:3300')

socket.on('updateLikes', (likesC) => {
  const { postId, likes } = likesC
  const like = document.querySelector(`#currentLikes-${postId}`)
  like.innerHTML = likes
})
socket.on('updateStars', (starC) => {
  console.log(starC)
  const { postId, stars } = starC
  const star = document.querySelector(`#currentStars-${postId}`)
  star.innerHTML = stars
})