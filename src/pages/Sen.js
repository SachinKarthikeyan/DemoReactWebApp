import Header  from "../components/Header/Header";
import Search from "../components/Search/Search";
import Rounded from "../components/Rounded/Rounded";
import './Sen.css';

export default function Sen() {
    return (
        <>
            <Header/>
            
            <div className="card">
                <h2 className="text">
                    Sentiment Analysis
                </h2>
                <h3 className="text">
                    Type Your Text, Upload Dataset or Audio
                </h3>
                <div className="searchbar">
                    <Search/>
                </div>
                <div className="samedir">
                    <Rounded text="Analyze" />
                    <Rounded text="Upload"  />
                </div>
            </div>
        </>
    )
}