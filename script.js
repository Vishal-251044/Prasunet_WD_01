const toggleBtn= document.querySelector('.toggle_btn')
const toggleBtnIcon= document.querySelector('.toggle_btn i')
const dropDownMenu= document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


const reviews = [
  {
    text: "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
    rating: 4.5,
    memberImage: "assets/member1.avif",
    memberName: "Vishal Chavan",
    memberOccupation: "Software Developer"
  },
  {
    text: "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
    rating: 5,
    memberImage: "assets/member2.avif",
    memberName: "Priya Sharma",
    memberOccupation: "Marketing Manager"
  },
  {
    text: "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
    rating: 4,
    memberImage: "assets/member3.avif",
    memberName: "Ravi Patel",
    memberOccupation: "Accountant"
  }
];

let currentIndex = 0;

function displayReview(index) {
  const review = reviews[index];
  document.getElementById('reviewText').textContent = review.text;
  
  const reviewRating = document.getElementById('reviewRating');
  reviewRating.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('i');
    if (i <= Math.floor(review.rating)) {
      star.classList.add('ri-star-fill');
    } else if (i === Math.ceil(review.rating)) {
      star.classList.add('ri-star-half-fill');
    } else {
      star.classList.add('ri-star-line');
    }
    reviewRating.appendChild(star);
  }

  document.getElementById('memberImage').src = review.memberImage;
  document.getElementById('memberName').textContent = review.memberName;
  document.getElementById('memberOccupation').textContent = review.memberOccupation;
}

document.getElementById('nextArrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  displayReview(currentIndex);
});

document.getElementById('prevArrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  displayReview(currentIndex);
});

// Initial display
displayReview(currentIndex);
