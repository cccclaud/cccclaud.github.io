// justin.js

document.addEventListener('DOMContentLoaded', function() {
    const gameImage = document.getElementById('gameImage');
    const scoreElement = document.getElementById('score');
    
    let score = 0;
    
    function randomPosition() {
        const gameArea = document.getElementById('gameArea');
        const gameAreaRect = gameArea.getBoundingClientRect();
        const imageRect = gameImage.getBoundingClientRect();
        
        const maxX = gameAreaRect.width - imageRect.width;
        const maxY = gameAreaRect.height - imageRect.height;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        return { x: randomX, y: randomY };
    }
    
    function moveImage() {
        const { x, y } = randomPosition();
        gameImage.style.transform = `translate(${x}px, ${y}px)`;
    }
    
    function increaseScore() {
        score += 1;
        scoreElement.textContent = `Score: ${score}`;
        moveImage();
    }
    
    gameImage.addEventListener('click', increaseScore);
    
    // Move the image initially and every 2 seconds
    moveImage();
    setInterval(moveImage, 2000);
});
