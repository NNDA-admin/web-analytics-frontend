import React from "react";
import { AppShell, Stack, NavLink, ScrollArea } from "@mantine/core";

const Navbar: React.FC = () => {
  return (
    <AppShell.Navbar style={{ width: 250 }} p="xs">
      <AppShell.Section grow component={ScrollArea}>
        <Stack>
          <NavLink label="Dashboard" />
          <NavLink label="Mines" />
          <NavLink label="Plants" />
          <NavLink label="Metallurgy" />
        </Stack>
      </AppShell.Section>
    </AppShell.Navbar>
  );
};

export default Navbar;
