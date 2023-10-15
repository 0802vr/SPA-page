import Page from "../../core/tempates/page";
class MainPage extends Page {
    
    static TextObject={
        maintitle: 'main page vvv'
    }
    constructor(id:string){
        super(id)
        }
    
    render(){
            const title = this.createHeaderTitle(MainPage.TextObject.maintitle);
            this.container.append(title);
            return this.container;

        }
}

export default MainPage;