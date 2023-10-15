import Page from "../../core/tempates/page";
class SettingPage extends Page {
    
    static TextObject={
        maintitle: 'SettingPage'
    }
    constructor(id:string){
        super(id)
        }
    
    render(){
            const title = this.createHeaderTitle(SettingPage.TextObject.maintitle);
            this.container.append(title);
            return this.container;

        }
}

export default SettingPage;