import React from "react";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";

function JoinGame() {
  const [rivalUsername, setRivalUsername] = useState("");
  const { client } = useChatContext();
  const createChannel = async () => {
    const response = await client.queryUsers({ name: { $eq: rivalUsername } });
    if (response.users.length === 0) {
      alert("User not found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      menbers: [client.userID, response.users[0].id],
    });
  };
  return (
    <div className="joinGame">
      <h4>Create Game</h4>
      <input
        placeholder="Username of Rival ..."
        onChange={(event) => {
          setRivalUsername(event.target.value);
        }}
      />
      <button onClick={createChannel}>Join Game</button>
    </div>
  );
}

export default JoinGame;
