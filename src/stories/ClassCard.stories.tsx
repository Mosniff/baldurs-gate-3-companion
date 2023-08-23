import type { Meta, StoryObj } from "@storybook/react";

import { ClassCard } from "../components/ClassCard";

const meta = {
  title: "ClassCard",
  component: ClassCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ClassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    characterClass: "barbarian",
  },
};
