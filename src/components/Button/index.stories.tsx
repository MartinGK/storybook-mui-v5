import { Meta, Story } from "@storybook/react";
import React from "react";
import ButtonComponent, { ButtonProps } from ".";

export default {
  title: "Buttons",
  component: ButtonComponent,
  argTypes: {
    content: { control: "text", value: "Button" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  content: "Test",
};
