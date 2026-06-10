const AuthInput = ({ type,name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        border
        border-zinc-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:border-black
      "
    />
  );
};

export default AuthInput;
