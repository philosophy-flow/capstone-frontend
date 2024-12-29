export default function Prediction({ articleValidity }) {
  let prediction;
  if (articleValidity === "REAL") {
    prediction = (
      <p>
        The model predicts that the provided article is{" "}
        <span className="real-label">REAL</span> — keep it.
      </p>
    );
  } else if (articleValidity === "FAKE") {
    prediction = (
      <p>
        The model predicts that the provided article is{" "}
        <span className="fake-label">FAKE</span> — flush it.
      </p>
    );
  } else {
    prediction = (
      <p>
        The neural network can't be reached right now — please try again later.
      </p>
    );
  }
  return prediction;
}
