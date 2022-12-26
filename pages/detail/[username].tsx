import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { User } from "../../types/User";
import { SearchRes } from "../../types/SearchRes";

export default function Detail({ user }: Props) {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <Image
        alt="profile"
        width={100}
        height={100}
        src={user?.avatar_url}
        className="rounded-full"
      />
      <span>{username}</span>
    </div>
  );
}

interface Props {
  user: User;
}
