import React from "react";
import PropTypes from "prop-types";
import { useNProgress } from "@tanem/react-nprogress";
import styles from "./progress-bar.module.css";

const ProgressBar = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating,
    });

    return (
        <div
            className={styles.progressContainer}
            style={{
                opacity: isFinished ? 0 : 1,
                transition: `opacity ${animationDuration}ms linear`,
            }}
        >
            <div
                className={styles.progressBar}
                style={{
                    marginLeft: `${(-1 + progress) * 100}%`,
                    transition: `margin-left ${animationDuration}ms linear`,
                }}
            />
        </div>
    );
};

ProgressBar.propTypes = {
    isAnimating: PropTypes.bool.isRequired,
};

export default React.memo(ProgressBar);
