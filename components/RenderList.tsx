"use client";
type User = {
  id: number;
  name: string;
  status: string;
};

type Props = {
  users: User[];
  search: string;
  status: string;
};

const RenderList = ({ users, search, status }: Props) => {
  const filteredUserList = users?.filter(
    (user) =>
      user?.name.toLowerCase().includes(search.toLowerCase()) &&
      (status ? user?.status === status : true),
  );

  return (
    <div className="bg-amber-200 p-5 rounded-md">
      <h3>List of users:</h3>
      <br />
      <ul>
        {filteredUserList?.length > 0 ? (
          filteredUserList?.map((user: any) => (
            <li key={user?.id}>
              Name: {user?.name}
              &nbsp; Status: {user?.status}
            </li>
          ))
        ) : (
          <h1>No results found.</h1>
        )}
      </ul>
    </div>
  );
};

export default RenderList;
