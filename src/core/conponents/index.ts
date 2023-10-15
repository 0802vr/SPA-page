import Component from "../tempates/component";
import { idPageS } from "../../pages/app";

const btns = [
    {
        id:idPageS.MainPage,
        Text:"main"
    },
    {
        id:idPageS.SettingPage,
        Text:"setting"
    },
    {
        id:idPageS.StatisticsPage,
        Text:"static"
    },
    
]

class Header extends Component {
    constructor(tagName:string, className:string){
        super(tagName, className)
    }
    renderPageBTN() {
        const pageBTN = document.createElement('div');
        btns.forEach((btn) => {
            const btnElement =  document.createElement('a');
            btnElement.href = `#${btn.id}`;
            btnElement.innerHTML = btn.Text;
            pageBTN.append(btnElement);

        })
        this.container.append(pageBTN)
    }
    render() {
        this.renderPageBTN()
        return this.container;
    }
}
export default Header;