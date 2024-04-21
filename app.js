document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('methodSelection').style.display = 'block';
});

document.getElementById('uploadPhotoBtn').addEventListener('click', function() {
    document.getElementById('photoInput').click();
});

document.getElementById('liveCameraBtn').addEventListener('click', function() {
    let video = document.getElementById('video');
    video.style.display = 'block';
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                };
            })
            .catch(function(error) {
                console.error('Error accessing the camera:', error);
            });
    }
});

// Additional functionalities for face-api.js, makeup application, etc., go here
