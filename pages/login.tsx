import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Background from '../images/background.jpg';
import Netflix from '../images/netflix.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="bg-black md:bg-transparent  md:items-center md:justify-center h-screen w-screen flex flex-col relative">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={Background}
        layout="fill"
        className="!hidden sm:!inline  -z-10 opacity-60 caret-transparent select-none"
        objectFit="cover"
      />

      <div className="absolute -left-1 top-2">
        <Image
          src={Netflix}
          width={150}
          height={40}
          className="cursor-pointer object-cover"
        />
      </div>

      {/* ========== */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-24 md:mt-0  px-6 md:px-14  md:max-w-md py-10 space-y-8 relative bg-black/75 rounded"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>

        {/* ========== ========== ========== ========== ========== ========== */}

        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', { required: true })}
            />

            {errors.email && (
              <p className="p-1 text-sm text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>

          {/* ========== ========== ========== */}

          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', {
                required: true,
                minLength: 4,
                maxLength: 60,
              })}
            />

            {errors.password && (
              <p className="text-sm  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>

        {/* ========== ========== ========== ========== ========== ========== */}

        <button
          className="py-3 w-full rounded bg-[#e50914]"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>

        <div>
          <span className="text-[gray]">New to Netflix ? </span>
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>

        {/* ========== ========== ========== ========== ========== ========== */}
      </form>
    </div>
  );
}

export default Login;
