import React from 'react';
import { UserContext, ChannelContext } from '../../App';


function ComponentF() {

    return (
        <div>
            <UserContext.Consumer>
                {
                    firstname => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    lastname => {
                                        
                                        return <div>User context value {firstname}{" "}{lastname}</div>
                                    }
                                }
                            </ChannelContext.Consumer>

                        )
                    }
                }
            </UserContext.Consumer>
            Component F
        </div>
    )
}

export default ComponentF;