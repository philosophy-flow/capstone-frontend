export default function Testing() {
  return (
    <>
      <h1 className="h2">Testing Methodology</h1>
      <div className="data-container">
        <h2 className="h3">Pre-Integration Testing</h2>
        <p className="testing-page-content">
          The neural network model was tested automatically in the training
          environment prior to integration with the web service. Of the 45,000
          articles in the data set, 25% of those articles were partitioned into
          a separate testing set. Keras was used to batch test this set after
          training, and the model achieved a 98% accuracy score.
        </p>
        <h2 className="h3">Post-Integration Testing</h2>
        <p className="testing-page-content">
          After integrating the neural network model into the web service, many
          articles found on the internet were manually fed into it to better
          compare its accuracy against newer data independent of the initial
          training and testing sets. The model tends to do well with articles
          centered around politics and world events, but it isn't as performant
          with other topics. This suggests the training set was biased towards
          the aforementioned subjects.
        </p>
        <p>
          A few articles and their prediction results are listed below — click a
          title to view the article:
        </p>
        <table border="1">
          <thead>
            <tr>
              <th>Article Name</th>
              <th>Topic</th>
              <th>Real / Fake</th>
              <th>Prediction Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="prediction-success">
              <td>
                <a
                  href="https://www.cnn.com/2024/12/28/politics/trump-musk-foreign-worker-visas-backlash/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Trump defends foreign worker visas, siding with Musk amid MAGA
                  backlash
                </a>
              </td>
              <td>Politics</td>
              <td>Real</td>
              <td>Real</td>
            </tr>
            <tr className="prediction-success">
              <td>
                <a
                  href="https://www.foxnews.com/world/see-it-china-stuns-maiden-flight-sixth-generation-aircraft"
                  target="_blank"
                  rel="noreferrer"
                >
                  SEE IT: China stuns with maiden flight of sixth-generation
                  aircraft
                </a>
              </td>
              <td>World News</td>
              <td>Real</td>
              <td>Real</td>
            </tr>
            <tr className="prediction-success">
              <td>
                <a
                  href="https://theonion.com/fact-checking-rfk-jr-on-health/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fact-Checking RFK Jr. On Health
                </a>
              </td>
              <td>Politics</td>
              <td>Fake</td>
              <td>Fake</td>
            </tr>
            <tr className="prediction-success">
              <td>
                <a
                  href="https://theonion.com/zelensky-calls-on-u-s-to-send-totally-psycho-marine-1850041391/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zelensky Calls On U.S. To Send Totally Psycho Marine
                </a>
              </td>
              <td>World News</td>
              <td>Fake</td>
              <td>Fake</td>
            </tr>
            <tr className="prediction-success">
              <td>
                <a
                  href="https://www.nbcnews.com/pop-culture/pop-culture-news/blake-lively-justin-baldoni-it-ends-us-lawsuit-what-know-rcna185274"
                  target="_blank"
                  rel="noreferrer"
                >
                  What to know about the Blake Lively and Justin Baldoni drama
                </a>
              </td>
              <td>Celebrity Culture</td>
              <td>Real</td>
              <td>Real</td>
            </tr>
            <tr className="prediction-fail">
              <td>
                <a
                  href="https://www.rollingstone.com/music/music-features/bob-dylan-movie-a-complete-unknown-fact-check-1235194229/"
                  target="_blank"
                  rel="noreferrer"
                >
                  What the Bob Dylan Biopic 'A Complete Unknown' Gets Wrong
                </a>
              </td>
              <td>Film & Music</td>
              <td>Real</td>
              <td>Fake</td>
            </tr>
            <tr className="prediction-fail">
              <td>
                <a
                  href="https://ew.com/cosby-show-actor-geoffrey-owens-struggles-financially-trader-joes-moment-8767012"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cosby Show actor Geoffrey Owens reveals he still struggles to
                  make ends meet after viral Trader Joe's moment
                </a>
              </td>
              <td>Celebrity Culture</td>
              <td>Real</td>
              <td>Fake</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
