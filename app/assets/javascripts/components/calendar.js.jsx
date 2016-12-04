let Calendar = React.createClass({
  getInitialState() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      day: new Date().getDay()
    };
  },

  lastDay(){
    return new Date(this.state.year, this.state.month + 1, 0).getDate();
  },

  days(){
    let days = [];
    for (let i = 1; i <= this.lastDay(); i++) {      
      days.push(<Day key={i} date={i} year={this.state.year} month={this.state.month} attendanceRecords={this.props.attendanceRecords}/>)
    }

    return days;
  },

  decrementMonth(){
    if (this.state.month == 0) {
      let year = this.state.year - 1;
      this.setState({month: 11, year: year});
    } else {
      let month = this.state.month - 1
      this.setState({month: month})
    }
  },

  incrementMonth(){
    if (this.state.month == 11) {
      let year = this.state.year + 1;
      this.setState({month: 0, year: year});
    } else {
      let month = this.state.month + 1
      this.setState({month: month})
    }
  },

  render(){
    return (
      <div>
        <div>
          <h3 className="text-center">{this.state.month + 1}月 {this.state.year}</h3>
          <button onClick={this.decrementMonth}>Back</button>
          <button onClick={this.incrementMonth}>Next</button>
        </div>
        <table>
          <thead>       
            <tr>
              <th>日付</th>
              <th>曜日</th>
              <th>入室時間</th>
            </tr>
          </thead>
          <tbody>
            {this.days()}
          </tbody>
        </table>
      </div>
    )
  }


})