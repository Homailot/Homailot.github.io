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
      <Popover className="min-w-36 rounded-md bg-satin-linen-50 shadow-outline focus-visible:outline-none dark:bg-comet-950 dark:shadow-comet-100/5">
        <ListBox className="focus-visible:outline-none" items={items}>
          {children}
        </ListBox>
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
    <Button className="inline-flex items-center rounded-md px-2 py-2 font-body text-2xl font-normal text-satin-linen-900 hover:bg-satin-linen-100 focus-visible:outline-none aria-expanded:bg-satin-linen-100 aria-expanded:text-satin-linen-950 dark:text-comet-200 hover:dark:bg-comet-900 dark:aria-expanded:bg-comet-900 dark:aria-expanded:text-comet-50">
      {icon}
    </Button>
  );

  return <DropdownSelect button={button} {...props} />;
}

interface DropdownSelectItemProps extends ListBoxItemProps {
  label: string;
}

export function DropdownSelectItem({
  label,
  ...props
}: DropdownSelectItemProps) {
  return (
    <ListBoxItem
      {...props}
      className="m-1 flex items-center rounded py-2 pl-8 pr-3 font-body text-sm text-satin-linen-900 hover:bg-satin-linen-100 focus-visible:outline-none aria-selected:bg-satin-linen-200 aria-selected:font-bold aria-selected:text-satin-linen-950 dark:text-comet-300 dark:hover:bg-comet-900 dark:aria-selected:bg-comet-800 dark:aria-selected:text-comet-100"
    >
      {({ isSelected }) => (
        <>
          {isSelected && <HiCheckCircle className="absolute left-3" />}
          <Text slot="label">{label}</Text>
        </>
      )}
    </ListBoxItem>
  );
}

interface DropdownSelectIconItemProps extends DropdownSelectItemProps {
  icon: ReactElement;
}

export function DropdownSelectIconItem({
  icon,
  label,
  ...props
}: DropdownSelectIconItemProps) {
  return (
    <ListBoxItem
      {...props}
      className="m-1 flex items-center rounded py-2 pl-9 pr-3 font-body text-sm text-satin-linen-900 hover:bg-satin-linen-100 focus-visible:outline-none aria-selected:bg-satin-linen-200 aria-selected:font-bold aria-selected:text-satin-linen-950 dark:text-comet-300 dark:hover:bg-comet-900 dark:aria-selected:bg-comet-800 dark:aria-selected:text-comet-100"
    >
      <span className="absolute left-3">{icon}</span>
      <Text slot="label">{label}</Text>
    </ListBoxItem>
  );
}
