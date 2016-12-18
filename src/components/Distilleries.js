import React, { PropTypes, Component } from 'react'
import { GridList } from 'material-ui/GridList'
import { map } from 'lodash'

import Distillery from './Distillery';

import './Distilleries.css';

class Distilleries extends Component {

    static propTypes = {
        distilleries: PropTypes.object.isRequired
    }

    render() {

        const { distilleries } = this.props;

        return (
            <div className="distilleriesContainer">
                <GridList cellHeight={180} className="distilleries">
                    {
                        map(distilleries, (distillery, id) => (
                            <Distillery
                                key={id}
                                id={id}
                                distillery={distillery}
                                />
                        ))
                    }
                </GridList>
            </div>
        );
    }

}

export default Distilleries;