export default function Visualize() {
    return (
        <>
            <h1 className="h2">Visualize the Training Set</h1>
            <div className="data-container">
                <p>
                    A publicly available{" "}
                    <a
                        href="https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kaggle dataset
                    </a>{" "}
                    comprising approximately 45,000 articles labeled as real or
                    fake was used to train the neural network. Python
                    visualization tools were used to better understand the
                    underlying nature of the data, and results are available
                    below.
                </p>
                <ul className="data-visual-list">
                    <li>
                        <div className="data-visual-text-container">
                            <h2 className="h3">Histogram | Headline Length</h2>
                            <p>
                                This shows the distribution of article headline
                                lengths by word count. Fake news articles tend
                                to have longer titles to pack in more dramatic
                                or eye-catching words.
                            </p>
                        </div>
                        <div className="data-visual-img-container">
                            <img
                                src="/assets/histogram-headline-length.png"
                                alt="a histogram confirming fake articles have longer headlines than real articles"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="data-visual-text-container">
                            <h2 className="h3">
                                Strip Plot | Headline Clickbait Analysis
                            </h2>
                            <p>
                                This visualizes the clickbait score of article
                                headlines based on certain linguistic features
                                like excessive punctuation or capitalized words.
                                Fake news articles tend to use more
                                clickbait-style headlines to attract attention.
                            </p>
                        </div>
                        <div className="data-visual-img-container">
                            <img
                                src="/assets/strip-plot-clickbait-analysis.png"
                                alt="a strip plot confirms fake articles have significantly larger clickbait values than real articles"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="data-visual-text-container">
                            <h2 className="h3">
                                Density Plot | Lexical Diversity
                            </h2>
                            <p>
                                Lexical diversity measures how varied the
                                vocabulary is within the articles — a higher
                                value means more unique words are used. Fake
                                articles often have lower lexical diversity,
                                reusing words and phrases to emphasize a point.
                            </p>
                        </div>
                        <div className="data-visual-img-container">
                            <img
                                src="/assets/density-plot-lexical-diversity.png"
                                alt="a density plot shows confirms real articles have more lexical diversity than fake articles"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
