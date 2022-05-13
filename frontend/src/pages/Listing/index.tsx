import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import MovieStars from "components/MovieStars";

function Listing() {

    const [pageNumeber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumeber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumeber]);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(movie => {
                        return (
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })}

                </div>
            </div>


        </>
    );
}
export default Listing;