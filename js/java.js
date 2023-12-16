var btn = document.getElementById ('btn');
var output = document.getElementById ('output');

var quotes = [
    
    ' “Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best― Marilyn Monroe',
    ' “Be yourself; everyone else is already taken ”',
    ' “Two things are infinite: the universe and human stupidity; and Im not sure about the universe ― Albert Einstein',
    '“So many books, so little time.” ― Frank Zappa' ,
    '“A room without books is like a body without a soul.” ― Marcus Tullius Cicero',
    ' “Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”― Bernard M. Baruch ',
    ' “Youve gotta dance like theres nobody watching Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”― William W. Purkey '
];

btn.addEventListener('click' , function () {
    var randomQuotes = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML= randomQuotes;
})