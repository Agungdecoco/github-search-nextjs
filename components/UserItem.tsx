import React from "react";
import Image from "next/image";
import { User } from "../types/User";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function UserItem({ user }: Props) {
  return (
    <div className="flex justify-between items-center hover:bg-zinc-100 px-[20px] py-[5px]">
      <div className="inline-flex items-center space-x-4">
        <Image
          alt="profile"
          width={50}
          height={50}
          src={user?.avatar_url}
          className="rounded-full"
        />
        <span>{user.login}</span>
      </div>
      <Link
        href={`/detail/${user.login}`}
        className="hover:bg-black hover:text-white p-2 mr-2 rounded-full"
      >
        <span>
          <ChevronRightIcon className="w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}

interface Props {
  user: User;
}
