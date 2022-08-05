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
  const [isSignIn, setIsSignIn] = useState(true);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (isSignIn) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="bg-black md:bg-transparent  md:items-center md:justify-center h-screen w-screen flex flex-col relative select-none">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={Background}
        layout="fill"
        className="!hidden sm:!inline  -z-10 opacity-60"
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
              value={
                !isSignIn
                  ? `auto_create_account${Math.floor(
                      Math.random() * 100
                    )}@random.com`
                  : undefined
              }
              {...register('email', { required: true })}
            />

            {errors.email && (
              <p className="p-1 text-sm text-orange-500">
                {isSignIn
                  ? 'Please enter a valid email'
                  : 'Oops please click again !'}
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

        <button className="py-3 w-full rounded bg-[#e50914]" type="submit">
          {isSignIn ? 'Log In' : 'Sign Up'}
        </button>

        <div>
          <span className="text-[gray]">New to Netflix ? </span>
          <span
            className="text-white hover:underline cursor-pointer "
            onClick={() => setIsSignIn(false)}
          >
            Sign up now
          </span>
        </div>
        {/* ========== ========== ========== ========== ========== ========== */}
      </form>
    </div>
  );
}

export default Login;
