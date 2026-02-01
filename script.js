body {
    background-color: #fce4ec; /* Light pink background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Arial', sans-serif;
}

.container {
    text-align: center;
    background: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

#noButton {
    position: absolute; /* Vital for the 'shy' movement */
    transition: 0.3s;
}

#message {
    font-size: 12px;
    color: #888;
    margin-top: 20px;
}
