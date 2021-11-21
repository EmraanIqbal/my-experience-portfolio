import { Box } from "@chakra-ui/layout";
import AboutSection from "./components/AboutSection";
import FolderSection from "./components/FolderSection";
import HomeSection from "./components/HomeSection";
import Modal from "./components/Modal/Modal";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <Box>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      {/* <Modal /> */}
      <FolderSection />
    </Box>
  );
}

export default App;
