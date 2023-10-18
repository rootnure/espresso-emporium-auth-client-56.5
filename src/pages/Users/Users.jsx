import { useLoaderData } from "react-router-dom";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";


const Users = () => {

    const loadedUsers = useLoaderData();

    return (
        <main className="my-24">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            loadedUsers.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td>
                                    <button className="btn me-1 bg-blue-500 text-white"><AiFillEdit></AiFillEdit></button>
                                    <button className="btn bg-red-500 text-white"><AiTwotoneDelete></AiTwotoneDelete></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Users;