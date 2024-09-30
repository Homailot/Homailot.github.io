import { useState } from "react";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  Select,
  SelectProps,
  SelectValue,
  Text,
  ValidationResult,
} from "react-aria-components";
import { HiCheckCircle, HiChevronDown, HiChevronUp } from "react-icons/hi2";

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
  const [open, setOpen] = useState(false);

  return (
    <Select isOpen={open} onOpenChange={setOpen} {...props}>
      <Label>{label}</Label>
      <Button className="focus-visible:outline-none text-satin-linen-950 shadow-outline text-sm font-normal font-body bg-satin-linen-50 rounded-md px-4 py-2 inline-flex flex-row items-center min-w-36">
        {icon && <span className="mr-2">{icon}</span>}
        <SelectValue className="mr-4" />
        <span aria-hidden="true" className="ml-auto">
          {open ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="bg-satin-linen-50 shadow-outline min-w-36 rounded-md">
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  );
}

interface DropdownSelectItemProps extends ListBoxItemProps {
  label: string;
}

export function DropdownSelectItem(props: DropdownSelectItemProps) {
  return (
    <ListBoxItem
      {...props}
      className="flex items-center pl-7 pr-3 py-2 m-1 rounded font-body aria-selected:font-semibold text-satin-linen-950 text-sm focus-visible:outline-none hover:bg-satin-linen-200"
    >
      {({ isSelected }) => (
        <>
          {isSelected && <HiCheckCircle className="absolute left-3" /> }
          <Text slot="label">{props.label}</Text> 
        </>
      )}
    </ListBoxItem>
  );
}
