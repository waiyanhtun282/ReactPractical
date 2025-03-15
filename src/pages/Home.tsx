import { Link } from "react-router";

const Home = () => {
  return (
    <section className="flex grow items-center justify-center bg-gray-100">
      <div className="text-center container mx-auto  p-8 md:p-16 md:text-left">
        <h1 className=" mb-4 text-3xl font-bold md:text-5xl">
          Welcome to our fashion shop
        </h1>
        <p className=" mb-8 text-lg text-gray-700  md:text-xl">
          This is a simple landing page built with React , Typescript and
          Tailwindcss
        </p>
        <Link
          to="/shop"
          className=" bg-sky-600 px-6 py-4 text-white rounded-md shadow hover:bg-sky-700"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Home