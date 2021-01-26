import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ state }) => {
    return (
        <>
            <h1>{state?.text}</h1>
            <h5>createdAt: {state?.id}</h5>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const {
        match: {
            params: { id },
        },
    } = ownProps;
    return { state: state.find((list) => list.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
