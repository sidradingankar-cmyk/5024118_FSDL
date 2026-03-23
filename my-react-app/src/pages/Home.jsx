import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Welcome to Home</h1>
      <p>Click the button to increase count</p>

      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;