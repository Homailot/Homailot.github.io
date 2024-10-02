import { ReactElement, useState } from "react";
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
  button: React.ReactNode;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function DropdownSelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  button,
  ...props
}: DropdownSelectProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <Select isOpen={open} onOpenChange={setOpen} {...props}>
      <Label>{label}</Label>
      {button}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="min-w-36 rounded-md bg-satin-linen-50 shadow-outline dark:bg-comet-950 dark:shadow-comet-100/5">
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  );
}

interface TextButtonDropdownSelectProps<T extends object>
  extends Omit<DropdownSelectProps<T>, "button"> {
  icon?: ReactElement;
}

export function TextButtonDropdownSelect<T extends object>({
  icon,
  ...props
}: TextButtonDropdownSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const button = (
    <Button className="inline-flex min-w-36 flex-row items-center rounded-md bg-satin-linen-50 px-4 py-2 font-body text-sm font-normal text-satin-linen-950 shadow-outline focus-visible:outline-none dark:bg-comet-950 dark:text-comet-50 dark:shadow-comet-100/5">
      {icon && <span className="mr-2">{icon}</span>}
      <SelectValue className="mr-4" />
      <span aria-hidden="true" className="ml-auto">
        {open ? <HiChevronUp /> : <HiChevronDown />}
      </span>
    </Button>
  );

  return (
    <DropdownSelect
      isOpen={open}
      onOpenChange={setOpen}
      button={button}
      {...props}
    />
  );
}

export function IconButtonDropdownSelect<T extends object>({
  icon,
  ...props
}: TextButtonDropdownSelectProps<T>) {
  const button = (
    <Button className="inline-flex items-center rounded-md px-2 py-2 font-body text-2xl font-normal text-satin-linen-950 focus-visible:outline-none dark:text-comet-50">
      {icon}
    </Button>
  );

  return <DropdownSelect button={button} {...props} />;
}

interface DropdownSelectItemProps extends ListBoxItemProps {
  label: string;
}

export function DropdownSelectItem(props: DropdownSelectItemProps) {
  return (
    <ListBoxItem
      {...props}
      className="m-1 flex items-center rounded py-2 pl-7 pr-3 font-body text-sm text-satin-linen-950 hover:bg-satin-linen-200 focus-visible:outline-none aria-selected:font-semibold dark:text-comet-50 dark:hover:bg-comet-900"
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
