import React from "react";
import { AppShell, Text, Group } from "@mantine/core";

const Footer: React.FC = () => {
  return (
    <AppShell.Footer style={{ height: 48 }} p="md">
      <Group justify="center" style={{ height: "100%" }}>
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} Ore Analytics
        </Text>
      </Group>
    </AppShell.Footer>
  );
};

export default Footer;
