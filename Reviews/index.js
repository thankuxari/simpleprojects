const reviews = [
    {

        id: 1,
        image:'images/mario.jpg',
        name : 'Luna Vale',  
        job : 'Quantum Data Analyst',
        review:'Recently visited Stellar Sips, and it was a celestial delight! The space-themed ambiance added a cosmic touch. The Nebula Nectar cocktail was an otherworldly burst of flavors. Attentive staff and a stellar atmosphere make this place a must-visit. A celestial escape for your taste buds!'
    },
    {
        id: 2,
        image:'images/kong.jpg',
        name : 'Astrid Nova',  
        job: 'Augmented Reality Developer',
        review:'Had an enchanting experience at Moonlit Emporium! The ambiance feels like a dream, with twinkling lights and whimsical decor. The Mystic Elixir tea was a delightful blend, and the Enchanted Eclairs were pure magic. The staffs warm hospitality made it a truly enchanting escape. Highly recommend this mystical gem! ✨'
    },
    {
        id: 3,
        image:'images/pikachu.jpg',
        name : 'Elysia Everhart',  
        job: 'Sustainability Consultant',
        review:'My recent visit to Serene Meadows Spa was pure bliss! From the tranquil ambiance to the skilled therapists, every moment was a rejuvenating escape. The Aromatherapy Massage melted away stress, leaving me refreshed. A hidden oasis of relaxation - Serene Meadows is a must for those seeking serenity.'
    },
    {
        id: 4,
        image:'images/yoshi.jpg',
        name : 'Caden Skylar',  
        job: 'Cybersecurity Ethicist',
        review:'Dining at Saffron Savor was an absolute delight! The ambiance was elegant, and the staff exuded warmth. The culinary journey was exceptional; each dish showcased a perfect blend of flavors. The Saffron-infused delicacies were a revelation. A dining experience that lingers on the palate and beckons a return visit. Exquisite!'
    },
    {
        id: 5,
        image:'images/luigi.jpg',
        name : 'Lila Rainier',  
        job: 'Virtual Reality Experience Designer',
        review:'My day at Azure Haven Spa was a serene escape from the hustle. The ambiance, adorned with calming hues, set the perfect tone. The Tranquil Retreat massage left me rejuvenated, and the soothing aromas added to the experience. The attentive staff ensured a seamless journey into relaxation. A haven for tranquility!'
    }
];

const profileImg = document.getElementById('profile-img');
const profileName = document.getElementById('name');
const profileJob = document.getElementById('job');
const profileReview = document.getElementById('review');

const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const supriseBtn = document.getElementById('suprise-me');

document.addEventListener('DOMContentLoaded',()=>{
    let currentItem = 0;

    displayReview();

    
    previousBtn.addEventListener('click',()=>{
        currentItem = (currentItem - 1 + reviews.length) % reviews.length;
        displayReview();
    })
    

    nextBtn.addEventListener('click',()=>{
        currentItem = (currentItem + 1) % reviews.length;
        displayReview();
    })


    supriseBtn.addEventListener('click',()=>{
        currentItem = generateRandom();
        displayReview();
    })


    function displayReview(){
        profileImg.src = reviews[currentItem].image;
        profileName.textContent = reviews[currentItem].name;
        profileJob.textContent = reviews[currentItem].job;
        profileReview.textContent = reviews[currentItem].review;
    }

    function generateRandom(){
        return Math.floor(Math.random() * reviews.length);
    }

})