import React from 'react';
import {Link} from 'react-router-dom';

export default function Pnf(props) {
    return (
        <div className="container">        
                <div className="row">
                    <div className="col">
                        <div className="jumbotron text-center">
                            <h1 className="display-1 text-danger">404 Error</h1>
                            <h3 className="text-warning display-3">Page not Found</h3>    
                            <Link to={'/'} className="btn btn-outline-success">Back To Home</Link>                        
                        </div>
                    </div>
                </div>       
            
        </div>
    )
}
