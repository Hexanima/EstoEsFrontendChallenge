import { useControls } from "./project";

interface Option {
  value: string;
  text: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  name: string;
  defaultValue?: string;
}
export function Select({ options, label, name, defaultValue }: SelectProps) {
  const {updateField} = useControls(name);

  return (
    <div className="flex flex-col gap-1 font-normal">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="rounded border border-neutral-300 p-2 bg-white"
        defaultValue={defaultValue ? defaultValue : ""}
        onChange={(e) => updateField(e.target.value)}
      >
        <option disabled hidden value={""} className="text-[#595959]">
          Select an option
        </option>
        {options.map((val) => (
          <option key={val.value} value={val.value}>
            {val.text}
          </option>
        ))}
      </select>
    </div>
  );
}
