import React from "react";
import {useNavigate} from "react-router-dom";
import "./BackButton.css";
import { StepBack } from 'lucide-react';
function BackButton() {
    const navigate = useNavigate();
    return(
        <button   className="backButton1" onClick={() => navigate(-1)}><StepBack size={35} strokeWidth={1} /></button>
    );
}
export default BackButton;