


//write "getQuotes"
function getQuotes() {
    let quoteArray = [{ image: 'cp_vonnegut.jpg', quote: 'True terror is to wake up one morning and discover that your high school class is running the country.', author: 'Kurt Vonnegut' }, { image: 'cp_groucho.jpg', quote: "I sent the club a wire stating, PLEASE ACCEPT MY RESIGNATION. I DON'T WANT TO BELONG TO ANY CLUB THAT WILL ACCEPT ME AS A MEMBER", author: 'Groucho Marx' }, { image: 'cp_parker.jpg', quote: "This wasn't just plain terrible, this was fancy terrible. This was terrible with raisins in it.", author: 'Dorothy Parker' }, { image: 'cp_twain.jpg', quote: 'If you hold a cat by the tail you learn things you cannot learn any other way.', author: 'Mark Twain' }, { image: 'cp_west.jpg', quote: 'Those who are easily shocked should be shocked more often.', author: 'Mae West' },];


    //set author one
    let author = quoteArray[0].author;
    document.querySelector('#author').textContent = author;

    //set quote one
    let quote = quoteArray[0].quote;
     document.querySelector('#quote').textContent = quote; 
        
    //set pic one
    let pic = quoteArray[0].image;
       document.querySelector('#pic').src = pic;

    
    console.log(author);
    console.log(quoteArray[0]);

    let fwdBtn = document.querySelector('.forward');
    fwdBtn.addEventListener('click', forward);

    let bckBtn = document.querySelector('.back');
    bckBtn.addEventListener('click', back);

    //write forward()
    // if the value of the items is less than 4 add 1 else set to 0
    function forward() {
        for(let i = 0; i < quoteArray.length; i++){
            if( quoteArray[i].author > author ) 
                document.querySelector('#author').textContent = quoteArray[i++ ].author;
                document.querySelector('#quote').textContent = quoteArray[i==].quote;
                document.querySelector('#pic').src = quoteArray[i++].image;
                    
        };
    };
};
// || quoteArray[i].quote > quote || quoteArray[i].pic > pic 
    //write back
    // if the value is greater than 0 minus 1 else set to 4
    function back() {
        document.querySelector('#quote').textContent = quoteArray[0 - 1].quote;
        document.querySelector('#pic').src = quoteArray[0 - 1].image;
        document.querySelector('#author').textContent = quoteArray[0 - 1].author;

    };



//on load get the quotes
window.addEventListener('load', function () {
    console.log("loading");
    getQuotes();


});


