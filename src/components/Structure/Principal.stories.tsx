import type { Meta, StoryObj } from "@storybook/react";

import Principal from "./Principal";

const meta = {
  component: Principal,
} satisfies Meta<typeof Principal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
