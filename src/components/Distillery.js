import React, { PropTypes, Component } from 'react'

import { GridTile } from 'material-ui/GridList'
import ActionInfo from 'material-ui/svg-icons/action/info';

import "./Distillery.css";

class Distillery extends Component {

    static propTypes = {
        distillery: PropTypes.object.isRequired,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    render() {

        const { distillery } = this.props;

        return (
            <GridTile 
            className="distillery"
            key={distillery.name}
            title={distillery.name} 
            subtitle={distillery.region}
            rightIcon={<ActionInfo />}/>
        );
    }

}

export default Distillery;