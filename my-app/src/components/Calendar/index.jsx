import React from 'react'
import classnames from 'classnames';
import * as calendar from './calendar';
import './index.css';

class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };
    state = {
        date: this.props.date, // Месяц год
        currentDate: new Date(),
        selectedDate: null, //Слежка за выбраной датой
    }
    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }
    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };

    handleSelectChange = () => { //Обработчик селектов
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => { //Обработчик при нажатии на день
        this.setState({ selectedDate: date });
        
        this.props.onChange(date);
    };
    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);
        return (
            <div className="calendar">
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
                    <select 
                        onChange={this.handleSelectChange}
                        ref={element => this.monthSelect = element}
                        value={this.month}
                    >
                        {monthNames.map((name, index) => 
                           <option key={name} value={index}>{name}</option>
                        )}
                    </select>
                    <select 
                       onChange={this.handleSelectChange}
                       ref={element => this.yearSelect = element}
                        value={this.year}
                    >
                        {years.map((years) => 
                        <option key={years}>{years}</option>
                        )}
                    </select>
                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                         {weekDayNames.map((week) =>
                           <th key={week}>{week}</th>
                         )}
                        </tr>
                    </thead>
                    <tbody>
                    {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, currentDate),
                                            'selected': calendar.areEqual(date, selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr> 
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default Calendar;