var author = "Oliver Cabral";
function menu(){
    var link1 = "<li><a href = 'lab4-3.html'>Home</a>";
    var link2 = "<li><a href = 'dynamic.html'>Page 2</a>";
    document.write("<ul>");
    document.write(link1 + link2);
    document.write("<ul>");
}
function footer(){
    document.write("Page created by: " + author + " - Web Design")
}