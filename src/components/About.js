export default function About() {
    return (
        <>
            <h1 className="h2">About</h1>
            <div className="data-container">
                <p>The project consists of three parts:</p>
                <ol>
                    <li>
                        A frontend <strong>React</strong> client — you're
                        interacting with it now.
                    </li>
                    <li>
                        A backend <strong>FastAPI</strong> web service that
                        preprocesses data for model analysis.
                    </li>
                    <li>
                        A custom LSTM neural network model built with
                        <strong>TensorFlow and Keras</strong> that applies
                        binary text classification to predict the legitimacy of
                        news articles.
                    </li>
                </ol>
            </div>
        </>
    );
}
