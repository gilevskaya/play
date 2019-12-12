import React from "react";

export const OrderBook = () => {
  const [bids, setBids] = React.useState();
  const [asks, setAsks] = React.useState();
  const [totalBids, setTotalBids] = React.useState();
  const [totalAsks, setTotalAsks] = React.useState();

  React.useEffect(() => {
    const socket = new WebSocket(
      "wss://www.bitmex.com/realtime?subscribe=orderBook10:XBTUSD"
    );
    socket.addEventListener("message", event => {
      const data = JSON.parse(event.data).data;
      if (Array.isArray(data) && data.length > 0) {
        const { bids, asks } = data[0];
        setBids(bids);
        setAsks(asks);

        setTotalBids(bids.reduce((acc, e) => acc + e[1], 0));
        setTotalAsks(asks.reduce((acc, e) => acc + e[1], 0));
      }
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "6rem 6rem 6rem"
        }}
      >
        {asks &&
          asks.map((a, i) => (
            <>
              <div style={{ gridRow: asks.length - i }}>{a[0]}</div>
              <div>{a[1]}</div>
              <div>{((a[1] / totalAsks) * 100).toFixed(1)}</div>
            </>
          ))}
      </div>
      <div>------------------------</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "6rem 6rem 6rem"
        }}
      >
        {bids &&
          bids.map(b => (
            <>
              <div>{b[0]}</div>
              <div>{b[1]}</div>
              <div>{((b[1] / totalBids) * 100).toFixed(1)}</div>
            </>
          ))}
      </div>
    </>
  );
};
