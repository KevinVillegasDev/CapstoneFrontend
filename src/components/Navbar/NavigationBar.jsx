import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = ({user}) => {
    return ( 
        <div class="p-2">
            <dl class="nav nav-tabs">
            {!user &&
                <React.Fragment>
                    <dd class="nav-item">
                        <Link to="/login" class="nav-link active">Login</Link>
                    </dd>
                </React.Fragment>            
            }
            </dl>
        </div>
     );
}
 
export default NavigationBar;