import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col justify-center items-center pt-36">
                <h2 className="text-5xl py-3">Sorry</h2>
                <p className="text-3xl text-center">That page cannot be found</p>
                <Link to= "/" className="text-primary underline cursor-pointer py-4 hover:scale-110 duration-500 ease font-bold">Back to Homepage</Link>
            </div>
        </div>
    );
}

export default NotFound;