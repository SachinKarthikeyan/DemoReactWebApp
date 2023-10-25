import Header  from "../components/Header/Header";
import Drag from "../components/Drag/Drag";
import './Churn.css';

export default function Churn() {
    return (
        <>
            <Header/>
            <div className="card">
                <h2>
                    Churn Prediction
                </h2>
                <Drag/>
            </div>
        </>
    )
}