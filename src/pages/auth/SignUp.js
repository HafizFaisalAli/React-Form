import React from "react";

const SignUp = () => {
  return (
    <div className="flex min-h-screen w-[85%] bg-white rounded-lg">
      {/* first div  */}
      <div className="flex flex-col gap-6 w-[65%] p-16">
        <div>
          <h1 className="font-normal text-4xl">Sign In</h1>
          <p className="text-lg font-semibold text-slate-500 pt-2">
            Please fill this form for sign in,
          </p>
        </div>
        {/* form start  */}
        <form className="flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <label htmlFor="firstName" className="text-lg font-semibold pb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name."
                className="border-2 py-3 px-4 w-full rounded-lg"
              />
            </div>
            <div className="w-full">
              <label htmlFor="firstLast" className="text-lg font-semibold pb-2">
                Last Name
              </label>
              <input
                type="text"
                id="firstLast"
                placeholder="Enter your last name."
                className="border-2 py-3 px-4 w-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <label htmlFor="firstName" className="text-lg font-semibold pb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name."
              className="border-2 py-3 px-4 w-full rounded-lg"
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <label htmlFor="firstName" className="text-lg font-semibold pb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name."
                className="border-2 py-3 px-4 w-full rounded-lg"
              />
            </div>
            <div className="w-full">
              <label htmlFor="firstLast" className="text-lg font-semibold pb-2">
                Last Name
              </label>
              <input
                type="text"
                id="firstLast"
                placeholder="Enter your last name."
                className="border-2 py-3 px-4 w-full rounded-lg"
              />
            </div>
          </div>
        </form>
      </div>
      {/* second div */}
      <div className="flex items-center justify-center bg-orange-100 w-[35%] p-16">
        helo
      </div>
    </div>
  );
};

export default SignUp;
