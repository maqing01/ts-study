import * as React from 'react';

export interface WorldProps { motherland: 'China' | 'Stone' }
const World: React.SFC<WorldProps> = (props) => {
    const { motherland } = props;
    return (<h1 style={{lineHeight: '100px'}}>My motherland is <span style={{color: 'red'}}>{motherland}</span> !</h1>)
}

export default World;
