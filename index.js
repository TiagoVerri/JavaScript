let button = document.getElementById('no');
    let height = window.innerHeight - 50;
    let width = window.innerWidth - 50;

    button.addEventListener('mouseover', function () {
        button.style.position = "absolute"
        button.style.top = Math.random() * height + "px";
        button.style.left = Math.random() * width + "px";
    })
function changeTheme()
{
    let box = document.getElementsByClassName('box');
    let buttons = document.getElementsByClassName('btn');
    document.body.classList.toggle('dark');
    box[0].classList.toggle('dark');
    
    for(i = 0; i <= buttons.length; i++)
    {
        buttons[i].classList.toggle('dark');
    }
} 