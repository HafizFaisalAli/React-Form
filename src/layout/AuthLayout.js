import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="bg-auth flex flex-col items-center justify-center py-4">
        <section className="py-16">
          <Link to="/">
            <h1 className="font-semibold text-4xl uppercase text-white">
              ReactForm
            </h1>
          </Link>
        </section>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
