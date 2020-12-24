import React from 'react';

class Dimensions extends React.Component {
    state = {
        width: null,
        height: null
    }
    //В обьекта виндов есть специальное событие которое отвичает
    // за отрисовку измении разшерения экрана
    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        const { innerWidth, innerHeight } = window;
        this.setDimensions( innerWidth,  innerHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
     
    // Принимает обьект события и из него мы можем достать 
    onResize = event => {
        const { innerWidth, innerHeight } = event.target;
        this.setDimensions( innerWidth,  innerHeight);
    };
    setDimensions = (width, height) => {
        this.setState({
            width,
            height
        });
        document.title = `${ innerWidth } x ${ innerHeight }`;
    }

    render() {
        return(
            <div class="dimensions">
               { `${innerWidth}px - ${innerHeight}px` }
                </div>
        )
    }

}
export default Dimensions;