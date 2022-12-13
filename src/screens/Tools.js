import React from 'react';

import Content from '../components/layout/Content';
import ToolItem from '../components/UI/ToolItem';
import { BiCodeBlock } from 'react-icons/bi';

const Tools = props => {
    return (
        <Content variant="light" header="Tools">
            <ToolItem Icon={BiCodeBlock} label="Programming Languages" />
            <ToolItem flipped Icon={BiCodeBlock}  />
            <ToolItem Icon={BiCodeBlock} />
        </Content>
    );
};

export default Tools;