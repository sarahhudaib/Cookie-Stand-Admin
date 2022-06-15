function LoginForm() {
  return (
    <div className="flex items-center content-center justify-center w-full">
      <form className="flex flex-col items-center content-center justify-center w-4/5 py-10 my-10 border-4 bg-emerald-200 rounded-xl border-emerald-700">
        <label className="m-5 text-4xl font-bold">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="w-4/5 h-8 p-5 rounded-md"
        />

        <label className="m-5 text-4xl font-bold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="w-4/5 h-8 p-5 rounded-md"
        />

        <input
          type="submit"
          value="Sign In"
          className="w-4/5 h-16 mt-10 text-2xl font-bold bg-emerald-500 rounded-xl"
        />
      </form>
    </div>
  );
}

export default LoginForm;
