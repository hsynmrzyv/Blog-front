"use client";

// NEXT
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation.js";

// Hooks
import { useRef, useState } from "react";

// Icons
import { RxAvatar } from "react-icons/rx";

// Redux Hooks
import { useDispatch } from "react-redux";

// Actions
import { setUser } from "../slices/user.slice.js";

// Components
import InputField from "../components/InputField";

const SignUp = () => {
  // States
  const [imageUrl, setImageUrl] = useState(null);

  // Dispatch
  const dispatch = useDispatch();

  // Router
  const router = useRouter();

  // Refs
  const emailRef = useRef(null);
  const fullNameRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const fileInputRef = useRef<HTMLInputElement>();

  // Event Handlers
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (event): Promise<void> => {
    event.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userName = userNameRef.current.value;

    const formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("userName", userName);

    const file = fileInputRef.current.files[0];

    if (file) {
      formData.append("profilePic", file);
    }

    const response = await fetch(
      "https://blogpf201-api.onrender.com/api/auth/sign-up",
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch(setUser(data.user));
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <InputField
            ref={fullNameRef}
            id="fullName"
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Please enter your full name"
          />

          {/* Email */}
          <InputField
            ref={emailRef}
            id="email"
            label="Email"
            name="email"
            type="text"
            placeholder="Please enter your email"
          />

          {/* Username */}
          <InputField
            ref={userNameRef}
            id="userName"
            label="Username"
            name="userName"
            type="text"
            placeholder="Please enter your username"
          />

          {/* Password */}
          <div className="mt-2">
            <InputField
              ref={passwordRef}
              id="password"
              label="Password"
              name="password"
              type="password"
              placeholder="Please enter your password"
            />
          </div>

          {/* Profile Picture */}
          <div className="col-span-3 flex items-center gap-2">
            <div>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="profile picture"
                  className="rounded-full h-8 w-8"
                  width={32}
                  height={32}
                  objectFit="cover"
                />
              ) : (
                <RxAvatar className="h-8 w-8" />
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={handleButtonClick}
                className="text-slate-900 text-sm font-medium leading-6 border border-gray-200 rounded-md p-2"
              >
                Add profile picture
              </button>
              <input
                onChange={handleFileChange}
                type="file"
                ref={fileInputRef}
                className="hidden inset-0 cursor-pointer"
                title="Click to edit profile photo"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 "
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
