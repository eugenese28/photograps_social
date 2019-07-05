import { NewsService } from './../../services/news.service';

export class NewsComponent {
    constructor() {
        this._newsService = new NewsService();
        this._news = null;
    }

    async beforeRender() {
        this._news = await this._newsService.getNews();
    } 

    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style}
            </style>

            <!-- Component html -->
            <div class="title"><h1>NEWS</h1></div>
            <div class="news-container">

            <img src="${this._news.news[0].pictures[0].url}">

            </div>
        `;
    }
    get style() {
        return `
            img {
                width: 300px;
            }
            .news-container {
                height: 400px;
                width: 100%;
            }
        `;
    }

}

