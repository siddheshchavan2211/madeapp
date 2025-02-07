import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Form,
  Input,
  Button,
  Image,
} from "@heroui/react";
import { CirclePlus } from "lucide-react";

const Signup = ({setUser}) => {

  const onSubmit = (e) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Submit data to your backend API.
    setUser(data.name);
    sessionStorage.setItem("user",data.name)
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="max-w-[400px] w-[400px] h-72">
        <CardHeader className="flex gap-3">
          <Image
            alt="MADE room logo"
            height={40}
            radius="sm"
            src="favicon.ico"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">MADE Room</p>
            <p className="text-small text-default-500">made.phleebs.tech</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Form onSubmit={onSubmit} validationBehavior="native" className="mt-4">
            <Input
              isRequired
              errorMessage="Please enter a name"
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
              type="text"
              autoComplete="off"
            />
            <Button type="submit" className="justify-center mx-auto mt-2 bg-cyan-400 text-lg text-white font-semibold"> Join     <CirclePlus />
            </Button>
          </Form>{" "}
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/siddheshchavan2211/madeapp"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
