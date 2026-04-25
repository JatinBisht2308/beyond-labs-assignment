"use client";
type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

const SearchWithFilter = ({ search, setSearch, status, setStatus }: Props) => {
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search user"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 bg-blue-200"
      />
      {/* filter */}
      <select
        name="filter-user"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      >
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default SearchWithFilter;
