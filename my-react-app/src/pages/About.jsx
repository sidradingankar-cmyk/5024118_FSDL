import { useEffect } from "react";

function About() {
  useEffect(() => {
    console.log("About Page Loaded");
  }, []);

  return (
    <div style={styles.container}>
      <h1>About Page</h1>
      <p>This app demonstrates React Router, Hooks, Refs, and Keys.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default About;