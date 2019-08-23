import React from "react";
import styled from "../../typed-components";

const Container = styled.div`
`;
const Movie = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const Header = styled.a`
    display: flex;
    background-color: black;
    color: white;
    padding: 10px;
    align-items: center;
    font-size: 20px;
    & svg {
        fill: white;
        margin-right: 10px;
    }
`;

const MovieProfile = styled.div`
margin-top: 30px;
max-width: 300px;
@media(max-width: 500px) {
    margin: 20px auto;
}
`;
const MovieIntro = styled.div`
    min-width: 300px;
`;
const CoverImg = styled.img`
    width: 100%;
    display: block;
`;
const Title = styled.h3`
    font-size: 30px;
    font-weight: 600;
`
const Rating = styled.span`
    color: red;
    font-size: 22px;
`
const Genres = styled.div`
margin-bottom: 20px;
color: ${props => props.theme.grayColor};
`;
const Genre = styled.span`
margin-right: 5px;

`;

const Text = styled.span``;

const Subscription = styled.div``;

interface IProps {
    data?: any;
    loading: boolean;
}
const MoviePresenter: React.FC<IProps> = ({
    data,
    loading
}) => {

    const isTrue = !loading && data && data.GetMovie;
    const movie = data.GetMovie;
    return (
        <Container>
        {
            isTrue && (
                <React.Fragment>
                    <Header href={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                        이전페이지
                    </Header>
                    
                    <Movie>
                        <MovieProfile>
                                <CoverImg src={movie.large_cover_image}/>
                            </MovieProfile>
                            <MovieIntro>
                                <Title>{movie.title} / <Rating> ★ {movie.rating}</Rating></Title>
                                <Genres>
                                    {
                                        movie.genres.map((movie: string, key: number) => <Genre key={key}>{movie}</Genre>)
                                    }
                                </Genres>
                                <Subscription>
                                    <Text>{movie.description_intro}</Text>
                                </Subscription>
                            </MovieIntro>
                        </Movie>
                    </React.Fragment>
            )
        }
        </Container>
    );
}

export default MoviePresenter;