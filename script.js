document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;

    const participants = [
        { "name": "snowflakes", "giftRecipient": "summanth", imageurl:"images/snow.jpg"},
        { "name": "merrychristmas", "giftRecipient": "VidyaSree", imageurl:"images/merrychristmas.jpg"},
        { "name": "candy", "giftRecipient": "Sayantan", imageurl:"images/Candy.jpg"},
        { "name": "santaclaus", "giftRecipient": "Sai", imageurl:"images/santaclaus.png"},
        { "name": "present", "giftRecipient": "Pavana", imageurl:"images/gifts.png"},
        { "name": "garland", "giftRecipient": "Preeti", imageurl:"images/garland.jpg"},
        { "name": "holiday", "giftRecipient": "Pradeep", imageurl:"images/image9.png"},
        { "name": "cupcake", "giftRecipient": "Nithin", imageurl:"images/cupcake.jpg"},
        { "name": "christmaseve", "giftRecipient": "Akanksha", imageurl:"images/eve.jpg"},
        { "name": "holidayparty", "giftRecipient": "Harish", imageurl:"images/image6.png"},
        { "name": "carols", "giftRecipient": "Devika", imageurl:"images/carols.jpg"},
        { "name": "jinglebell", "giftRecipient": "Sanjukta", imageurl:"images/jinglebell.jpg"},
        { "name": "snowglobe", "giftRecipient": "Ganeshan", imageurl:"images/snowglobe.jpg"},
        { "name": "festive season", "giftRecipient": "Varuni", imageurl:"images/image18.png"},
        { "name": "jesus", "giftRecipient": "Harika", imageurl:"images/jesus.jpg"},
        { "name": "angel", "giftRecipient": "Supradeep", imageurl:"images/angel.jpg"},
        { "name": "clara", "giftRecipient": "Abdullah", imageurl:"images/merry.png"},
        { "name": "snowmen", "giftRecipient": "Renjusha", imageurl:"images/snowmen.jpg"},
        { "name": "holly", "giftRecipient": "Yugo jyoti", imageurl:"images/holly.jpg"},
        { "name": "christamstree", "giftRecipient": "Seema", imageurl:"images/trees.jpg"},
        { "name": "candles", "giftRecipient": "Boopathi", imageurl:"images/candels.jpg"},
        { "name": "joy", "giftRecipient": "Sithun", imageurl:"images/joy.jpg"},
        { "name": "reindeer", "giftRecipient": "Akhila", imageurl:"images/reindeer.webp"},
        { "name": "blessings", "giftRecipient": "Pooja", imageurl:"images/bless.jpg"},
        { "name": "christmasstar", "giftRecipient": "Usha", imageurl:"images/star.jpg"}
    ];

    const cardContainer = document.getElementById("card-container");

    // Render each participant's card
    participants.forEach((participant) => {
        const cardItem = document.createElement("li");
        cardItem.classList.add("card-item");
        cardItem.innerHTML = `
            <a href="#" class="card">
                <p class="card__descr">${participant.name}</p>
                <img src=${participant.imageurl} class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header-text">
                        <h3 class="card__title" style="display: none;">${participant.name}</h3>
                    </div>
                    <input type="text" class="card-name-input" placeholder="Enter Name..." />
                    <button class="send-pdf-btn">Send PDF</button>
                </div>
            </a>
        `;
        cardContainer.appendChild(cardItem);
    });

    const sendPdfButtons = document.querySelectorAll('.send-pdf-btn');
    sendPdfButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const card = event.target.closest('.card-item');
            const input = card.querySelector('.card-name-input');
            const name = input.value.trim();

            if (!name) {
                alert("Please enter a name!");
                return;
            }

            const participant = participants.find(p => p.name === name);
            if (!participant) {
                alert("Invalid name entered!");
                return;
            }

            // Disable all other cards
            const allCards = document.querySelectorAll('.card-item');
            allCards.forEach(otherCard => {
                const otherButton = otherCard.querySelector('.send-pdf-btn');
                const otherInput = otherCard.querySelector('.card-name-input');
                const otherName = otherCard.querySelector('.card__title').textContent.trim();

                if (otherName !== name) {
                    otherButton.disabled = true;
                    otherInput.disabled = true;
                }
            });

            const doc = new jsPDF();

            const pageWidth = doc.internal.pageSize.width;
            let yPosition = 20;
            const marginLeft = 20;

           
            const imgUrl = participant.imageurl; 
            const imgWidth = 180; 
            const imgHeight = 80; 
            const imgX = (pageWidth - imgWidth) / 2; 
            const imgY = 10; 
            doc.addImage(imgUrl, 'JPEG', imgX, imgY, imgWidth, imgHeight);

            yPosition += imgHeight + 10; // Update yPosition after the image

            // Title and messages
            doc.setFont("helvetica", "normal");
            doc.setFontSize(16);
            doc.setTextColor(255, 0, 0); 
            doc.text(`Hello ${name}`, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 20;

            let message1 = `'Tis the season to be jolly, and our Christmas 
            party is the perfect place to celebrate!`;
            doc.setTextColor(0, 128, 0); 
            doc.text(message1, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 20;

            let message2 = `Get ready to jingle and mingle with your
             colleagues at our festive office Christmas celebration.`;
            doc.setTextColor(0, 0, 255); 
            doc.text(message2, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 20;

            let message5 = `Deck the halls, and remember to grab a 
            gift for ${participant.giftRecipient}!`;
            doc.text(message5, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 20;

            yPosition += 10;
            doc.setFont("helvetica", "bold");
            doc.setTextColor(255, 165, 0); 
            doc.text(`Wrapped it once, and then once more,`, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 12;
            doc.text(`Tape stuck to me, not the floor.`, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 12;
            doc.text(`By the time I’m finally through,`, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 12;
            doc.text(`The gift’s unwrapped by YOU-KNOW-WHO!`, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 20;

            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0); 
            doc.text(`Thanks, Innovation & Technology | Global HR`, pageWidth / 2, yPosition, { align: 'center' });

            doc.save(`${name}_gift.pdf`);

            setTimeout(() => {
                card.remove(); 
            }, 500);
        });
    });
});
