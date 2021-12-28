import { Meta, Story } from "@storybook/react";
import React from 'react';
import CheckboxComponent from ".";

export default {
  title: "Inputs",
  component: CheckboxComponent,
  argTypes: {
    content: { control: "text", value: "Checkbox" },
  },
} as Meta;

const Template: Story = () => <CheckboxComponent />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  content: "Test",
};
