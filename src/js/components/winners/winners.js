import { WinnersService } from './../../services/winners.service';

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService();
        this._winners = null;
    }

    async beforeRender() {
        this._winners = await this._winnersService.getWinners(1, 15);

    } 

    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style}
            </style>

            <!-- Component html -->
            <div class="title"><h1>WINNERS</h1></div>
            <row>
                <div class="winners-container col-lg-10 col-sm-5">
            
                </div>
            </row>
        `;
    }
    get style() {
        return `
            .winners-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .winner {
                margin: 5 px;
                width: 90px;
                height: 90px;
            }
            img {
                max-width: 80%;
                text-align:center;
                display:block; 
                margin: 0 auto ;           
                
            }
        `;
    }

    afterRender() {
        const container = document.querySelector('.winners-container');
        for ( let i = 0; i < this._winners.winners.length; i++) {
            container.insertAdjacentHTML('beforeEnd', `<div class="winner"><img src="${this._winners.winners[i].member_id.user_id.avatar}"><div></div>`);
        }
    }

}