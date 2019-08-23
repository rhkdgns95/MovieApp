import React from "react";
import HomePresenter from "./HomePresenter";
import { Query } from "react-apollo";
import { GET_MOVIES } from "./HomeQueries";


class HomeContainer extends React.Component {

    render = () => {
        
        return (
            <Query query={GET_MOVIES}>
                {
                    ({loading, data}: {loading: boolean, data: any}) => {
                        console.log(data);
                        return (
                            <HomePresenter 
                            data={data}
                            loading={loading}
                            />
                        )
                    }
                }
            </Query >
        );
    }
}

export default HomeContainer;