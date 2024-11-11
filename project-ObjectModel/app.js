class Game
{
    constructor()
    {
        this.computerboxes = document.getElementsByClassName('cbox');
        this.userboxes = document.getElementsByClassName('ubox');
        this.computerplate = document.querySelector('div.computerplate p');
        this.winline = document.querySelector('div.winline p');
        this.userplate = document.querySelector('div.userplate p');
        this.init();
    }

    playGame(userBox, userIndex)
    {
        this.userplate.textContent = userBox.querySelector('p').textContent;
        let computerMarkId = Math.floor(Math.random() * this.computerboxes.length);
        this.computerplate.textContent = this.computerboxes[computerMarkId].querySelector('p').textContent;
        this.computerboxes[computerMarkId].style.backgroundColor = '#cecece';
        userBox.style.backgroundColor = '#cecece';
        this.deactivateUserBoxes();
        if(userBox.querySelector('p').textContent === this.computerboxes[computerMarkId].querySelector('p').textContent) { this.winline.textContent = 'Nobody won :<'; }
        else { this.determineWinner(userIndex, computerMarkId); }
        setTimeout(() => { this.resetGame(computerMarkId, userBox); }, 3000);
    }

    deactivateUserBoxes()
    {
        for(let i = 0; i < this.userboxes.length; i++)
        {
            this.userboxes[i].classList.remove('active');
        }
    }

    determineWinner(userIndex, computerMarkId)
    {
        if((userIndex === 0 && computerMarkId === 1) || (userIndex === 1 && computerMarkId === 2) || (userIndex === 2 && computerMarkId === 0)) { this.winline.textContent = 'Computer won :>'; }
        else { this.winline.textContent = 'User  won :>'; }
    }

    resetGame(computerMarkId, userBox)
    {
        this.computerplate.textContent = '';
        this.winline.textContent = '';
        this.userplate.textContent = '';
        this.computerboxes[computerMarkId].style.backgroundColor = '#fff';
        userBox.style.backgroundColor = '#fff';
        this.activateUserBoxes();
    }

    activateUserBoxes()
    {
        for (let i = 0; i < this.userboxes.length; i++) {
            this.userboxes[i].classList.add('active');
        }
    }

    init()
    {
        document.addEventListener('click', (e) =>
        {
            for(let i = 0; i < this.userboxes.length; i++)
            {
                if((this.userboxes[i] === e.target || this.userboxes[i].querySelector('p') === e.target) && this.userboxes[i].classList.contains('active'))
                {
                    this.playGame(this.userboxes[i], i);
                }
            }
        });
    }
}

const gameInstance = new Game();