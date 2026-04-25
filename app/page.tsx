"use client";
import RenderList from "@/components/RenderList";
import SearchWithFilter from "@/components/SearchWithFilter";
import { users } from "@/constants/data";
import { useState } from "react";
export default function Home() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div className="flex gap-5 flex-col">
      <h1>Search user with filter.</h1>
      <br />
      <SearchWithFilter
        search={search}
        status={status}
        setSearch={setSearch}
        setStatus={setStatus}
      />
      <RenderList users={users || []}
       search={search}
       status={status}
      />
    </div>
  );
}
