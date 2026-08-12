function ProgressBar({ progress }) {
    return (
        <div className="wrapper-progress">
            <div className="progress-bar">
                <div 
                    className="progress" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p>
            {progress.toFixed(0)}%
            </p>
        </div>
    );
}

export default ProgressBar;