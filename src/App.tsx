import { FeedProvider } from "./contexts/FeedContext";
import AppRoutes from "./routes";

function App() {
  return (
    <FeedProvider>
      <AppRoutes />
    </FeedProvider>
  );
}

export default App;
