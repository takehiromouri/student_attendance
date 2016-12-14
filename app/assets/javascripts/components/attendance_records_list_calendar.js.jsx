let AttendanceRecordsListCalendar = React.createClass({
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
      let date = (i.toString().length == 1) ? `0${i}` : i;

      days.push(<AttendanceRecordsListDay key={i} 
                     date={date} 
                     year={this.state.year} 
                     month={this.state.month} 
                     attendanceRecords={this.props.attendanceRecords}
                     admin={true}
                     today={new Date(`${this.state.month + 1} ${date} ${this.state.year}`).toDateString() === new Date().toDateString()}/>)
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
        <div className="calendar-heading">
          <h3 className="text-center">
            <button onClick={this.decrementMonth} className="button btn-back">前</button>
            {this.state.month + 1}月 {this.state.year}
            <button onClick={this.incrementMonth} className="button btn-next">次</button>
          </h3>        
        </div>
        <table className="responsive">
          <thead>       
            <tr>
              <th>日付</th>
              <th>曜日</th>
              <th>出席人数</th>
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