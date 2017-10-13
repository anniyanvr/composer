/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import StatementDecorator from '../decorators/statement-decorator';
import ActiveArbiter from '../decorators/active-arbiter';

/**
 * Break Statement Decorator.
 * */
class BreakNode extends React.Component {

    /**
     * Render Function for the break statement.
     * */
    render() {
        const model = this.props.model;
        const expression = model.viewState.expression;

        return (
            <StatementDecorator
                model={model}
                viewState={model.viewState}
                expression={expression}
            />);
    }
}

BreakNode.propTypes = {
    model: PropTypes.instanceOf(Object).isRequired,
};

BreakNode.contextTypes = {
    activeArbiter: PropTypes.instanceOf(ActiveArbiter).isRequired,
    designer: PropTypes.instanceOf(Object).isRequired,
};

export default BreakNode;