function startPage() { //indents so i can visualize it
    document.write("<!DOCTYPE html>");
    document.write("<html>");
    document.write("<head>");
    document.write("<meta charset='utf-8'>");
    document.write("<title>Oliver Cabral</title>");
    document.write("<link rel='stylesheet' href='style6-1.css'/>");
    document.write("</head>");
    document.write("<body>");
    document.write("<section>");
}

function endPage() {
    document.write("</section>");
    document.write("</body>");
    document.write("</html>");
}

function newWin(url) {
    var theurl = window.open(url, "search", "width=800, height=600");
}