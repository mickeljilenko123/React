import React from 'react';

class Dimensions extends React.Component {
    constructor(props) {
        super(props);
        const { innerWidth, innerHeight } = window;
        this.state = {
            width: innerWidth,
            height: innerHeight
        }
        document.title = `${ innerWidth } x ${ innerHeight }`;
    }
    //В обьекта виндов есть специальное событие которое отвичает
    // за отрисовку измении разшерения экрана
    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
     
    // Принимает обьект события и из него мы можем достать 
    onResize = event => {
        const { innerWidth, innerHeight } = event.target;
        this.setState({
            width: innerWidth,
            height: innerHeight
        });
    };

    render() {
        return(
            <div class="dimensions">
               { `${this.state.width}px - ${this.state.height}px` }
                </div>
        )
    }

}
export default Dimensions;