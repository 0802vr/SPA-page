import MainPage from "../main";
import SettingPage from "../settings";
import StatisticsPage from "../statistics";
import Page from "../../core/tempates/page";
import Header from "../../core/conponents";
import ErrorPage, {ErrorTypes} from "../error";

export  const enum idPageS {
    MainPage = 'main-page',
    SettingPage = 'setting-page',
    StatisticsPage = 'statistics-page'
}

class App {
    private static container:HTMLElement = document.body;
    private static defaultPageId: string = 'currantPage'
    private initialPage: MainPage;
    private header: Header;

    static renderNewPage(idPage:string){
        const currentPage = document.querySelector(`#${App.defaultPageId}`)
        if(currentPage){
            currentPage.remove()
        }
        let page: Page | null = null;
        if( idPage === idPageS.MainPage)
        {
            page = new MainPage(idPage)
        }
        else if( idPage ===idPageS.SettingPage)
        {
            page = new SettingPage(idPage)
        }
        else if( idPage === idPageS.StatisticsPage)
        {
            page = new StatisticsPage(idPage)
        }
        else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404)
        }
        if(page)
        {
            const pageHtml = page.render();
            pageHtml.id = App.defaultPageId;
            App.container.append(pageHtml)
        }
    }
    private enableRouteChange(){
        window.addEventListener('hashchange', ()=> {
            
            const hash = window.location.hash.slice(1);
             App.renderNewPage(hash)
        })
    }
    constructor(){
         
        this.initialPage = new MainPage("main-page")
        this.header = new Header("header", "header_container")
    }
    
    run(){
        App.container.append(this.header.render())
        App.renderNewPage('main-page');       
        this.enableRouteChange();
    }
}
export default App;