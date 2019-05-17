class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }

    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => {
      return new TabCard(card);
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {
      this.selectTab();
    }); 
  } 

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => {
      tab.classList.remove('active-tab');
    });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    console.log(cards);

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => {
      card.setAttribute('style', 'display: none');
    });
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    this.selectCard();
  }

  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.setAttribute('style', 'display: flex;');
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

// create articleGenerator class
class ArticleGenerator {
  constructor(articleData) {
    // article data
    this.articleData = articleData;
    this.category = this.articleData.category;
    this.headline = this.articleData.headline;
    this.imgSrc = this.articleData.imgSrc;
    this.authorName = this.articleData.author;

    // parent div
    this.cardContainer = document.createElement('div');

    // construct article
    this.constructCardContainer();
    this.constructHeadline();
    this.constructAuthor();
  }

  constructCardContainer() {
    this.cardContainer.setAttribute('class', 'card');
    this.cardContainer.setAttribute('data-tab', `${this.category}`);
  }

  constructHeadline() {
    const headline = document.createElement('div');
    headline.setAttribute('class', 'headline');
    headline.textContent = this.headline;
    this.cardContainer.append(headline);
  }

  constructAuthor() {
    // create author structure
    this.author = document.createElement('div');
    this.author.setAttribute('class', 'author');

    this.constructAuthorImage();
    this.constructAuthorName();

    this.cardContainer.appendChild(this.author);
  }

  constructAuthorImage() {
    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'img-container');

    const image = document.createElement('img');
    image.src = this.imgSrc;
    imageContainer.append(image);

    this.author.appendChild(imageContainer);
  }

  constructAuthorName() {
    const authorsName = document.createElement('span');
    authorsName.textContent = this.authorName;
    this.author.appendChild(authorsName);
  }
}


// dummy article data
const articleData = [
  {
    headline: 'Flutter vs React Native vs Xamarin',
    author: 'By MAX GOODBOYE',
    category: 'bootstrap',
    imgSrc: './assets/max.jpg'
  },
  {
    headline: 'Google Developers Conference',
    author: "By SIR RUFF'N'STUFF",
    category: 'technology',
    imgSrc: './assets/sir.jpg'
  },
  {
    headline: 'The "THIS" keyword',
    author: 'By BONES R. LIFE',
    category: 'javascript',
    imgSrc: './assets/bones.jpg'
  },
]

// target the cards-container class
let cardsContainer = document.querySelector('.cards-container');

articleData.forEach(article => {
  let newArticle = new ArticleGenerator(article);
  cardsContainer.append(newArticle.cardContainer);
});

let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  new TabLink(tab);
});