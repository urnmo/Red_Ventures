let current = 0;
let count = 0;
let quoteArray = [{ image: 'cp_vonnegut.jpg',
                    imagecrop: 'cp_vonnegut2.jpg',
					quote: 'True terror is to wake up one morning and discover that your high school class is running the country.', 
					author: '- Kurt Vonnegut' }, 
				{ image: 'cp_groucho.jpg', 
                    imagecrop:'cp_groucho2.jpg',
					quote: "I sent the club a wire stating, 'Please accept my resignation. I do not want to belong to any club that will accept me as a member.'", 
					author: '- Groucho Marx' }, 
				{ image: 'cp_parker.jpg',
                    imagecrop: 'cp_parker2.jpg', 	
					quote: "This wasn't just plain terrible, this was fancy terrible. This was terrible with raisins in it.", 
					author: '- Dorothy Parker' }, 
				{ image: 'cp_twain.jpg', 
                    imagecrop: 'cp_twain2.jpg',
					quote: 'If you hold a cat by the tail you learn things you cannot learn any other way.', 
					author: '- Mark Twain' }, 
				{ image: 'cp_west.jpg',
                    imagecrop: 'cp_west2.jpg',
					quote: 'Those who are easily shocked should be shocked more often.', 
					author: '- Mae West' },];
let lastIndex = quoteArray.length - 1

function likes(){
    count = count++;
    document.querySelector("#like").textContent = count;
    return count++;
};

function setQuote(forIndex) {

    let author = quoteArray[current].author;
    let quote = quoteArray[current].quote;
    let pic = quoteArray[current].image;
    let pic2 = quoteArray[current].imagecrop;
    
    document.querySelector('#author').textContent = author;
    document.querySelector('#quote').textContent = quote;    
    document.querySelector('#pic').src = pic;
    document.querySelector('#piccrop').src = pic2;  
};

    // if the value of the items is less than length of array add 1, else set to 0
    function forward() {

        if (current < lastIndex) {
            current = current+1;
        } else {
            current = 0;    
        }
        setQuote(current)
        return current;
    }

    // if the value is greater than 0 else set to array length
    function back() {
        if (current > 0) {
            current = current-1;
        } else {
            current = lastIndex;
        };
        setQuote(current)
        return current;
    };
    
    function initializeButtons() {
    
    	let fwdBtn = document.querySelector('.forward');
	    let bckBtn = document.querySelector('.back');
        let likeBtn = document.querySelector('#like');
	    
	    fwdBtn.addEventListener('click', forward);
    	bckBtn.addEventListener('click', back);
        likeBtn.addEventListener('click', likes);
    }
    
//on load get the quotes
window.addEventListener('load', function () {
    initializeButtons();
    setQuote(0);
});

