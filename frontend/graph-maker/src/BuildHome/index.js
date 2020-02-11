import React from 'react';
import "./style.css"

class BuildHome extends React.Component{
  
  state = {
    data_type: "csv",
    interpreted_data: [],
    raw_data: ""
  }

  interpret_data = (raw_data, data_type) => {
    let lines = raw_data.split("\n");
    let i = [];
    if(data_type === "csv")
      i = lines.map(l=>l.split(","));
    else if(data_type === "space_seperated_values")
      i = lines.map(l=>l.split(" "));
    else {
      console.log("Invalid Data Type" + this.data_type);
      i = []
    }
    this.setState({interpreted_data: i});
  }

  handleDataTypeChange = (event) => {
    let new_data_type = event.target.value;
    this.setState({data_type: new_data_type});
    this.interpret_data(this.state.raw_data, new_data_type);
  }

  handleDataUpdate = (event) => {
    let raw_data = event.target.value;
    this.setState({raw_data: raw_data});
    this.interpret_data(raw_data, this.state.data_type);
  }

  render_interpreted_data = () => {
    if (this.state.interpreted_data.length < 1 || this.state.interpreted_data[0].length < 1) 
      return <p>No Data has been entered.</p>;
    let header = this.state.interpreted_data[0]; //first line of data
    let body = this.state.interpreted_data.filter((element, index) => index > 0); //the remaining lines
    

    return (<table className="table-scroll" id="interpretation">
      {/*create headers*/}
      <thead>
      <tr>
        {header.map( (element,index) => <th key={index}>{element}</th>)}
      </tr>
      </thead>
      <tbody>
      {body.map( (line, i) => 
        (<tr key={i}>
          {line.map((element, i2) => <td key={i2+i}>{element}</td>)}
        </tr>)    
      )}
      </tbody>
      </table>);
    
  }


  render() {
    return (<div>
      <div className="row">
      <div className="data-column">
        <div className="row">
          <label htmlFor="data_file">Upload Data: </label>
          <input id="data_file" type="file" />
        </div>
        <select id="data_type" onChange={this.handleDataTypeChange}>
          <option value="csv">Comma Seperated Values (CSV)</option>
          <option value="space_seperated_values">Space Seperated Values </option>
        </select>
        <textarea id="data" rows="20" cols="50" onChange={this.handleDataUpdate}/>

        {/*interpretation of data*/}
        {this.render_interpreted_data()}
      </div>
      </div>
    </div>)
  }

}

export default BuildHome;
