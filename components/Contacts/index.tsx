import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contacts = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:joelnoumbi28@gmail.com&subject=${data.subject}&body=Hi my name is ${data.name}, ${data.message} (${data.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left w-screen justify-evenly items-center mx-auto px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacts
      </h3>

      <div className="mt-32 flex flex-col">
        <h4 className="text-xl sm:text-4xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
      </div>

      <div className="sm:space-y-5 space-y-1">
        <div className="flex items-center space-x-5">
          <PhoneIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]" />
          <p className="text-sm sm:text-2xl">+237670398582</p>
        </div>

        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]" />
          <p className="text-sm sm:text-2xl">joelnoumbi28@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5">
          <MapPinIcon className="w-7 h-7 animate-pulse text-[#F7AB0A]" />
          <p className="text-sm sm:text-2xl">Douala, Cameroon</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex sm:flex-row flex-col space-x-0 sm:space-y-0 space-y-2 sm:space-x-2">
          <input
            type="text"
            {...register("name")}
            className="contactInput"
            placeholder="Name"
          />
          <input
            type="email"
            {...register("email")}
            className="contactInput"
            placeholder="Email"
          />
        </div>

        <input
          type="text"
          {...register("subject")}
          className="contactInput"
          placeholder="Subject"
        />

        <textarea
          className="contactInput"
          {...register("message")}
          placeholder="Message"
        />
        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
