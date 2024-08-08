import { useRouteError, Link } from "react-router-dom";
import "../styles/error404.css"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error, "error")
    return (
        <div class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">{error.status}</h1>
                            </div>
                            <div class="contant_box_404">
                                <h3 class="h2">
                                    {error.statusText}
                                </h3>
                                <Link to="/" class="link_404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage