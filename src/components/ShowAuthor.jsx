import { useSelector } from "react-redux";
import { selectUsersById } from "../reducers/userSlice";

const ShowAuthor = ({ userId }) => {
    const author = useSelector((state) =>selectUsersById(state,userId) );

    return <span>توسط {author ? author.fullname : "نویسنده ناشناس"}</span>;
};

export default ShowAuthor;