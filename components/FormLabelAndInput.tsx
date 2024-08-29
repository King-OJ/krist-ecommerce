function FormLabelAndInput({
  name,
  type,
  placeholder,
  label,
}: {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="mb-4 w-full block">
      <label
        htmlFor={name}
        className="capitalize block text-xs font-extralight mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block py-[6px] text-[12px] font-thin outline-none border border-black rounded-lg px-2 w-full"
      />
    </div>
  );
}
export default FormLabelAndInput;
