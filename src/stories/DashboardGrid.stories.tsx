import type { Meta, StoryObj } from "@storybook/react";

import { DashboardGrid } from "../components/DashboardGrid";

const meta = {
  title: "DashboardGrid",
  component: DashboardGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
