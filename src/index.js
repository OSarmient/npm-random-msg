const messages = [
    "Omar",
    "Camilo",
    "Lady",
    "Lizbeth",
    "Sandra",
    "Milena",
    "Jaime",
    "Amanda",
    "Santigo",
    "Gabriel"
];

const randomMesg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]; 
    console.log(message);
};

module.exports = {randomMesg};