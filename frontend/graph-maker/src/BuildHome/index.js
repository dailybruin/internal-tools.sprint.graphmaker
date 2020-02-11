import React from 'react';
import "./style.css"
import { VictoryBar, VictoryChart, Bar } from "victory";
import Notepad from "../Notepad";
import Graphpad from "../Graphpad";

const DATA_TYPES = {
  SPACE_SEPERATED_VAUES: "Space Seperated Values",
  CSV: "Comma Seperated Values"
};
const CHART_TYPES = {
  BAR: 0,
  STACKED_BAR: 1,
}

/*
Idea for structuring:
  index: 
    * Datapad
    * OptionPad
    * Graphpad
  
  Datapad = data entry component
     provides: interpreted_data as a jagged array

  OptionPad = customize graph
     List of objects of functions for each chart type.
      methods: can_use_data(data), get_customizable_features(data), generate_victory_chart_format(data, options)
     provides: graph pad data, **Buffering**
       what is buffering: lets say someone updates the data and suddenly the graph type is invalid,
        then optionpad will save the old data, old configuration and will mute the graph and the options, effectively freezing them
        until that graph type is available again or until you update graph type.
      optionpad also keeps all your old configurations for different types.

  Graphpad = render victory graph using OptionPad Data

*/

class BuildHome extends React.Component{
  
  state = {
    style: {}
  }


  render() {
    return (<div>
      <div className="row">
        <Notepad onDataUpdate={(data) => this.setState({data: data})}/>
        <div className="chart-column"> 
          <Graphpad/>
        </div>
      </div>
    </div>)
  }

}

export default BuildHome;
