import { useState } from "react";
import { fetchMessages, sendMessage } from "../../api";

export const Footer = ({ socket, messages, receiver, setMessages }) => {
  const [text, setText] = useState("");
  const handleSend = async (e) => {
    e.preventDefault();
    sendMessage(receiver, text)
      .then((res) => {
        fetchMessages(window.location.pathname.split("/")[2]).then((res) => {
          setMessages(res);
          socket.emit("send_message", text);
          setText("");
        });
      });
  };
  return (
    <footer className="footer border-0 fixed">
      <div className="container p-2">
        <div className="chat-footer">
          <form onSubmit={handleSend}>
            <div className="form-group boxed">
              <div className="input-wrapper message-area">
                <div className="append-media"></div>
                <input
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  className="form-control"
                  placeholder="Type message..."
                />
                <button
                  type="submit"
                  className="btn btn-chat btn-icon btn-primary p-0 btn-rounded"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21.4499 11.11L3.44989 2.11C3.27295 2.0187 3.07279 1.9823 2.87503 2.00546C2.67728 2.02862 2.49094 2.11029 2.33989 2.24C2.18946 2.37064 2.08149 2.54325 2.02982 2.73567C1.97815 2.9281 1.98514 3.13157 2.04989 3.32L4.99989 12L2.09989 20.68C2.05015 20.8267 2.03517 20.983 2.05613 21.1364C2.0771 21.2899 2.13344 21.4364 2.2207 21.5644C2.30797 21.6924 2.42378 21.7984 2.559 21.874C2.69422 21.9496 2.84515 21.9927 2.99989 22C3.15643 21.9991 3.31057 21.9614 3.44989 21.89L21.4499 12.89C21.6137 12.8061 21.7512 12.6786 21.8471 12.5216C21.9431 12.3645 21.9939 12.184 21.9939 12C21.9939 11.8159 21.9431 11.6355 21.8471 11.4784C21.7512 11.3214 21.6137 11.1939 21.4499 11.11ZM4.70989 19L6.70989 13H16.7099L4.70989 19ZM6.70989 11L4.70989 5L16.7599 11H6.70989Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
