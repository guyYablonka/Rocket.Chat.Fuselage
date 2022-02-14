import {
  ComponentProps,
  Dispatch,
  ForwardRefExoticComponent,
  SetStateAction,
} from 'react';

import { Box } from '../Box';

type MultiSelectOptions = readonly (readonly [string, string, boolean?])[];

type MultiSelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: MultiSelectOptions;
  onChange: (value: MultiSelectOptions[number][0]) => void;
  renderItem?: FC;
  renderSelected?: FC;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
};

export const MultiSelectFiltered: ForwardRefExoticComponent<MultiSelectProps>;
