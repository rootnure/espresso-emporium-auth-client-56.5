import { useLoaderData, useNavigate } from "react-router-dom";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUsers = useLoaderData();
    const navigate = useNavigate();

    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = _id => {
        // make sure user is confirmed to delete
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#338d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // remove the user from the UI
                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);
                            // successful delete confirmation
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                                .then(
                                    navigate('#')
                                )
                        }
                    })
            }
        })
    }

    return (
        <main className="my-24">
            <section className="container mx-auto pt-8">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* caption */}
                        <caption className="font-bold text-3xl">All users info</caption>
                        {/* head */}
                        <thead>
                            <tr className="uppercase text-center">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Logged In</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td>
                                        <button
                                            title="Edit"
                                            className="btn border-2 !border-blue-500 bg-blue-500 text-white hover:text-blue-500 hover:bg-transparent me-1.5"><AiFillEdit></AiFillEdit></button>
                                        <button
                                            title="Delete"
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="btn border-2 !border-red-500 bg-red-500 text-white hover:text-red-500 hover:bg-transparent "><AiTwotoneDelete></AiTwotoneDelete></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Users;