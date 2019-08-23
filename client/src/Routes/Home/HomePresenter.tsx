import React from "react";
import styled from "../../typed-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
`;

const Card = styled.div`
    width: 280px;
    overflow: hidden;
    margin: 30px;
    border-radius: 6px;
    position: relative;
    box-shadow: 0 6px 12px rgba(0,0,0,0.24), 0 10px 24px rgba(0,0,0,.42);
`;
const Title = styled.h2`
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color: ${props => props.theme.grayColor}
`;
const CoverImg = styled.img`
    display: block;
    margin:0 auto;
`;
const Genres = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;
const Genre = styled.span`
    padding: 5px;
`;
const RatingTitle = styled.span`
    margin-right: 5px;
`;
const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 10px 0;
    padding: 10px;
    
`

interface IProps {
    data?: any;
    loading: boolean;
}

const HomePresenter: React.FC<IProps> = ({
    data,
    loading
}) => {
    const isTrue = !loading && data && data.GetMovies  && "hi"
    return (
        <Container>
            {
                isTrue && (
                    data.GetMovies.map((movie: any, key: number) => (
                        <Link to={`/details/${movie.id}`}>
                            <Card key={key}>
                                <Title>{ movie.title }</Title>
                                <CoverImg src={ movie.medium_cover_image }/>
                                <Genres>
                                    {
                                        movie.genres.map((genre: string[], key: number) => <Genre key={key}>{ genre }</Genre>)
                                    }
                                </Genres>
                                <Rating>
                                    <RatingTitle>
                                        ★ Rating.
                                    </RatingTitle>
                                    {
                                        movie.rating
                                    }
                                </Rating>
                            </Card>
                        </Link>
                    ))
                )
            }
        </Container>
    );
}

export default HomePresenter;