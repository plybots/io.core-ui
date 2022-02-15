import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlyButton } from '@plydot/ui-components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PlyButton',
  component: PlyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PlyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PlyButton> = (args) => <PlyButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  primary: true,
  children: 'PlyButton',
};
