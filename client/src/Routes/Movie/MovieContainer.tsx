import React from "react";
import MoviePresenter from "./MoviePresenter";
import { RouteComponentProps } from "react-router";
import { Query } from "react-apollo";
import { GET_MOVIE } from "./MovieQueries";

interface IProps extends RouteComponentProps<any> {}

class MovieContainer extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
        const { history } = this.props;
        if(!props.match.params!.movieId) {
            history.push("/");
        }
    }
    render = () => {
        const { movieId } = this.props.match.params;
        
        return (
            <Query 
            query={GET_MOVIE}
            variables={{
                movieId: parseInt(movieId)
            }}
            >
                {
                    ({data, loading}: {data: any, loading: boolean}) => (
                        <MoviePresenter 
                            data={data}
                            loading={loading}
                        />
                    )
                }
            </Query>
            
        );
    }
}

export default MovieContainer;