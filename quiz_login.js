function adduser()
{
    var player1 = document.getElementById("player1_login").value;
    var player2 = document.getElementById("player2_login").value;
    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);
    window.location = "main_page.html";
}