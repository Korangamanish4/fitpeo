import AppRouter from "./Routes/AppRouter";
import Header from "./Components/Molecules/Header/Header";
import Navigation from "./Components/Molecules/Navigation/Navigation";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.AppContainer}>
      <Header />
      <div className={Styles.AppContent}>
        <Navigation />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
