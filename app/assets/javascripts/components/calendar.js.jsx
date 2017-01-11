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
      let date = (i.toString().length == 1) ? `0${i}` : i;

      days.push(<Day key={i} 
                     date={date} 
                     year={this.state.year} 
                     month={this.state.month} 
                     attendanceRecords={this.props.attendanceRecords}
                     paymentRecords={this.props.paymentRecords}
                     handleCreatePaymentRecord={this.props.handleCreatePaymentRecord}
                     admin={this.props.admin}
                     today={new Date(`${this.state.year}/${this.state.month + 1}/${date} 00:00:00`).toDateString() === new Date().toDateString()}/>)
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
              <th className="medium-3">日付</th>
              <th className="medium-3">曜日</th>
              <th className="medium-3">入室時間</th>
              <th className="medium-3">月謝記録</th>
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