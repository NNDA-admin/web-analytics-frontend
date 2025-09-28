// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// import { Placeholder } from "./components/Placeholder";

import "./App.css";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold">Управление аналитикой данных</h1>
//       <h2 className="text-2xl font-bold">Аналитические дашборды</h2>
//       <Placeholder />
//     </div>
//   );
// }

// function App() {
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <AppShell
//         padding="md"
//         header={<Header />}
//         navbar={<Navbar />}
//         footer={<Footer />}
//       >
//         <h1 className="text-2xl font-bold">Добро пожаловать в Ore Analytics!</h1>
//         <p className="mt-2 text-gray-600">
//           Здесь будет аналитика по рудникам, фабрикам и заводам 🚀
//         </p>
//       </AppShell>
//     </MantineProvider>
//   );
// }

function App() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm" }}
      footer={{ height: 48 }}
    >
      <Header opened={opened} onToggle={toggle} />
      <Navbar />
      <AppShell.Main>
        <h1 className="text-2xl font-bold">Добро пожаловать в Ore Analytics!</h1>
        <p className="mt-2 text-gray-600">
          Здесь будет аналитика по рудникам, фабрикам и заводам 🚀
        </p>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}

export default App;
