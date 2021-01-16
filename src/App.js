import React from "react";
import { useRecoilValue } from "recoil";
 
import CardBoard from './components/card_board'
import HandleCardList from "./components/handle_card_list";

import { handleCardDataStore } from "./store";

import "antd/dist/antd.css";
  
import "./App.css";

const App = () => { 
    const handleCard = useRecoilValue(handleCardDataStore);
  
    return (
        <div className="App"> 
            <CardBoard />
            <HandleCardList cardData={handleCard} />
        </div>
    );
};

export default App;
