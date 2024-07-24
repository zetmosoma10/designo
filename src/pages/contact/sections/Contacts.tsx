import Form from "../components/Form";

const Contacts = () => {
  return (
    <div
      className="bg-contact-circle bg-peach grid lg:grid-cols-2 gap-y-12 md:gap-y-10 lg:gap-x-20 
        px-6 md:px-14 py-[72px] lg:py-14 lg:px-24 md:max-container md:rounded-2xl"
    >
      <div className="text-white text-center md:text-left lg:self-center">
        <h1 className="font-medium text-3xl md:text-5xl">Contact Us</h1>
        <p className="text-base mt-6 lg:mt-8">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Contacts;
