reviews = [
    {
        id: 1,
        name: "Mohammad Abdulrahim",
        department: "Front-end Developer",
        image: "https://media.licdn.com/dms/image/C4E03AQFxFwdZey6BVw/profile-displayphoto-shrink_800_800/0/1640765379532?e=2147483647&v=beta&t=EzAGJL1RgnqzoE5s_4A1vH7VoGnxjRRoBIoFRo2mDmo",
        details:
         " Frontend Developer working in the computer software industry Skilled in Bootstrap, Cascading Style Sheets (CSS), HTML,and JavaScript. A Bachelor's degree in Information Technology from Al-Rayan University"
    },
    {
        id: 2,
        name: "Abubker Darwish",
        department: "front-end",
        image: "images/AbubkerDarwish.png",
        details:
        `Experienced Frontend Developer with
        a demonstrated history of working in
        the human resources industry.`
    },
    {
        id: 3,
        name: "Ahmed Bahaggag",
        department: "front-end",
        image: "images/AhmedBahaggag.jpeg",
        details:
          `Patinated lead engineer with dedicated
          and strong skills in building SaaS multitenant
          products and managing teams to achieve business
          and technical goals. I've been in this area for about 7 years
          and saw multiple stages in startup growth
          in which I'm focused on building decoupled, maintained,
          scalable, and easy to change products that fulfilled market needs.`
    },
    {
        id: 4,
        name: "Kamal Soni",
        department: "Principle Engineer",
        image: "images/KamalSoni.png",
        details:
          ` At Jisr, I am leading team of ~45 engineers, which is divided across
         6 squads Jisr HR is a multi-cloud (AWS, OCI, and STC) SaaS application
         built on Ruby on Rails, React, and Postgres My focus other than product
          development was mainly on security, scalability, performance, and ease
           of management of our multi-cloud system.`}
]
// select items

const personName = document.getElementById('name');
const department = document.getElementById('department');
const person_image = document.getElementById('person-image');
const details = document.getElementById('details');

const arrowRight = document.getElementById('arrow-left');
const arrowLeft = document.getElementById('arrow-right');
const randomBtn = document.getElementById('btn-random');

// starting item
let itemCurrent = 0;

function refresh(){
    const item = reviews[itemCurrent];
    personName.textContent = item.name;
    department.textContent = item.department;
    person_image.src = item.image;
    details.textContent = item.details;
};
// when loaded the windows
window.addEventListener("DOMContentLoaded",refresh());
arrowLeft.addEventListener('click', function(){
    if(itemCurrent == reviews.length - 1){
        itemCurrent = 0;
    }
    else {
        itemCurrent ++;
    }
    refresh()
});

arrowRight.addEventListener('click', function(){
  if(itemCurrent == 0){
      itemCurrent = 0;
  }
  else {
      itemCurrent --;
  }
  refresh()
});
randomBtn.addEventListener('click', function(){
  itemCurrent = Math.floor(Math.random() * reviews.length);
  refresh()
})
