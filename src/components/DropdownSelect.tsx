import { Button, FieldError, Label, ListBox, Popover, Select, SelectProps, SelectValue, Text, ValidationResult } from "react-aria-components";
import { HiChevronDown } from "react-icons/hi2";

interface DropdownSelectProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function DropdownSelect<T extends object>(
  { label, description, errorMessage, children, items, ...props }:
    DropdownSelectProps<T>
) {
  return (
    <Select {...props}>
      <Label>{label}</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true"><HiChevronDown/></span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>
          {children}
        </ListBox>
      </Popover>
    </Select>
  );
}