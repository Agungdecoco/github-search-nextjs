import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Header from "../components/Header";
import UserList from "../components/UserList";
import { SearchRes } from "../types/SearchRes";
import { User } from "../types/User";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<SearchRes | null>(null);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=10`)
        .then((res) => res.json())
        .then((data) => {
          const users: User[] = data.items;
          const searchRes: SearchRes = {
            users: users,
            search: search,
          };
          setResult(searchRes);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="space-y-5 py-10">
      <Head>
        <title>Github Search User</title>
      </Head>
      <Header />
      <form className="flex items-center space-x-3" onSubmit={onSearchSubmit}>
        <Form value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit" isLoading={isLoading} />
      </form>
      {result && <UserList result={result} />}
    </div>
  );
}
