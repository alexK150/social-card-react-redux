import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import backgroundIMG from './assets/orange-bg.jpg';
import mockUserPicture from './assets/gray.jpg';
import {Comment} from "./components/comment.component";
import {getData} from "./redux/card/card.actions";

const App = ({card: {status, likes, dislikes, shares, comments}, getData}) => {

    useEffect(() => {
        // Initializes Materialize JS
        M.AutoInit()
    });

    useEffect(() => {
        getData()
    }, []);

    const onClickHandler = () => {
        console.log('click')
    };

    return <div className="App">
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={backgroundIMG}/>
                        <div>
                            <span className="card-title">Card Title</span>
                            <img style={{width: '100px'}} src={mockUserPicture}/>
                        </div>
                    </div>
                    <div className="card-content">
                        <p>{status}</p>
                        <div style={{float: "right"}}>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                    <div className="card-action">
                        <ul className='list-of-actions'>
                            <li onClick={onClickHandler}><i className="material-icons">thumb_up</i>{likes}</li>
                            <li><i className="material-icons">thumb_down</i>{dislikes} </li>
                            <li><i className="material-icons">repeat</i>{shares}</li>
                            <li><i className="material-icons">chat_bubble_outline</i>{comments.length}</li>
                        </ul>
                        <div>{comments.map(c => <Comment key={c.id} commentText={c.commentText}/>)}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

App.propTypes = {
    card: PropTypes.object.isRequired
};

const mapStateToProps = ({card: {card}}) => ({
    card
});

export default connect(mapStateToProps, {getData})(App);
