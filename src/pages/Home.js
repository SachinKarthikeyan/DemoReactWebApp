import Header  from "../components/Header/Header";
import MainButton from "../components/MainButton/MainButton";
import Image from "../components/Image/Image";
import './Home.css'

export default function Home() {
    return (
        <>
            <Header/>
        
            <div className="stacked-centered-container">
                <div className="stacked-centered-content">
                    <div className="box">
                        <h2>
                            Make Use Of Our Features For Analysing
                        </h2>
                    </div>
                    <div className="box">
                        <div className="button-container">
                            <MainButton to="/sen" text="Sentiment analysis" />
                            <MainButton to="/churn" text="Churn Prediction" />
                            <MainButton to="/social" text="Social Listening" />
                            <MainButton to="/fake" text="Fake Detection" />
                            <MainButton to="/meme" text="Meme Analysis" />
                        </div>
                    </div>
                </div>
            </div>
            
         
        </>
    )
}

