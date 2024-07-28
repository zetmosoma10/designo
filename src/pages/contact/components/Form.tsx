import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import Button from "../../../components/Button";
import errorIcon from "../../../assets/contact/desktop/icon-error.svg";
import { toast, ToastContainer } from "react-toastify";

const schema = z.object({
  name: z.string().min(3, { message: "Name must at least 3 characters." }),
  email: z
    .string()
    .min(1, { message: "Email can't be empty" })
    .email({ message: "Invalid email address" }),
  phone: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    toast(`${data.name} thanks for your support, we’ll get in touch shortly.`);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-6"
    >
      <div className="relative w-full flex items-center">
        <input
          {...register("name")}
          className="custom-input"
          placeholder="Name"
          type="text"
        />
        {errors.name && (
          <small className="absolute right-2 text-white text-nowrap flex items-center gap-2">
            {" "}
            <span>{errors.name.message}</span> <img src={errorIcon} alt="" />
          </small>
        )}
      </div>
      <div className="relative w-full flex items-center">
        <input
          {...register("email")}
          className="custom-input"
          placeholder="Email"
          type="email"
        />
        {errors.email && (
          <small className="absolute right-2 text-white text-nowrap flex items-center gap-2">
            {" "}
            <span>{errors.email.message}</span> <img src={errorIcon} alt="" />
          </small>
        )}
      </div>
      <div className=" relative w-full flex items-center">
        <input
          {...register("phone")}
          className="custom-input"
          placeholder="Phone"
          type="text"
        />
      </div>
      <div className="w-full">
        <textarea
          {...register("message")}
          className="custom-input"
          placeholder="Message"
        ></textarea>
      </div>
      <Button type="button" className="self-center md:self-end px-12 ">
        Submit
      </Button>
      <ToastContainer position="top-center" />
    </form>
  );
};

export default Form;
