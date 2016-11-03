

let fwdBtn = document.querySelector('.forward');
let bckBtn = document.querySelector('.back');
//write "getQuotes"

function getQuotes() {
    let quoteArray = [{ image: 'cp_vonnegut.jpg', quote: 'True terror is to wake up one morning and discover that your high school class is running the country.', author: 'Kurt Vonnegut' }, { image: 'cp_groucho.jpg', quote: "I sent the club a wire stating, PLEASE ACCEPT MY RESIGNATION. I DON'T WANT TO BELONG TO ANY CLUB THAT WILL ACCEPT ME AS A MEMBER", author: 'Groucho Marx' }, { image: 'cp_parker.jpg', quote: "This wasn't just plain terrible, this was fancy terrible. This was terrible with raisins in it.", author: 'Dorothy Parker' }, { image: 'cp_twain.jpg', quote: 'If you hold a cat by the tail you learn things you cannot learn any other way.', author: 'Mark Twain' }, { image: 'cp_west.jpg', quote: 'Those who are easily shocked should be shocked more often.', author: 'Mae West' },];

        //set pic one
         let pic = document.querySelector('#pic').src = quoteArray[0].image;
        //set quote one
        let quote = document.querySelector('#quote').textContent = quoteArray[0].quote;
        // };
        //set author one
        let author = document.querySelector('#author').textContent = quoteArray[0].author;
    console.log(quoteArray[0]);

};

//on load get the quotes
window.addEventListener('load', function () {
    console.log("loading");
    getQuotes(); 
});


