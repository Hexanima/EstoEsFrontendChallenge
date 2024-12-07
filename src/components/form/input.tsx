import { useControls } from "./project";

interface InputProps {
  label: string;
  name: string;
  defaultValue?: string;
}

export function Input({ label, name, defaultValue }: InputProps) {
  const { updateField } = useControls(name);
  return (
    <div className="flex flex-col gap-1 font-normal">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded border border-neutral-300 p-2 bg-white"
        id={name}
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => {
          const { value } = e.target;
          updateField(value);
        }}
      />
    </div>
  );
}
