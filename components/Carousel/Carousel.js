class Carousel {
    constructor(carousel) {
        // class essentially begins here
        this.carousel = carousel;

        this.photos;
        this.attachDataCount();
        
        this.leftButton = carousel.querySelector('.left-button');
        this.leftButton.addEventListener('click', () => this.moveLeft());

        this.rightButton = carousel.querySelector('.right-button');
        this.rightButton.addEventListener('click', () => this.moveRight());

        this.currentIndex;
        this.getCurrentIndex();

        this.carousel.addEventListener('click', () => this.getCurrentIndex());
    }

    attachDataCount() {
        let count = 1;
        this.photos = Array.from(this.carousel.children).filter(photo => {
            if(photo.src) {
                photo.setAttribute('data-index', count);

                if(photo.dataset.index == 1) {
                    // code to setup the carousel because display functionality not working in LESS
                    // should only ever run once
                    photo.setAttribute('class', 'active-photo');
                    photo.setAttribute('style', 'display: block');
                }
                count++;
                return photo;
            }
        });
    }

    moveLeft(){
        this.photos.forEach(photo => {
            photo.setAttribute('style', 'display: none');
          });

        if(this.currentIndex == 1) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 1) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 4) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }

        if(this.currentIndex == 4) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 4) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 3) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }

        if(this.currentIndex == 3) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 3) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 2) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }

        if(this.currentIndex == 2) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 2) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 1) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }
    }

    moveRight() {
        this.photos.forEach(photo => {
            photo.setAttribute('style', 'display: none');
          });

        if(this.currentIndex == 1) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 1) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 2) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }

        if(this.currentIndex == 2) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 2) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 3) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }

        if(this.currentIndex == 3) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 3) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 4) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }

        if(this.currentIndex == 4) {

            this.photos.forEach(photo => {
                if(photo.dataset.index == 4) {
                    photo.classList.remove('active-photo');
                }

                if(photo.dataset.index == 1) {
                    photo.setAttribute('style', 'display: block');
                    photo.classList.add('active-photo');
                }
            });
        }
    }

    getCurrentIndex() {
        this.currentIndex = document.querySelector('.active-photo');
        this.currentIndex = this.currentIndex.dataset.index;
    }
}

let carousel = document.querySelector('.carousel');

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
