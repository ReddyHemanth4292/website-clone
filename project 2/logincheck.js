function login()
{
    
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin")
    {
            // window.alert("login successfull");
            location.assign("https://ide.geeksforgeeks.org/index.php");
    }
   else
       {
        window.alert("login failed");
       }
}
    