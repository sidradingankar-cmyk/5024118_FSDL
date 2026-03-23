import { useRef } from "react";

function Users() {
  const inputRef = useRef();
  const users = ["Sidra", "Aman", "Rahul"];

  return (
    <div style={styles.container}>
      <h1>Users</h1>

      <div style={styles.inputBox}>
        <input ref={inputRef} placeholder="Type something..." />
        <button onClick={() => inputRef.current.focus()}>
          Focus
        </button>
      </div>

      <ul style={styles.list}>
        {users.map((user, index) => (
          <li key={index} style={styles.item}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  inputBox: {
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "10px",
    margin: "5px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
  },
};

export default Users;