import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Courses from "./components/courses";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <section id="home" className="welcome">
          <h1>Welcome to Student Portal</h1>
          <p>Manage your profile and courses in one place.</p>
        </section>

        <Profile />

        <Courses />
      </main>

      <Footer />
    </div>
  );
}

export default App;