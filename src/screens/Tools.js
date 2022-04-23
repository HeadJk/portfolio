import React from 'react';

import Content from '../components/layout/Content';
import ToolItem from '../components/UI/ToolItem';

const Tools = props => {
    return (
        <Content variant="light" header="Tools">
            <ToolItem icon="BiCodeBlock" label="Programming Languages" />
            <ToolItem flipped icon="BiCodeBlock"  />
            <ToolItem icon="BiCodeBlock" />
        </Content>
    );
};

export default Tools;