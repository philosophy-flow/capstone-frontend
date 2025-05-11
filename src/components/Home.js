import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import Prediction from "./Prediction";
import Logo from "./Logo";

export default function Home({ articleValidity, setArticleValidity }) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });
    const [errors, setErrors] = useState({});
    const [awaitingPrediction, setAwaitingPrediction] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = { title: "", content: "" };

        tempErrors.title = !formData.title
            ? "Error — article title is required."
            : "";
        tempErrors.content = !formData.content
            ? "Error — article content is required."
            : "";

        setErrors(tempErrors);
        return !(tempErrors.title && tempErrors.content);
    };

    const handleLoad = () => {
        setTimeout(() => {
            setAwaitingPrediction(false);
        }, 1000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                setAwaitingPrediction(true);
                const API_URL = process.env.REACT_APP_API_URL;
                const response = await fetch(`${API_URL}/predict`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Failed to contact the neural network.");
                }

                const data = await response.json();
                setArticleValidity(data.prediction);
                handleLoad();
            } catch (error) {
                console.error(error);
                handleLoad();
                setArticleValidity(
                    "There was an error contacting the neural network — please try again later."
                );
            }
        }
    };

    const resetFlow = () => {
        setFormData({
            title: "",
            content: "",
        });
        setArticleValidity(null);
    };

    return (
        <>
            <h1>
                <Logo />
                <span>Fake News Flush</span>
            </h1>
            <p className="helper-text">
                Enter a news article into the form below, and we'll tell you if
                you should <strong>flush</strong> it.
            </p>
            <hr className="home-divider" />
            {awaitingPrediction ? (
                <CircleLoader color="#7851a9" size={150} speed="2" />
            ) : articleValidity ? (
                <>
                    <Prediction articleValidity={articleValidity} />
                    <button onClick={resetFlow}>Reset</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Article Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors.title && (
                            <span className="form-error">{errors.title}</span>
                        )}
                    </div>

                    <div className="content-form-control">
                        <label htmlFor="content">Article Content</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="6"
                            cols="50"
                        ></textarea>
                        {errors.title && (
                            <span className="form-error">{errors.content}</span>
                        )}
                    </div>

                    <button className="form-button">Submit</button>
                </form>
            )}
        </>
    );
}
