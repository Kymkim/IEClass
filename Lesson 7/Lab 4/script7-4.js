var title = "Oliver Cabral";
let features = [
    "Space",
    "Bandwidth",
    "Email Accounts",
    "FTP Accounts",
    "Web Stats",
    "Sub Domains",
    "PHP/MySQL",
    "Control Panel",
    "Monthly",
    "Annual"
];
let shared = [
    "500MB",
    "2GB",
    "10",
    "5",
    "Included",
    "10",
    "Yes",
    "Yes",
    "$12",
    "$100"
];
let dedicated = [
    "25GB",
    "30GB",
    "Unlimited",
    "Unlimited",
    "Included",
    "Unlimited",
    "Yes",
    "Yes",
    "$100",
    "$1,200"
];

function startPage()
{
    document.write("<!DOCTYPE html>");
    document.write("<html>");
    document.write("<meta charset='utf-8' />");
    document.write("<title>" + title + "</title>");
    document.write("<link rel='stylesheet' href='style7-4.css' />");
    document.write("</head>");
    document.write("<body>");
    document.write("<section>");
}

function endPage()
{
    document.write("</section>");
    document.write("</body>");
    document.write("</html>");
}

function topMenu()
{
    let links = [
        "<a href='lab7-4.html'> Home </a>",
        "<a href='prices.html'> Prices </a>",
        "<a href='services.html'> Services </a>",
        "<a href='signup.html'> Sign Up </a>"
    ];

    document.write("<nav>");
    for(var i = 0; i < 4; i++)
    {
        document.write(links[i]);
    }
    document.write("</nav>");
}