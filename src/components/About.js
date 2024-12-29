export default function About() {
  return (
    <>
      <h1 className="h2">About the Project</h1>
      <div className="data-container">
        <p>
          This web application was developed in December of 2024 to satisfy the
          computer science capstone project requirements at Western Governor's
          University. The goal of the project was to utilize a machine learning
          algorithm to satisfy a business need. I settled on training a LSTM
          neural network to perform binary text classification by labeling news
          articles as real or fake.
        </p>
        <p>The application consists of three components:</p>
        <ol>
          <li>
            A simple frontend client built with React that manages form requests
            — you're interacting with it now.
          </li>
          <li>
            A backend web service built with FastAPI that preprocesses data from
            the client to prepare it for neural network analysis.
          </li>
          <li>
            A custom LSTM neural network model built with TensorFlow and Keras,
            trained on a dataset of over 45,000 articles. The model is used by
            the backend to predict the legitimacy of news articles.
          </li>
        </ol>
      </div>
    </>
  );
}
