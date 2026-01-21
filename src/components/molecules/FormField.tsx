import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'textarea';
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

export function FormField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  rows = 4,
  error,
}: FormFieldProps) {
  if (type === 'textarea') {
    return (
      <Textarea
        label={label}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        error={error}
      />
    );
  }

  return (
    <Input
      label={label}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      error={error}
    />
  );
}
