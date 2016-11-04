
let current = 0;
let quoteArray = [{ image: 'cp_vonnegut.jpg', quote: 'True terror is to wake up one morning and discover that your high school class is running the country.', author: 'Kurt Vonnegut' }, { image: 'cp_groucho.jpg', quote: "I sent the club a wire stating, PLEASE ACCEPT MY RESIGNATION. I DON'T WANT TO BELONG TO ANY CLUB THAT WILL ACCEPT ME AS A MEMBER", author: 'Groucho Marx' }, { image: 'cp_parker.jpg', quote: "This wasn't just plain terrible, this was fancy terrible. This was terrible with raisins in it.", author: 'Dorothy Parker' }, { image: 'cp_twain.jpg', quote: 'If you hold a cat by the tail you learn things you cannot learn any other way.', author: 'Mark Twain' }, { image: 'cp_west.jpg', quote: 'Those who are easily shocked should be shocked more often.', author: 'Mae West' },];

//write "getQuotes"
function getQuotes() {

    //set author one
    let author = quoteArray[current].author;
    document.querySelector('#author').textContent = author;

    //set quote one
    let quote = quoteArray[current].quote;
    document.querySelector('#quote').textContent = quote;

    //set pic one
    let pic = quoteArray[current].image;
    document.querySelector('#pic').src = pic;

    let fwdBtn = document.querySelector('.forward');
    fwdBtn.addEventListener('click', forward);

    let bckBtn = document.querySelector('.back');
    bckBtn.addEventListener('click', back);
};


 //write forward()
    // if the value of the items is less than length of array add 1, else set to 0
    function forward() {

        if (current != quoteArray.length) {
            current = current++;
            document.querySelector('#author').textContent = quoteArray[current].author;
            document.querySelector('#quote').textContent = quoteArray[current].quote;
            document.querySelector('#pic').src = quoteArray[current].image;

        } else {
            current = 0;
            document.querySelector('#author').textContent = quoteArray[current].author;
            document.querySelector('#quote').textContent = quoteArray[current].quote;
            document.querySelector('#pic').src = quoteArray[current].image;
        }
        console.log(current);
        return current++;
    }

    //write back
    // if the value is greater than 0 else set to array length
    function back() {
        if (current != 0) {
            current = current--;
            document.querySelector('#author').textContent = quoteArray[current].author;
            document.querySelector('#quote').textContent = quoteArray[current].quote;
            document.querySelector('#pic').src = quoteArray[current].image;

        } else {
            current = current.length;
            document.querySelector('#author').textContent = quoteArray[current].author;
            document.querySelector('#quote').textContent = quoteArray[current].quote;
            document.querySelector('#pic').src = quoteArray[current].image;
        };
        console.log(current);
        return current--;
    };
//on load get the quotes
window.addEventListener('load', function () {
    console.log("loading");
    getQuotes();
});
