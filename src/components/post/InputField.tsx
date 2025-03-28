import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type InputFieldProps = {
  id: string;
  label: string;
  value: string | number;
  error?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputField({ id, label, value, error, placeholder, onChange }: InputFieldProps) {
  return (
    <div className="grid grid-cols-4 items-center">
      <Label htmlFor={id} className="text-right">
        {label}
      </Label>
      <Input id={id} value={value} onChange={onChange} placeholder={placeholder} className="col-span-3" />
      {error && <p className="text-red-400 col-start-2 col-span-4 text-[12px] mt-1">{error}</p>}
    </div>
  );
}
