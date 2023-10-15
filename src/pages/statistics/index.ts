import Page from "../../core/tempates/page";
class StatisticsPage extends Page {
    
    static TextObject={
        maintitle: 'StatisticsPage'
    }
    constructor(id:string){
        super(id)
        }
    
    render(){
            const title = this.createHeaderTitle(StatisticsPage.TextObject.maintitle);
            this.container.append(title);
            return this.container;

        }
}

export default StatisticsPage;