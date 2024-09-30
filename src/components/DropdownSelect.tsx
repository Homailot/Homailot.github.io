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
      <Button className="inline-flex min-w-36 flex-row items-center rounded-md bg-satin-linen-50 px-4 py-2 font-body text-sm font-normal text-satin-linen-950 shadow-outline focus-visible:outline-none">
        {icon && <span className="mr-2">{icon}</span>}
        <SelectValue className="mr-4" />
        <span aria-hidden="true" className="ml-auto">
          {open ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="min-w-36 rounded-md bg-satin-linen-50 shadow-outline">
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
      className="m-1 flex items-center rounded py-2 pl-7 pr-3 font-body text-sm text-satin-linen-950 hover:bg-satin-linen-200 focus-visible:outline-none aria-selected:font-semibold"
    >
      {({ isSelected }) => (
        <>
          {isSelected && <HiCheckCircle className="absolute left-3" />}
          <Text slot="label">{props.label}</Text>
        </>
      )}
    </ListBoxItem>
  );
}
