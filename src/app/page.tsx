import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      <Button
        as={Link}
        href="/members" 
        color="primary" 
        variant="bordered" 
        startContent={<FaRegSmile />}>
        Click dis bitch
      </Button>
    </div>
  );
}
