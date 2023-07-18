const computerboxes = document.getElementsByClassName('cbox')
const userboxes = document.getElementsByClassName('ubox')
let computerplate = document.querySelector('div.computerplate p')
let winline = document.querySelector('div.winline p')
let userplate = document.querySelector('div.userplate p')
function game(arg,argi)
{
    userplate.textContent = arg.querySelector('p').textContent
    let computermarkId = Math.floor(Math.random() * computerboxes.length)
    computerplate.textContent = computerboxes[computermarkId].querySelector('p').textContent
    computerboxes[computermarkId].style.backgroundColor = '#cecece'
    arg.style.backgroundColor = '#cecece'
    for(let i = 0; i < userboxes.length; i++) {userboxes[i].classList.remove('active')}
    if(arg.querySelector('p').textContent == computerboxes[computermarkId].querySelector('p').textContent) {winline.textContent = 'Nobody won :<'}
    else
    {
        if((argi == 0)&&(computermarkId == 1)) {winline.textContent = 'Computer won :>'}
        else if((argi == 0)&&(computermarkId == 2)) {winline.textContent = 'User won :>'}
        else if((argi == 1)&&(computermarkId == 0)) {winline.textContent = 'User won :>'}
        else if((argi == 1)&&(computermarkId == 2)) {winline.textContent = 'Computer won :>'}
        else if((argi == 2)&&(computermarkId == 0)) {winline.textContent = 'Computer won :>'}
        else if((argi == 2)&&(computermarkId == 1)) {winline.textContent = 'User won :>'}
    }
    setTimeout(() =>
    {
        computerplate.textContent = ''
        winline.textContent = ''
        userplate.textContent = ''
        computerboxes[computermarkId].style.backgroundColor = '#fff'
        arg.style.backgroundColor = '#fff'
        for(let i = 0; i < userboxes.length; i++) {userboxes[i].classList.add('active')}
    },3000)
}
document.addEventListener('click', (e) => {for(let i = 0; i < userboxes.length; i++) {if(((userboxes[i] == e.target)||(userboxes[i].querySelector('p') == e.target))&&(userboxes[i].classList.contains('active'))) {game(userboxes[i],i)}}})
