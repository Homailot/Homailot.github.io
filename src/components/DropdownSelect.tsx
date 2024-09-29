import { useState } from "react";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  Popover,
  Select,
  SelectProps,
  SelectValue,
  Text,
  ValidationResult,
} from "react-aria-components";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

interface DropdownSelectProps<T extends object>
  extends Omit<SelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  icon?: React.ReactNode;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function DropdownSelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  icon,
  ...props
}: DropdownSelectProps<T>) {
  let [open, setOpen] = useState(false);

  return (
    <Select isOpen={open} onOpenChange={setOpen} {...props}>
      <Label>{label}</Label>
      <Button className="focus-visible:outline-none text-satin-linen-950 shadow-outline text-sm bg-satin-linen-50 rounded px-4 py-2 inline-flex flex-row items-center w-44">
        {icon && <span className="mr-2">{icon}</span>}
        <SelectValue />
        <span aria-hidden="true" className="ml-auto">
          {open ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  );
}
