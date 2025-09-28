import React from "react";
import { AppShell, Group, Burger, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  opened: boolean;
  onToggle: () => void;
};

const Header: React.FC<Props> = ({ opened, onToggle }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AppShell.Header style={{ height: 60 }} p="md">
      <Group justify="space-between" style={{ height: "100%" }}>
        <Group>
          {isMobile && <Burger opened={opened} onClick={onToggle} size="sm" />}
          <Text fw={700}>Ore Analytics</Text>
        </Group>
        <div>🔍</div>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
