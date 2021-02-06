var date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();
let day='Morning'

if(hours<12 && hours>0){
     day='Morning';
}
else if (hours>= 12 && hours<16){
    day='Afternoon';
}
else if(hours>=16 && hours<19){
    day='Evening';
}
else{
    day='Night'
}

$(".day").text(day);

var quoteJSON = {
    quote: ["You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
        "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
        "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
        "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
        "Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced.",
        "I can shake off everything as I write; my sorrows disappear, my courage is reborn",
        "A writer is someone for whom writing is more difficult than it is for other people.",
        "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
        "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."

    ],
    author: ["Madeleine L'Engle", "Stephen King", "Mark Twain", "Toni Morrison", "Robert Frost", "Aldous Huxley, Brave New World", "Anne Frank", "Thomas Mann", "Franz Kafka", "John Steinbeck"]
}

function randomNumber() {
    return (Math.floor(Math.random() * 10));
}

var random = randomNumber();
$(".lead").html('<i class="fas fa-quote-left"> </i>'+" "+quoteJSON["quote"][random]+" "+'<i class="fas fa-quote-right"> </i>');
$(".author").text(quoteJSON["author"][random]);

$("#newQuote").on("click", function () {
    var random1 = randomNumber();
    $(".lead").html('<i class="fas fa-quote-left"> </i>'+" "+quoteJSON["quote"][random1]+" "+'<i class="fas fa-quote-right"> </i>');
    $(".author").text(quoteJSON["author"][random1]);

    $("body").css("background-color", "orange");
    $("body").css("color", "white");
    $(".btn").css("background", "orange");
    $(".myJumbotron").css("color", "red");
    $(".myJumbotron").css("background-color", "#ffcba7");
    $(".container").css("background-color", "orange")


});