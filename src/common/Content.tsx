import React, {ReactNode} from 'react';

interface IContentProps {
    children: ReactNode
}

export default class Content extends React.Component<IContentProps, {}> {
    render() {
        return (
            <main className="container container-main">
                { this.props.children }
            </main>
        );
    }
};
